static var retPos : GameObject;
static var charPos : GameObject;
static var script : playerAttributes;

var findReticule : String = "bigReticule";
var findCharacter : String = "character";

function Start() {
	retPos = GameObject.Find( findReticule );
	charPos = GameObject.Find( findCharacter );
	if( !retPos || !charPos ) {
		print( "Positions not set, game will probably freak out." );
		return;
	}
	
	script = charPos.GetComponent( playerAttributes );
	if( !script ) {
		print( "Positions not set, game will probably freak out." );
		return;
	}
}
