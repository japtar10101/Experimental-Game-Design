var stageName : String;

function OnTriggerEnter (other : Collider) {	
	//Check if what collided was the player
	if( other.gameObject.CompareTag( "Player" ) ) {
		if( stageName ) {
			Application.LoadLevel( stageName );
		}
	}
}
