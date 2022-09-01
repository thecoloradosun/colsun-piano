/**
 * Get the root.
 */
const root = document.querySelector( ':root' );

/**
 * Set our Piano class tokens.
 *
 * @param {string} resourceId Resource ID from Piano.
 */
const setTokens = ( loggedIn, resourceId ) => {

	// Login tokens.
	setLoggedOutTokens( ! loggedIn );
	setLoggedInTokens( loggedIn );

	// Hide `Logout` when already logged out.
	setLogoutLinkToken( loggedIn );

	// Hide `Login` when already logged in.
	setLoginLinkToken( ! loggedIn );

	// Show `My Account` when logged in.
	setMyAccountToken( loggedIn );

	// Resource tokens.
	switch ( resourceId ) {
		default:
			// Not a member.
			setMembersTokens( false );

			// Reset all resource tokens.
			setBasicTokens( false );
			setBasicPlusTokens( false );
			setPremiumTokens( false );
			setChampionTokens( false );
			break;

		/**
		 * Basic.
		 */
		case 'TierBasic':
			setBasicTokens( true );
			setMembersTokens( true );
			break;

		/**
		 * Basic plus.
		 */
		case 'TierBasicPlus':
			setBasicPlusTokens( true );
			setMembersTokens( true );
			break;

		/**
		 * Premium.
		 */
		case 'TierPremium':
			setPremiumTokens( true );
			setMembersTokens( true );
			break;

		/**
		 * Champion.
		 */
		case 'TierChampion':
			setChampionTokens( true );
			setMembersTokens( true );
			break;
	}
}

/**
 * Set the tokens for a given key.
 *
 * @param {string} key  Tier key.
 * @param {bool}   show Toggle class state.
 */
const setTokensForKey = ( key, show ) => {
	if ( show ) {
		root.style.setProperty( `--colsun--show-for-${ key }`, 'inherit' );
		root.style.setProperty( `--colsun--hide-for-${ key }`, 'none' );
	} else {
		root.style.setProperty( `--colsun--show-for-${ key }`, 'none' );
		root.style.setProperty( `--colsun--hide-for-${ key }`, 'inherit' );
	}
}

const setLoggedOutTokens = ( show ) => {
	setTokensForKey( 'logged-out', show );
};

const setLoggedInTokens = ( show ) => {
	setTokensForKey( 'logged-in', show );
};

const setMembersTokens = ( show ) => {
	setTokensForKey( 'members', show );

	// Hide `Become a member` when already a member.
	setBecomeAMemberToken( ! show );
};

const setBasicTokens = ( show ) => {
	setTokensForKey( 'basic-members', show );
};

const setBasicPlusTokens = ( show ) => {
	setTokensForKey( 'basic-plus-members', show );
};

const setPremiumTokens = ( show ) => {
	setTokensForKey( 'premium-members', show );
};

const setChampionTokens = ( show ) => {
	setTokensForKey( 'champion-members', show );
};

const setBecomeAMemberToken = ( show ) => {
	root.style.setProperty( '--colsun--become-a-member-display', show ? 'block' : 'none' );
}

const setLoginLinkToken = ( show ) => {
	root.style.setProperty( '--colsun--login-link-display', show ? 'inherit' : 'none' );
}

const setMyAccountToken = ( show ) => {
	root.style.setProperty( '--colsun--my-account-link-display', show ? 'inherit' : 'none' );
}

const setLogoutLinkToken = ( show ) => {
	root.style.setProperty( '--colsun--logout-link-display', show ? 'inherit' : 'none' );
}

export default setTokens;
