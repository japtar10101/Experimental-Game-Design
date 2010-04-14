/*
This script defines the attributes of the player, such
as her health and shield.
*/

// Sound stuff
var hitSound : AudioClip;
//TODO: add health re-fill tune.
//var healthSound : AudioClip;
//TODO: add deflect tune.
//var deflectSound : AudioClip;
var charVar :  GameObject;

// Health-related stuff
var maxHealth : int = 25;
var health : int = 25;

// Shield-related stuff
var shieldRenderer : Renderer;
var maxShield : int = 25;
var shieldDuration : float = 25;
var shieldDecrementSpeed : float = 3;
var shieldIncrementSpeed : float = 1;
private var shieldOn = false;

//Health stuff
function updateHealth( changeHealth ) {
	health += changeHealth;
	
	audio.PlayOneShot(hitSound);

	if( health > maxHealth ) {
		health = maxHealth;
	}
	return isDead();
}

function isDead() {
	return health <= 0;
}

//Shield stuff
function updateShield( on ) {
	// Set the shield variables
	shieldOn = on;
	if( on ) {
		// If on, decrement the duration
		shieldDuration -= shieldDecrementSpeed * Time.deltaTime;
		if( shieldDuration < 0 ) {
			shieldDuration = 0;
		}
	} else {
		// If off, increment the duration
		shieldDuration += shieldDecrementSpeed * Time.deltaTime;
		if( shieldDuration > maxShield ) {
			shieldDuration = maxShield;
		}
	}
	print( shieldDuration );
	return isShieldOn();
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

function Update() {
	var bool = updateShield( Input.GetAxis ("Shield") > 0 );
	if( shieldRenderer ) {
		shieldRenderer.enabled = bool;
	}
}

function OnTriggerEnter (other : Collider) {
	//check to make sure an enemy is colliding
	var collided = other.gameObject;
	var isDestructable = collided.CompareTag("Destructable");
	var isHealth = collided.CompareTag("Health");
	var shielded = isShieldOn();
	if( isDestructable || collided.CompareTag("Dodge") || isHealth ) {
	
		// Figure out how much health we want to increment/decrement
		var decrement;
		if( isDestructable && shielded ) {
			// Shield on, do nothing
			decrement = 0;
		} else {
			// health refill, barriers, or no shield, affect the player
			var hitPower = collided.GetComponent(hitAttributes);
			if( hitPower ) {
				decrement = hitPower.power;
			} else {
				decrement = -10;
			}
		}
		
		// Update helth
		if( updateHealth( decrement ) ) {
			// Player died
			Destroy(gameObject);
			Destroy(charVar);
			Application.Quit();
		}
		
		// Destroy the destructable
		if( isDestructable || isHealth ) {
			Destroy(collided);
		}
	}
}
