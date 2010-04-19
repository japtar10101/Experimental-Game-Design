var hitSound : AudioClip;
var deathSound : AudioClip;
var deathAnim : String;
var hitAnim : String;
var health : int = 1;

// Flag checking if you're dying
private var dying = false;
// Script
private var spawn : spawnBullets;
private var collide : Collider;

function Start() {
	spawn = GetComponent( spawnBullets );
	collide = GetComponent( Collider );
	if( !animation ) {
		print( "destroyed" );
		Destroy( this );
		return;
	}
	dying = false;
}

function Update () {
	if( dying && !animation.IsPlaying( deathAnim ) ) {
		Destroy( gameObject );
	}
}

function OnTriggerEnter (other : Collider) {
	// ignore triggering on death
	if( dying ) {
		return;
	}
	
	// First, verify what we're colliding with is a sword
	var collided = other.gameObject;
	if( collided.CompareTag( "Sword" ) && collided.renderer.enabled ) {
		health -= 1;
		if( health <= 0 ) {
			animation.CrossFade( deathAnim );
			audio.PlayOneShot(deathSound);
			if( spawn ) {
				spawn.startFire = false;
			}
			collide.isTrigger = false;
			dying = true;
		} else {
			animation.Blend( hitAnim );
			audio.PlayOneShot(hitSound);
		}
	}
}

@script RequireComponent(Collision)
