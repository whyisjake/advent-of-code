<?php
/**
 * Part Two
 */

$text  = file_get_contents( 'input.csv' );
$board = explode( PHP_EOL . PHP_EOL, $text );

foreach ( $board as $key => $value ) {
	$board[ $key ] = explode( PHP_EOL, $value );
}

foreach ( $board as $key => $value ) {
	foreach ( $value as $inner_key => $inner_value ) {
		$board[ $key ][ $inner_key ] = explode( ' ', $inner_value );
	}
}

$numbers = file_get_contents( 'draw.csv' );
$draw    = explode( ',', $numbers );

// $results = array();

// foreach ( $board as $key => $value ) {
// 	foreach ( $value as $inner_index => $inner_value ) {
// 		foreach ( $draw as $k => $v ) {
// 			$count = 0;
// 			// var_dump($k, $inner_value);
// 			if ( in_array( $k, $inner_value ) ) {
// 				$count++;
// 				// $results[ $inner_index ][ $inner_value ][ $k ] = $v;
// 				if ( 5 === $count ) {
// 					return;
// 				}
// 			}
// 		}
// 	}
// }

var_dump( $results );
