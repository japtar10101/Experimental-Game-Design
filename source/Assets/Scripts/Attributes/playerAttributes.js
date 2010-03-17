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

//Health stuff
//private var healthBar = GUI.Label(Rect(10,10,100,20),"Please work!");

function updateHealth( changeHealth ) {
	health += changeHealth;
	//GUI.Label(Rect(10,10,100,20), "Hit!");
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
	//GUI.Label(Rect(10, 10, 100, 20), "Not Hit");
	//OnGui();
}

function OnGui() {
	GUI.Label(Rect(0,0,100,20), "health");
}

function OnTriggerEnter (other : Collider) {
	//check to make sure an enemy is colliding
	var collided = other.gameObject;
	if( collided.CompareTag("Destructable") && 
collided.renderer.enabled) {
		if(updateHealth(-40)) {
			Destroy(gameObject);
			Application.Quit();
		}
		Destroy(collided);
	}
}
