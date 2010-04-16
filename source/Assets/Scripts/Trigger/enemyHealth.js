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
// Hit box
private var collide : Collider;

function Start() {
	dying = false;
	anim = GetComponent( Animation );
	spawn = GetComponent( spawnBullets );
	collide = GetComponent( Collider );
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
			audio.PlayOneShot(deathSound);
			anim.Play( deathAnim );
			spawn.startFire = false;
			dying = true;
			collide.isTrigger = false;
		} else {
			anim.Play( hitAnim );
			audio.PlayOneShot(hitSound);
		}
	}
}

@script RequireComponent(Collision)
