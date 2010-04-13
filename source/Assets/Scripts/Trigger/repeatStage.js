var repeatStage : Transform;

private var moveSelf : Transform;
private var moveDir : Vector3;

function Start() {
	// Make sure the object is set
	if( !repeatStage ) {
		Destroy( this );
		return;
	}
	
	// Get the transformation of this object
	moveSelf = GetComponent( Transform );
	var moveBy = moveSelf.localPosition.z;
	moveDir = new Vector3( 0, 0, moveBy );
}

function OnTriggerEnter (other : Collider) {
	//Check if what collided was the player
	if( other.gameObject.CompareTag( "Player" ) ) {
		moveSelf.Translate( moveDir, Space.World );
		repeatStage.Translate( moveDir, Space.World );
	}
}