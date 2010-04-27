static var faceID : int = 0;
static var animated : boolean = false;

var rotate : GameObject;
var speed : float = 0.8;

function Start() {
	if( !rotate )
		rotate = GameObject.Find("menu");
	if( !rotate )
		print( "can't rotate" );
}

function FixedUpdate () {
	var input : int = Input.GetAxis("Proceed");
	if( !animated && rotate ) {
		if( input > 0 )
			rotateMenu( true );
		else if( input < 0 )
			rotateMenu( false );
	}
}

function rotateMenu( forward : boolean ) {
	// Prevent rotation if on a certain face.
	if( faceID >= 3 )
		return;
	else if( !forward && faceID <= 0 )
		return;

	// Figure out the target angle
	var target : float;
	if( forward )
		target = rotate.transform.eulerAngles.y + 90;
	else
		target = rotate.transform.eulerAngles.y - 90;
	animated = true;
	
	// Rotate the cube
	var angle : float = 0;
	var diff : float;
	while( angle < 90 ) {
		yield;
		diff = Time.deltaTime * 90 / speed;
		angle += diff;
		if( angle > 90 )
			rotate.transform.eulerAngles.y = target;
		else if( forward )
			rotate.transform.Rotate(0, diff, 0);
		else
			rotate.transform.Rotate(0, diff * -1, 0);
	}
	if( forward ) faceID += 1;
	else  faceID -= 1;
	animated = false;
}