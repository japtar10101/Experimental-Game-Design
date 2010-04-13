var playAnimation : Animation[];

function OnTriggerEnter (other : Collider) {	
	//Check if what collided was the player
	if( other.gameObject.CompareTag( "Player" ) ) {
		for( animate in playAnimation ) {
			animate.Play();
		}
	}
}