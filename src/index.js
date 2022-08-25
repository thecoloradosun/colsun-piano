import setTokensByResourceId from './helpers/set-tokens';

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
 * When the page loads, determine our resourceId, and initalize our class
 * tokens.
 */
const initClassTokens = () => {

	// Get information about the user's access to resources.
	window.tp.api.callApi( '/access/list', {}, function( response ) {

		// Get the `rid` from our query arg (for testing), or our logged in RID.
		const resourceId = getQueryParam( 'rid', response?.data?.[0]?.resource?.rid ?? '' );

		// Set our tokens accordingly.
		setTokensByResourceId( resourceId );
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
 * Refresh the page on user login.
 *
 * This allows us to ignore dynamic UI changes.
 */
const loginCallback = () => {
	location.reload();
};

/**
 * Self invoking function.
 */
( function() {
	// Ensure we're ready to work with Piano.
	window.tp = window.tp || [];

	// Setup our special resource classes.
	window.tp.push( [ 'init', initClassTokens ] );

	// Setup logout buttons.
	window.tp.push( [ 'init', registerLogoutButtons ] );

	// Watch for user login.
	tp.push(['addHandler', 'loginSuccess', loginCallback ]);

	// Attempt to fire a password reset modal.
	tp.push( [
		'init',
		function() {
			// Only works for anonymous users.
			if ( ! tp.user.isUserValid() ) {

				// Check for token.
				const tokenMatch = location.search.match( /reset_token=([A-Za-z0-9]+)/ );

				// Match token.
				if ( tokenMatch ) {
					const token = tokenMatch[1]; // Get value of the token.

					// Present password reset form with the found token
					tp.pianoId.show({
						'resetPasswordToken': token,
						loggedIn: function () {
							location.reload();
						},
					});
				}
			}
		}
	] );
} )();
