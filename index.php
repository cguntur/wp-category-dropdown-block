<?php
/*
Plugin Name: WP Category Dropdown Block
Plugin URI: http://chamberdashboard.com
Description: Gutenberg block that displays the parent and child categories in a dropdown
Version: 1.0
Author: Chandrika Guntur
Author URI: https://www.gcsdesign.com
Text Domain: wpcd
*/

function wp_cat_dropdown_block_scripts() {
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');	
	wp_register_script(
		'wp-cat-drop-blocks',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
	wp_enqueue_script('wp-cat-drop-blocks');
	//wp_localize_script( 'bd-blocks', 'wpAjax', array( 'wpurl' => get_bloginfo('wpurl') ) );
}
add_action( 'enqueue_block_editor_assets', 'wp_cat_dropdown_block_scripts', 30 );

?>