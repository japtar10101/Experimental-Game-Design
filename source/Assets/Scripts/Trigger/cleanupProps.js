var cleanupProps : GameObject[];

function OnTriggerEnter (other : Collider) {	
	//Check if what collided was the player
	if( other.gameObject.CompareTag( "Player" ) ) {
		for( cleanup in cleanupProps ) {
			Destroy( cleanup );
		}
	}
}