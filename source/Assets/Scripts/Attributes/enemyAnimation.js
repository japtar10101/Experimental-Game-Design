var loop : boolean = true;
var followPlayer : boolean = false;
var dir : Vector3[];
var speed : float[];
var length : float[];

private var playerOffset : Vector3 = Vector3.zero;
private var onFire : spawnBullets;
private var index : int;
private var displace : float;
private var mag : Vector3;

function Start() {
	// Check if everything is correct
	onFire = GetComponent( spawnBullets );
	if( !onFire || !transform ) {
		Destroy( this );
		return;
	} else if( dir.length == 0 || speed.length == 0  || length.length == 0 ) {
		Destroy( this );
		return;
	} else if( dir.length != speed.length || speed.length != length.length ) {
		Destroy( this );
		return;
	}
	
	// Setup variables
	for( vector in dir ) {
		vector.Normalize();
	}
	index = 0;
	displace = 0;
	mag = dir[0] * speed[0];
}

function Update () {
	if( index < 0 ) {
		onFire.startFire = false;
		return;
	} else if( onFire.startFire ) {
		if( playerOffset == Vector3.zero )
			playerOffset = transform.position - Camera.main.transform.position;
		animate();
	}
}

function animate() {
	var moveVector = mag * Time.deltaTime;
	
	// Increment distance
	displace += moveVector.magnitude;
	
	// move the character
	if( followPlayer ) {
		playerOffset += moveVector;
		transform.position = Camera.main.transform.position + playerOffset;
	} else {
		transform.position += moveVector;
	}
	
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
	mag = dir[index] * speed[index];
	
	// reset displacement
	displace = 0;
}