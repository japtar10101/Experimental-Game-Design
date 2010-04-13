// Player's position
var playerPos : Transform;
// The material to switch to after the player passes the object
var transparent : Material;

// The location of this object
private var thisPos : Transform;
// The object to switch the Material of
private var thisRen : Renderer;

function Start () {
	if( !transparent || !playerPos ) {
		Destroy( this );
	} else {
		thisPos = GetComponent( Transform );
		thisRen = GetComponent( Renderer );
	}
}

function Update () {
	if( playerPos.position.z >= thisPos.position.z ) {
		thisRen.material = transparent;
	}
}