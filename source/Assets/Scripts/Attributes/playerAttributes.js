/*
This script defines the attributes of the player, such
as her health and shield.
*/

// Health-related stuff
var maxHealth = 100;
private var health = 100;

// Shield-related stuff
var maxShield = 100;
private var shieldDuration = 100;
private var shieldOn = false;

function updateHealth( changeHealth ) {
	health += changeHealth;
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
