var speed = 16;
var moveTowards : Transform[];

private var moveDir : Vector3 = Vector3.zero;
private var index = 0;
private var nextIndex = 0;

function Start() {
	setDirection(0);
}

function Update () {
	transform.Translate( moveDir * Time.deltaTime );
}

function FixedUpdate() {
	if( nextIndex >= moveTowards.length ) {
		return;
	}
	else if( !moveTowards[index] ) {
		setDirection( index + 1 );
	}
	else if( transform.transform.position.z > moveTowards[index].position.z ) {
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
	moveDir = moveTowards[index].position - transform.transform.position;
	moveDir.Normalize();
	moveDir *= speed;
}
