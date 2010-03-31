var rotateAround : Transform = null;
var turnScript : moveForward;
var rotateSpeed : float = 0;

function Start() {
	if( !moveForward ) {
		Destroy( this );
	}
}
	
function OnTriggerEnter (other : Collider) {
	// First, verify what we're colliding with the player
	var collided = other.gameObject;
	if( collided.CompareTag( "Player" ) ) {
		turnScript.SetRotatePoint( rotateAround, rotateSpeed );
	}
}

@script RequireComponent(Collision)
