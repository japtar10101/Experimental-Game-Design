var loop : boolean = true;
var dir : Vector3[];
var speed : float[];
var length : float[];

private var onFire : spawnBullets;
private var pos : Transform;
private var index : int;
private var displace : float;
private var mag : Vector3;

function Start() {
	// Check if everything is correct
	onFire = GetComponent( spawnBullets );
	pos = GetComponent( Transform );
	if( !onFire || !pos ) {
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
		return;
	} else if( onFire.startFire ) {
		animate();
	}
}

function animate() {
	// move the character
	var moveVector = mag * Time.deltaTime;
	pos.position += moveVector;
	
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
	mag = dir[index] * speed[index];
	
	// reset displacement
	displace = 0;
}