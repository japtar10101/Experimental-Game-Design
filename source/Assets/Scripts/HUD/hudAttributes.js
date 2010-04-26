static var fade : fadeout;
static var hud : bars;

function Start() {
	fade = GetComponent( fadeout );
	hud = GetComponent(  bars );
	if( !fade || !hud )
		print( "Hud not set, game will probably freak out" );
}

static function Gameover( level : String ) {
	fade.Fadeout( level, "Game Over" );
}

static function Complete( level : String ) {
	fade.Fadeout( level, "" );
}
