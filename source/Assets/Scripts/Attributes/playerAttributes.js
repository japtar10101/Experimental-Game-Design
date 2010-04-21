/*
This script defines the attributes of the player, such
as her health and shield.
*/

// The character
var charVar : GameObject;
// Sound stuff
var hitSound : AudioClip;
// add health re-fill tune.
var healthSound : AudioClip;
// add deflect tune.
var deflectSound : AudioClip;
// shield generate tune.
var shieldSound : AudioClip;
var hitAnim : String;
var healAnim : String;
var shieldAnim : String;

// Health-related stuff
var maxHealth : int = 22;
static var health : int;

// Shield-related stuff
var shieldRenderer : Renderer;
var maxShield : int = 10;
static var shieldDuration : float;
var shieldDecrementSpeed : float = 6;
var shieldIncrementSpeed : float = 10;
private var shieldOn = false;
private var anim : Animation;
private var noShield : float = 0;
static var score : int;

function Start() {
	health = maxHealth;
	shieldDuration = maxShield;
	score = 0;
	if( charVar ) {
		anim = charVar.GetComponent( Animation );
	} else {
		anim = animation;
	}
}

function Update() {
	var bool = updateShield( Input.GetAxis ("Shield") != 0 );
	if( shieldRenderer ) {
		if( !shieldRenderer.enabled && bool ) {
			audio.PlayOneShot(shieldSound);
		}
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

//Health stuff
function updateHealth( changeHealth ) {
	if( changeHealth == 0 ) {
		anim.PlayQueued( shieldAnim );
		audio.PlayOneShot(deflectSound);
	} else {
		health += changeHealth;
		if( changeHealth > 0 ) {
			anim.PlayQueued( healAnim );
			audio.PlayOneShot(healthSound);
		} else {
			anim.PlayQueued( hitAnim );
			audio.PlayOneShot(hitSound);
		}
	}

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
		shieldDuration += shieldIncrementSpeed * Time.deltaTime;
		if( shieldDuration > maxShield ) {
			shieldDuration = maxShield;
		}
	}
	return isShieldOn();
}

function isShieldOn() {
	if( shieldDuration <= 0 ) {
		shieldOn = false;
	}
	return shieldOn;
}
