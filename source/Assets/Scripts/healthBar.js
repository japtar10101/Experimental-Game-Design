static var playerDead;
var playerObject : GameObject;
var font : Font;
var healthWidth : int = 240;
var shieldWidth : int = 120;
var danger : int = 5;
var deathSound :  AudioClip;
var healthBar : Texture;
var dangerBar : Texture;
var shieldBar : Texture;
var bkgBar : Texture;

private var maxHealth : int;
private var maxShield : int;

function Start() {
	guiText.font = font;
	playerDead = false;
	var script = playerObject.GetComponent(playerAttributes);
	if(!script) {
		guiText.text = "script deleted";
		Destroy(this);
		return;
	}
	maxHealth = script.maxHealth;
	maxShield = script.maxShield;
}

function OnGUI() {
	HealthBox();
	ShieldBox();
	guiText.text = "It's working!";
}

function Update () {
	if(!playerDead) {
		if(playerAttributes.health<=0) {
			guiText.text = "DEAD";
			audio.PlayOneShot(deathSound);
			playerDead = true;
		}
	}
}

function HealthBox() {
	// Render the background
	GUI.Box( Rect( 30, 680, healthWidth , 30), bkgBar);
	
	// Render the health box
	var healthTexture;
	var guiWidth = healthWidth *
		( playerAttributes.health / maxHealth );
	if( playerAttributes.health <= danger )
		healthTexture = dangerBar;
	else
		healthTexture = healthBar;
	GUI.Box( Rect( 30, 680, guiWidth , 30), healthTexture);
}

function ShieldBox() {
	// Render the background
	GUI.Box( Rect( 30, 720, shieldWidth , 30), bkgBar);
	
	var guiWidth = shieldWidth *
		( playerAttributes.shieldDuration / maxShield );
	GUI.Box( Rect( 30, 720, guiWidth, 30 ), shieldBar);
}
