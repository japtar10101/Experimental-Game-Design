var hitSound : AudioClip;
var deathSound : AudioClip;
var deathAnim : String;
var hitAnim : String;
var health : int = 1;

// Flag checking if you're dying
private var dying = false;
// Animation
private var anim : Animation;
// Script
private var spawn : spawnBullets;
private var collide : Collider;

function Start() {
	anim = GetComponent( Animation );
	spawn = GetComponent( spawnBullets );
	collide = GetComponent( Collider );
	if( !anim || !spawn ) {
		print( "destroyed" );
		Destroy( this );
		return;
	}
	dying = false;
}

function Update () {
	if( dying && !anim.IsPlaying( deathAnim ) ) {
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
			anim.Stop();
			anim.Play( deathAnim );
			audio.PlayOneShot(deathSound);
			spawn.startFire = false;
			collide.isTrigger = false;
			dying = true;
		} else {
			anim.Stop();
			anim.Play( hitAnim );
			audio.PlayOneShot(hitSound);
		}
	}
}

@script RequireComponent(Collision)
