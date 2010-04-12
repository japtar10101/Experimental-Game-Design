var deathSound : AudioClip;

function OnTriggerEnter (other : Collider) {
	// First, verify what we're colliding with is a sword
	var collided = other.gameObject;
	if( collided.CompareTag( "EnemySpawn" ) ) {
		print("Hit block");
		//audio.PlayOneShot(deathSound);
		Destroy( collided );
	}
}

function OnTriggerExit (other : Collider) {
	// First, verify what we're colliding with is a sword
	var collided = other.gameObject;
	if( collided.CompareTag( "EnemySpawn" )) {
		//audio.PlayOneShot(deathSound);
		//Destroy( gameObject );
	}
}

@script RequireComponent(Collision)