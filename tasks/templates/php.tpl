<?php

final class Disposable {
	private static $db = <%= db %>;
	private function __clone() {}
	private function __construct(){}
	public static function is( $mail ) {
		return ( in_array( explode( '@', $mail )[1], self::$db ) );
	}
}
