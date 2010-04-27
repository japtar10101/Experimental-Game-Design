static var hud : bars;

function Start() {
	fade = GetComponent( fadeout );
	hud = GetComponent(  bars );
	if( !fade || !hud )
		print( "Hud not set, game will probably freak out" );
}

static function Gameover( level : String ) {
	fadeout.startFade( level, "Game Over", true, true );
}

static function Complete( level : String ) {
	fadeout.startFade( level, "", false, false );
}
