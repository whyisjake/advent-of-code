<?php

/**
 * Part Two
 */

$text         = file_get_contents('input.csv');
$array        = explode(PHP_EOL, $text);
$length       = strlen($array[0]);
$a            = 0;
$better_array = array();

$final  = loop_through_variants($array, $better_array, $a, $length, 'most');
$final1 = loop_through_variants($array, $better_array, $a, $length, 'least');
$result = $final * $final1;


var_dump(
	array(
		'oxygen generator rating' => $final,
		'CO2 scrubber rating' => $final1,
		'final' => $result,
	)
);

function get_most_popular_digit($collection)
{
	$length = $collection['length'];
	$array  = $collection['items'];
	$sum    = array_sum($collection['items']);
	return ($length / 2) > $sum ? 1 : 0;
}

function get_least_most_popular_digit($collection)
{
	$length = $collection['length'];
	$array  = $collection['items'];
	$sum    = array_sum($collection['items']);
	return ($length / 2) > $sum ? 0 : 1;
}

function loop_through_variants($array, $better_array, $a, $length, $popular)
{

	// Which array are we using?
	$array = ($a > 0) ? $better_array : $array;

	if (count($array) === 1) {
		return bindec($array[0]);
	}

	$collection           = array();
	$collection['length'] = count($array);

	// Find out what the most popular digit is.
	foreach ($array as $key => $value) {
		$collection['items'][] = $value[$a];
	}

	if ('most' === $popular) {
		$digit = get_most_popular_digit($collection);
	} else {
		$digit = get_least_most_popular_digit($collection);
	}

	// print( 'Popular Digit ' . $digit . "\n" );

	$better_array = build_better_array($array, $a, $digit);

	if ($a <= $length) {
		return loop_through_variants($array, $better_array, $a + 1, $length, $popular);
	}
}

function build_better_array($array, $index, $digit)
{
	// Filter out everything from the existing array.
	$new_array = array();
	foreach ($array as $key => $value) {
		// var_dump( $value[ $index ], $value );
		if ($value[$index] == $digit) {
			$new_array[] = $value;
		}
	}
	return $new_array;
}
