var stageObject2 : GameObject;
var stageObject1 : GameObject;

function OnTriggerEnter (other : Collider) {	
	//Check if what collided was the player
	if( other.gameObject.CompareTag( "Player" ) ) {
		stageObject2.transform.position.z = stageObject1.transform.position.z + 
250.588;
	}
}
