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
 * Self invoking function.
 */
( function() {
	window.tp = window.tp || [];
	window.tp.push( [ 'init', initClassTokens ] );
} )();
