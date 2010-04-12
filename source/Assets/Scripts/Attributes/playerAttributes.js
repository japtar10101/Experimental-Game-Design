/*
This script defines the attributes of the player, such
as her health and shield.
*/

var hitSound : AudioClip;

var charVar :  GameObject;

// Health-related stuff
var maxHealth = 100;
var health = 100;

// Shield-related stuff
var maxShield = 100;
private var shieldDuration = 100;
private var shieldOn = false;

//Health stuff

function updateHealth( changeHealth ) {
	health += changeHealth;
	
	audio.PlayOneShot(hitSound);

	if( health > maxShield ) {
		health = maxShield;
	}
	return isDead();
}

function isDead() {
	return health <= 0;
}

function isShieldOn() {
	if( shieldDuration <= 0 ) {
		shieldOn = false;
	}
	return shieldOn;
}

function Start() {
	health = maxHealth;
	shieldDuration = maxShield;
	
	
}

function OnTriggerEnter (other : Collider) {
	//check to make sure an enemy is colliding
	var collided = other.gameObject;
	if( collided.CompareTag("Destructable") && collided.renderer.enabled) {
		if(updateHealth(-10)) {
			Destroy(gameObject);
			Destroy(charVar);
			Application.Quit();
		}
		Destroy(collided);
	}
	if( collided.CompareTag("Dodge")) {
		if(updateHealth(-5)) {
			Destroy(gameObject);
			Destroy(charVar);
			Application.Quit();
		}
	}
}
