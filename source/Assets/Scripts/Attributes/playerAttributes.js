/*
This script defines the attributes of the player, such
as her health and shield.
*/

var hitSound : AudioClip;

var charVar :  GameObject;

// Health-related stuff
var maxHealth = 25;
var health = 25;

// Shield-related stuff
var maxShield = 25;
private var shieldDuration = 25;
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
	var isDestructable = collided.CompareTag("Destructable");
	if( isDestructable || collided.CompareTag("Dodge") ) {
		var decrement = -10;
		var hitPower = collided.GetComponent(hitAttributes);
		if( hitPower ) {
			decrement = hitPower.power;
		}
		if( updateHealth( decrement ) ) {
			Destroy(gameObject);
			Destroy(charVar);
			Application.Quit();
		}
		if( isDestructable ) {
			Destroy(collided);
		}
	}
}
