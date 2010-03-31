var changeAngle : float = 0;

function OnTriggerEnter (other : Collider) {
	// First, verify what we're colliding with is a sword
	var collided = other.gameObject;
	if( collided.CompareTag( "Player" ) ) {
		collided.GetComponent("MoveForward");
	}
}

/*
function OnTriggerExit (other : Collider) {
	// First, verify what we're colliding with is a sword
	var collided = other.gameObject;
	if( collided.CompareTag( "Sword" ) && collided.renderer.enabled ) {
		audio.PlayOneShot(deathSound);
		Destroy( gameObject );
	}
}
*/
@script RequireComponent(Collision)
