var loop : boolean = true;
var anim : Animation;
var timerAnimation : String = "bombTimer";
var dir : Vector3[];
var speed : float[];
var length : float[];

private var playerOffset : Vector3 = Vector3.zero;
private var index : int;
private var displace : float;
private var mag : Vector3;
private var trans : Transform;

function Start() {
	// Check if everything is correct
	if( !anim )
		anim = animation;
	trans = transform;
	if( !anim || !trans ) {
		print( "destroyed animation" );
		Destroy( this );
		return;
	} else if( dir.length != speed.length || speed.length != length.length ) {
		print( "destroyed animation" );
		Destroy( this );
		return;
	} else if( dir.length != speed.length || speed.length != length.length ) {
		print( "destroyed animation" );
		Destroy( this );
		return;
	}
	
	// Setup variables
	for( vector in dir ) {
		vector.Normalize();
	}
	index = 0;
	displace = 0;
	if( dir.length == 0 )
		mag = Vector3.zero;
	else
		mag = dir[0] * speed[0];
}

function Update () {
	if( index >= 0 && anim.IsPlaying( timerAnimation ) ) {
		if( playerOffset == Vector3.zero )
			playerOffset = trans.position - globalAttributes.playerPos.transform.position;
		animate();
	}
}

function animate() {
	// move the character
	var moveVector = mag * Time.deltaTime;
	playerOffset += moveVector;
	trans.position = globalAttributes.playerPos.transform.position + playerOffset;
	
	// Increment distance
	displace += moveVector.magnitude;
	
	// Check if we want to move right into the next animation
	if( displace >= length[index] ) {
		next();
	}
}

function next() {
	// First, increment index
	index += 1;
	if( index >= dir.Length ) {
		if( loop ) {
			index = 0;
		} else {
			index = -1;
		}
	}
	
	// Calculate the magnitude
	if( dir.length == 0 )
		mag = Vector3.zero;
	else
		mag = dir[0] * speed[0];
	
	// reset displacement
	displace = 0;
}