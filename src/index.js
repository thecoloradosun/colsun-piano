import setTokens from './helpers/set-tokens';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './classes.scss';

/**
 * Get query arg value.
 *
 * @param {string}      key          Key.
 * @param {string|null} defaultValue Optional. Default value for when key does
 *                                   not exist.
 * @return {string|null}
 */
const getQueryParam = ( key, defaultValue = null ) => {
	const queryArgs = new Proxy( new URLSearchParams( window.location.search ), {
		get: ( searchParams, prop ) => searchParams.get( prop ),
	} );

	return queryArgs[ key ] ?? defaultValue;
}

/**
 * Update the piano classes.
 */
const initPianoClasses = () => {

	// Get information about the user's access to resources.
	window.tp.api.callApi( '/access/list', {}, function( response ) {

		// Get the `mockPianoRid` from our query arg (for testing), or our logged in RID.
		const resourceId = getQueryParam( 'mockPianoRid', response?.data?.[0]?.resource?.rid ?? '' );

		// Get the `mockPianoLoggedIn` query arg (for testing), or check Piano's state.
		const loggedIn = getQueryParam( 'mockPianoLoggedIn', window.tp.user.isUserValid() ?? false );

		// Set our tokens accordingly.
		setTokens( loggedIn === 'true', resourceId );
	} );
};

/**
 * Attach a logout and refresh listener to all .wp_piano_logout_button classes.
 */
const registerLogoutButtons = () => {
	const logoutButtons = document.getElementsByClassName( 'wp_piano_logout_button' );
	Array.from( logoutButtons ).forEach( ( logoutButton ) => {
		logoutButton.addEventListener( 'click', ( event ) => {
			event.preventDefault();
			tp.pianoId.logout();
			location.reload();
		} );
	} );
}

/**
 * Attempt to display a resetPasswordToken modal.
 */
const triggerPasswordReset = () => {

	// Cannot reset password if logged in.
	if ( tp.user.isUserValid() ) {
		return;
	}

	// Do we have a reset token?
	const tokenMatch = location.search.match( /reset_token=([A-Za-z0-9]+)/ );
	if ( ! tokenMatch ) {
		return;
	}

	// Present password reset form with the found token
	tp.pianoId.show({
		'resetPasswordToken': tokenMatch[1], // Get value of the token.
		loggedIn: function () {
			location.reload();
		},
	});
}

/**
 * Refresh the page when a user saves their newsletter preferences on the
 * `/account/` route.
 *
 * Ideally we wouldn't need this, but there's some hacky stuff going on.
 *
 * When in doubt, consult with Eric.
 */
const reloadPageWhenNewslettersAreUpdated = ( { data } ) => {
	/**
	 * Parse the event.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event
	 */
	const {
		event,
		sender,
	} = JSON.parse( data );

	if (
		'formSend' === event // Event should be 'formSend', indicating a POST was made.
		&& sender.startsWith( 'piano-id-form' ) // ID of the form that made the request.
		&& window.location.pathname.startsWith( '/account/' ) // Starting path of our settings page.
	) {
		location.reload();
	}
};

/**
 * Self invoking function.
 */
( function() {

	// Ensure we're ready to work with Piano.
	window.tp = window.tp || [];

	// Setup our special resource classes.
	window.tp.push( [ 'init', initPianoClasses ] );
	window.tp.push( ['addHandler', 'loginSuccess', initPianoClasses ] );

	// Setup logout buttons.
	window.tp.push( [ 'init', registerLogoutButtons ] );

	// Attempt to fire a password reset modal.
	tp.push( [ 'init', triggerPasswordReset ] );

	// Refresh the page when newsletter settings are updated.
	window.addEventListener( 'message', reloadPageWhenNewslettersAreUpdated );
} )();
