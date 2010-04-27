var stageName : String;
private var fading : boolean = false;

function OnTriggerEnter (other : Collider) {	
	if( fading ) return;
	
	//Check if what collided was the player
	if( other.gameObject.CompareTag( "Player" ) && stageName ) {
		hudAttributes.Complete( stageName );
	}
}
