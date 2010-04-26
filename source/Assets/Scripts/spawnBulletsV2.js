/*
Setting this variable to the following values
makes GameObject "bullet" equal to...
0 = Bullet (for Agents)
1 = Rockets (for Bibles)
2 = Rockets (for Bombs)
*/
var bulletID : int = 0;

// Is this script enabled?
var startFire : boolean = true;
//variable for bullet speed
var bulletSpeed : float = 1400;
//shoot time
var shootDelay : float = 1;
//number of shoots (like an automatic)
var numShots : int = 1;
// sound
var gunSound : AudioClip;
//add an animation parameter
var anim : Animation;
// Make true if it's the bible
var appendReverseAnimation : boolean = false;

//testing moving bullets
private var bulletClone : GameObject;
//testing rigid body
private var rigidClone : Rigidbody;
// Number of bullets cloned
private var fireBullet : boolean = true;
//Bullet game object
private var bullet : GameObject;

function Start() {
	switch(bulletID) {
		case 1:
			bullet = projectileAttributes.rocket1;
			break;
		case 2:
			bullet = projectileAttributes.rocket2;
			break;
		default:
			bullet = projectileAttributes.bullet;
	}
	if(!transform || !bullet){
		print( "destroyed" );
		if( !bullet ) print( "bullet is null" );
		else print( "transform is null" );
		Destroy(this);
		return;
	}
}

function Update () {
	if( startFire && fireBullet )
		StartCoroutine("GenerateBullet");
}

function GenerateBullet() {
	// Wait the user specified delay
	fireBullet = false;
	
	// play an animation
	if( appendReverseAnimation ) {
		print( "Playing animation" );
		anim.Play( anim.clip.name );
		
		// Wait for the animation to have finished
		yield WaitForSeconds ( anim.clip.length );
		anim.Stop( anim.clip.name );
	}
	
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
		
		// Play the necessary media for gunshot
		audio.PlayOneShot(gunSound);
		if( appendReverseAnimation ) {
			print( "Rewinding animation" );
			anim.Rewind( anim.clip.name );
		} else
			anim.Play( anim.clip.name );
		
		// Wait for the animation to have finished
		yield WaitForSeconds ( anim.clip.length );
		anim.Stop( anim.clip.name );
	}
	
	// Revert the conditions
	yield WaitForSeconds( shootDelay );
	fireBullet = true;
}
