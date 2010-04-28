static var maxHealth : int;
static var maxShield : int;

// These values are all fraction values from 0 to 1
var xOffset : float = 0.05;
var yOffset : float = 0.75;
var screenProportion : float = 0.2;

// Textures
var background : Texture;
var healthBar : Texture;
var dangerBar : Texture;
var shieldBar : Texture;
var faceDefault : Texture;
var faceAttack : Texture;
var faceDanger : Texture;
var faceHit : Texture;

// positions
var healthOffsetX : int = 205;
var healthOffsetY : int = 90;
var shieldOffsetX : int = 205;
var shieldOffsetY : int = 174;
var faceOffsetX : int = 38;
var faceOffsetY : int = 35;
var scoreOffsetX : int = 205;
var scoreOffsetY : int = 200;
var scoreWidth : int = 205;
var scoreHeight : int = 50;

var comboOffsetX : int = 500;
var comboOffsetY : int = 200;
var comboWidth : int = 205;
var comboHeight : int = 50;

// animation times
var timeHit : float = 0.5;
var timeAttack : float = 0.5;
var danger : int = 8;

//TODO: add a variable to track face conditions
static var faceID : int;

//TODO: make rects to store these variables.  Ugh.
//private var bkgRect : Rect;
// Coordinates
private var bkgWidth : int;
private var bkgHeight : int;
private var healthFullWidth : int;
private var healthWidth : int;
private var healthHeight : int;
private var shieldFullWidth : int;
private var shieldWidth : int;
private var shieldHeight : int;
private var faceWidth : int;
private var faceHeight : int;
private var x : int;
private var y : int;
//private var prev : TextAnchor;

function Start() {
	//prev = GUI.skin.label.alignment = TextAnchor.MiddleLeft;
	
	// Find the proportion to resize all textures to
	var hudHeight : float = Screen.height * screenProportion;
	var proportion : float = hudHeight / background.height;
	
	// set the variables
	bkgWidth = background.width * proportion;
	bkgHeight = background.height * proportion;
	healthWidth = healthBar.width * proportion;
	healthHeight = healthBar.height * proportion;
	shieldWidth = shieldBar.width * proportion;
	shieldHeight = shieldBar.height * proportion;
	faceWidth = faceDefault.width * proportion;
	faceHeight = faceDefault.height * proportion;
	scoreWidth = scoreWidth * proportion;
	scoreHeight = scoreHeight * proportion;
	comboWidth = comboWidth * proportion;
	comboHeight = comboHeight * proportion;
	healthOffsetX *= proportion;
	healthOffsetY *= proportion;
	shieldOffsetX *= proportion;
	shieldOffsetY *= proportion;
	faceOffsetX *= proportion;
	faceOffsetY *= proportion;
	scoreOffsetX *= proportion;
	scoreOffsetY *= proportion;
	comboOffsetX *= proportion;
	comboOffsetY *= proportion;
	
	// shift the coordinates by the offsets
	x = xOffset * Screen.width;
	y = yOffset * Screen.height;
	healthOffsetX += x;
	healthOffsetY += y;
	shieldOffsetX += x;
	shieldOffsetY += y;
	faceOffsetX += x;
	faceOffsetY += y;
	scoreOffsetX += x;
	scoreOffsetY += y;
	comboOffsetX += x;
	comboOffsetY += y;
	
	// Store the full width of each texture
	healthFullWidth = healthWidth;
	shieldFullWidth = shieldWidth;
}

function OnGUI() {
	GUI.depth = 1;
	GUI.DrawTexture( new Rect(x, y, bkgWidth, bkgHeight ),
		background );
	drawHealth();
	drawShield();
	drawFace();
	drawScore();
	drawIncrementer();
}

function drawHealth() {
	// Decide on which texture to draw
	var draw : Texture;
	if( playerAttributes.health <= danger )
		draw = dangerBar;
	else
		draw = healthBar;
	
	// Calculate the texture width
	var health : float = playerAttributes.health;
	health /= maxHealth;
	healthWidth = health * healthFullWidth;
	
	// draw the bar
	GUI.DrawTexture( new Rect(healthOffsetX, healthOffsetY,
		healthWidth, healthHeight ), draw );
}

function drawShield() {
	// Calculate the texture width
	var shield : float = playerAttributes.shieldDuration;
	shield /= maxShield;
	shieldWidth = shield * shieldFullWidth;
	
	GUI.DrawTexture( new Rect(shieldOffsetX, shieldOffsetY,
		shieldWidth, shieldHeight ), shieldBar );
}

function drawFace() {
	// Decide on which texture to draw
	var draw : Texture;
	if( playerAttributes.health <= danger )
		draw = faceDanger;
	else
		draw = faceDefault;
	GUI.DrawTexture( new Rect(faceOffsetX, faceOffsetY,
		faceWidth, faceHeight ),  draw );
}

function drawScore() {
	GUI.Box( new Rect(scoreOffsetX, scoreOffsetY,
		scoreWidth, scoreHeight ),  playerAttributes.score.ToString() );
}

function drawIncrementer() {
	if(swingControls.incrementer > 0) {
		GUI.Box( new Rect(comboOffsetX, comboOffsetY,
			comboWidth, comboHeight ),  swingControls.incrementer.ToString() );
	}
}
