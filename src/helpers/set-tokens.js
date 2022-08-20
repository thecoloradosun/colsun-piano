/**
 * Get the root.
 */
const root = document.querySelector( ':root' );

/**
 * Set our Piano class tokens.
 *
 * @param {string} resourceId Resource ID from Piano.
 */
const setTokensByResourceId = ( resourceId ) => {
	switch ( resourceId ) {

		/**
		 * Anonymous, not logged in.
		 */
		default:
		case '':
			setMembersTokens( false );
			setAnonymousTokens( true );
			break;

		/**
		 * Logged in.
		 */
		case 'FreeTier':
			setMembersTokens( false );
			setAnonymousTokens( false );
			break;

		/**
		 * Basic.
		 */
		case 'TierBasic':
			setBasicTokens( true );
			setMembersTokens( true );
			setAnonymousTokens( false );
			break;

		/**
		 * Basic plus.
		 */
		case 'TierBasicPlus':
			setBasicPlusTokens( true );
			setMembersTokens( true );
			setAnonymousTokens( false );
			break;

		/**
		 * Premium.
		 */
		case 'TierPremium':
			setPremiumTokens( true );
			setMembersTokens( true );
			setAnonymousTokens( false );
			break;

		/**
		 * Champion.
		 */
		case 'TierChampion':
			setChampionTokens( true );
			setMembersTokens( true );
			setAnonymousTokens( false );
			break;
	}
}

/**
 * Set the tokens for a given key.
 *
 * @param {string} key  Tier key.
 * @param {bool}   show Toggle class state.
 */
const setTokens = ( key, show ) => {
	if ( show ) {
		root.style.setProperty( `--colsun--show-for-${ key }`, 'inherit' );
		root.style.setProperty( `--colsun--hide-for-${ key }`, 'none' );
	} else {
		root.style.setProperty( `--colsun--show-for-${ key }`, 'none' );
		root.style.setProperty( `--colsun--hide-for-${ key }`, 'inherit' );
	}
}

const setMembersTokens = ( show ) => {
	setTokens( 'members', show );
};

const setAnonymousTokens = ( show ) => {
	setTokens( 'anonymous', show );
};

const setBasicTokens = ( show ) => {
	setTokens( 'basic-members', show );
};

const setBasicPlusTokens = ( show ) => {
	setTokens( 'basic-plus-members', show );
};

const setPremiumTokens = ( show ) => {
	setTokens( 'premium-members', show );
};

const setChampionTokens = ( show ) => {
	setTokens( 'champion-members', show );
};

export default setTokensByResourceId;
