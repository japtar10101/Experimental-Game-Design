var speed : float= 16;
var maxSpeed : float = 24;
var minSpeed : float = 10;
var changeSpeed : float = 10;
var moveTowards : Transform[];

private var moveDir : Vector3 = Vector3.zero;
private var index = 0;
private var nextIndex = 0;
private var currentSpeed : float;

function Start() {
	currentSpeed = speed;
	setDirection(0);
}

function Update () {
	transform.Translate( moveDir * Time.deltaTime * currentSpeed );
}

function FixedUpdate() {
	// Change speed
	setSpeed( Input.GetAxis ("Speed") );
	
	// Change direction
	if( nextIndex >= moveTowards.length )
		return;
	else if( !moveTowards[index] )
		setDirection( index + 1 );
	else if( transform.transform.position.z > moveTowards[index].position.z )
		setDirection( index + 1 );
}

function setSpeed( speedInput ) {
	// Find the target speed first
	var targetSpeed;
	if( speedInput == 0 ) {
		targetSpeed = speed;
	} else if( speedInput > 0 ) {
		targetSpeed = maxSpeed;
	} else {
		targetSpeed = minSpeed;
	}
	
	//TODO: "home" to this speed
	if( Mathf.Approximately( targetSpeed, currentSpeed ) )
		currentSpeed = targetSpeed;
	else if( targetSpeed > currentSpeed )
		currentSpeed += Time.deltaTime * changeSpeed;
	else
		currentSpeed -= Time.deltaTime * changeSpeed;
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
}
