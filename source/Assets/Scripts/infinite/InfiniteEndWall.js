var moveTo : GameObject;
var moveThis : GameObject;


function OnTriggerEnter (other : Collider) {	
	//Check if what collided was the player
	if( other.gameObject.CompareTag( "Player" ) )
		moveThis.transform.position.z = moveTo.transform.position.z;
}
