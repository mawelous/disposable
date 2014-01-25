<?php

final class Disposable {
	private static $db = <% db %>;
	private function __clone() {}
	private function __construct(){}
	public static function is( $mail ) {
		return ( array_flip( self::$db )[explode( '@', $mail )[1]] !== NULL ) ? true : false;
	}
}
