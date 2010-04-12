var speed = 16;
var moveTowards : Transform[];

private var moveDir : Vector3 = Vector3.zero;
private var moveObject : Transform;
private var index = 0;
private var nextIndex = 0;

function Start() {
	moveObject = GetComponent( Transform );
	setDirection(0);
}

function Update () {
	moveObject.Translate( moveDir * Time.deltaTime );
}

function FixedUpdate() {
	if( nextIndex >= moveTowards.length ) {
		return;
	}
	else if( !moveTowards[index] ) {
		setDirection( index + 1 );
	}
	else if( moveObject.transform.position.z > moveTowards[index].position.z ) {
		setDirection( index + 1 );
	}
}

function setDirection( nextIndex ) {
	// If index is beyond length, set this object to simply move forward
	if( nextIndex >= moveTowards.length ) {
		moveDir = Vector3.forward * speed;
		return;
	} else {
		index = nextIndex;
	}
	
	// Otherwise, find the next point to fly to
	moveDir = moveTowards[index].position - moveObject.transform.position;
	moveDir.Normalize();
	moveDir *= speed;
}
