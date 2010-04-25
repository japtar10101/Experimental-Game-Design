var timerAnimation : String = "bombTimer";
var deathAnimation : String = "bombDeath";
var explodeAnimation : String = "bombExplode";
var deathSound : AudioClip;
var rocket : GameObject;
var initForce : float = 1000;
var rotations : Vector3[] = [
	Vector3( 0, 0, 0 ),
	Vector3( 90, 0, 0 ),
	Vector3( 180, 0, 0 ),
	Vector3( 270, 0, 0 ),
	Vector3( 0, 90, 0 ),
	Vector3( 0, 270, 0 )
];

//testing moving bullets
private var rocketClone;
//testing rigid body
private var rigidClone;
private var timerStart = false;
private var dying = false;

function Start() {
	if( !animation || !rocket ) {
		Destroy( this );
		return;
	}
}

function Update () {
	// If the animation started playing, flag the animation as started
	if( animation.IsPlaying( timerAnimation ) )
		timerStart = true;
	
	// If the death Animation is playing, reset timer
	else if( animation.IsPlaying( deathAnimation ) )
		timerStart = false;
	
	// If neither animation are running,
	// AND it's not playing death, play the explode animation
	else if( timerStart )
		explode();
}

function explode() {
	if( !dying ) {
		dying = true;
		animation.CrossFade( explodeAnimation );
		audio.PlayOneShot( deathSound );
		
		// Create a rocket for each rotations
		for( rot in rotations ) {
			// Clone the bullet
			rocketClone = Instantiate( rocket, transform.position, transform.rotation );
			rocketClone.transform.Rotate( rot );
			rocketClone.renderer.enabled = true;
			
			// Add a constant force to it
			rigidClone = rocketClone.GetComponent( Rigidbody );
			rigidClone.AddRelativeForce( Vector3.forward * initForce * -1 );
		}
	} else if( !animation.IsPlaying( explodeAnimation ) ) {
		Destroy( gameObject );
	}
}