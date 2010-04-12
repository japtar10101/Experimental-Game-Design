var cleanupStage : GameObject;
var revealStage : Renderer[];

function OnTriggerEnter (other : Collider) {	
	//Check if what collided was the player
	if( other.gameObject.CompareTag( "Player" ) ) {
		if( cleanupStage ) {
			Destroy( cleanupStage );
		}
		for( reveal in revealStage ) {
			reveal.enabled = true;
		}
	}
}