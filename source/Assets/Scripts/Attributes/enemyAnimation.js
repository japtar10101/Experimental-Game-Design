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
	if( dir.Length <= 0 || !onFire || !pos ) {
		Destroy( this );
	} else if( dir.Length != speed.Length || speed.Length != length.Length ) {
		Destroy( this );
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
	if( onFire.startFire ) {
		animate();
		print( "playing" );
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
		index = 0;
	}
	
	// Calculate the magnitude
	mag = dir[index] * speed[index];
	
	// reset displacement
	displace = 0;
}