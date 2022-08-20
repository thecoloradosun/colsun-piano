<?php
/**
 * Plugin Name: Colsun Piano
 * Description: Customizations to Piano for The Colorado Sun.
 * Version:     1.0.0
 * Author:      thecoloradosun, jameswalterburke
 * Text Domain: colsun-piano
 *
 * @package     colsun-piano
 */

namespace Colorado_Sun;

define( 'COLSUN_PIANO_PATH', dirname( __FILE__ ) );
define( 'COLSUN_PIANO_URL', plugin_dir_url( __FILE__ ) );

/**
 * Enqueue assets.
 */
function enqueue_piano_customizations() {
	// Styles.
	wp_enqueue_style(
		'colsun-piano-styles',
		COLSUN_PIANO_URL . 'build/index.css',
		[],
		filemtime( COLSUN_PIANO_PATH . 'build/index.css' )
	);

	// Script.
	wp_enqueue_script(
		'colsun-piano-script',
		COLSUN_PIANO_URL . 'build/index.js',
		[],
		filemtime( COLSUN_PIANO_PATH . 'build/index.js' )
	);
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\enqueue_piano_customizations' );
