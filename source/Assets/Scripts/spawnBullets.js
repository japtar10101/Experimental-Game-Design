// Is this script enabled?
var startFire : boolean = true;
//Bullet game object
var bullet : GameObject;
//variable for bullet speed
var bulletSpeed : float = 1400;
//shoot time
var shootDelay : float = 1;
//number of shoots (like an automatic)
var numShots : int = 1;
// sound
var gunSound : AudioClip;
//TODO: add an animation parameter

//testing moving bullets
private var bulletClone;
//testing rigid body
private var rigidClone;
//this object's position
private var thisPos : Transform;
// Number of bullets cloned
private var fireBullet = true;
// The delay between bullets when fired in automatic
private var autoDelay : float = 0.1;

function Start() {
	thisPos = GetComponent(Transform);
	if(!thisPos || !bullet){
		Destroy(this);
	}
}

function Update () {
	if( startFire && fireBullet ) {
		GenerateBullet();
	}
}

function GenerateBullet() {
	// Wait the user specified delay
	fireBullet = false;
	// TODO: add the animation
	
	// Clone several times
	var autoClone = numShots;
	while( autoClone > 0 ) {
		// Clone the bullet
		bulletClone = Instantiate( bullet, thisPos.position, thisPos.rotation );
		bulletClone.transform.Rotate( Vector3( 180, 0, 0 ) );
		bulletClone.renderer.enabled = true;
		
		// Add a constant force to it
		rigidClone = bulletClone.GetComponent( Rigidbody );
		rigidClone.AddRelativeForce( Vector3.forward * bulletSpeed * -1 );
		
		// decrement the number of clones
		autoClone -= 1;
		audio.PlayOneShot(gunSound);
		yield WaitForSeconds( autoDelay );
	}
	
	// Revert the conditions
	yield WaitForSeconds( shootDelay );
	fireBullet = true;
}
