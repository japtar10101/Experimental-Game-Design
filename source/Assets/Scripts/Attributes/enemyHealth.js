var hitSound : AudioClip;
var anim : Animation;
var deathSound : AudioClip;
var deathAnim : String;
var hitAnim : String;
var health : int = 1;

// Flag checking if you're dying
private var dying : boolean = false;
// Script
private var spawn : spawnBulletsV2;
private var collide : Collider;

function Start() {
	spawn = GetComponent( spawnBulletsV2 );
	collide = GetComponent( Collider );
	if( !anim ) anim = animation;
	if( !anim ) {
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
	if( dying ) return;	
	else decreaseHealth(other.gameObject);
}

function decreaseHealth( collided : GameObject ) {
	//verify what we're colliding with is a sword
	if( collided.CompareTag( "Sword" ) && collided.renderer.enabled ) {
		health -= 1;
		if( health <= 0 ) {
			anim.CrossFade( deathAnim );
			audio.PlayOneShot(deathSound);
			if( spawn ) {
				spawn.startFire = false;
			}
			collide.isTrigger = false;
			dying = true;
		} else {
			anim.Blend( hitAnim );
			audio.PlayOneShot(hitSound);
		}
	}
}

@script RequireComponent(Collision)
