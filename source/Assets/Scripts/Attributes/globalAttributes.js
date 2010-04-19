static var retPos : GameObject;
static var charPos : GameObject;

var findReticule : String = "bigReticule";
var findCharacter : String = "character";

function Start() {
	retPos = GameObject.Find( findReticule );
	charPos = GameObject.Find( findCharacter );
	if( !retPos || !charPos )
		print( "Positions not set, game will probably freak out." );
}
