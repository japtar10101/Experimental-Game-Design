var hitSound : AudioClip;
var deathSound : AudioClip;
var health : int = 1;

function OnTriggerEnter (other : Collider) {
	// First, verify what we're colliding with is a sword
	var collided = other.gameObject;
	if( collided.CompareTag( "Sword" ) && collided.renderer.enabled ) {
		health -= 1;		
		if( health <= 0 ) {
			audio.PlayOneShot(deathSound);
			Destroy( gameObject );
		} else {
			audio.PlayOneShot(hitSound);
		}
	}
}

/*
function OnTriggerExit (other : Collider) {
	// First, verify what we're colliding with is a sword
	var collided = other.gameObject;
	if( collided.CompareTag( "Sword" ) && collided.renderer.enabled ) {
		audio.PlayOneShot(deathSound);
		Destroy( gameObject );
	}
}
*/
@script RequireComponent(Collision)
