var stageName : String;

function OnTriggerEnter (other : Collider) {	
	//Check if what collided was the player
	if( other.gameObject.CompareTag( "Player" ) ) {
		if( stageName ) {
			//stageObject2.transform.position.z = stageObject1.transform.position.z + 250.588;
			Application.LoadLevel(stageName);
		}
	}
}
