var changeAngle : float = 0;
var turnScript : moveForward;

function Start() {
	if( !moveForward ) {
		Destroy( this );
	}
}
	
function OnTriggerEnter (other : Collider) {
	// First, verify what we're colliding with is a sword
	var collided = other.gameObject;
	if( collided.CompareTag( "Player" ) ) {
		turnScript.SetTurnY( changeAngle );
		print("Set script's angle to " + turnScript.yTurn);
	}
}

@script RequireComponent(Collision)
