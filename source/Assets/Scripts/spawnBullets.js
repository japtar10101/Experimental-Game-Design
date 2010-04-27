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
// The delay between bullets when fired in automatic
var autoDelay : float = 0.1;
//TODO: add an animation parameter

//testing moving bullets
private var bulletClone;
//testing rigid body
private var rigidClone;
// Number of bullets cloned
private var fireBullet = true;

function Start() {
	if(!transform || !bullet){
		print("was destroyed");
		Destroy(this);
		return;
	}
}

function Update () {
	if( startFire && fireBullet && bullet ) {
		GenerateBullet();
	}
}

function GenerateBullet() {
	// Wait the user specified delay
	fireBullet = false;
	// TODO: add the animation
	
	// Clone several times
	var autoClone = numShots;
	var homeAt;
	while( autoClone > 0 ) {
		// Clone the bullet
		bulletClone = Instantiate( bullet, transform.position, transform.rotation );
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
