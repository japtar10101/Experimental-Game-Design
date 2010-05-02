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
var faceDraw : Texture;
static var statFaceDefault : Texture;
static var statFaceHit : Texture;
static var facetimer : float = -1;
static var hitFaceLength : float = 1;
static var attackFaceLength : float = 1;

// animation times
var timeHit : float = 0.5;
var timeAttack : float = 0.5;
var danger : int = 8;

// face conditions
static var faceID : int;

//TODO: make rects to store these variables.  Ugh.
//private var bkgRect : Rect;
// Coordinates
private var healthFullWidth : int;
private var shieldFullWidth : int;
private var x : int;
private var y : int;

//Rects for each HUD member
private var backgroundRect : Rect;
var healthRect : Rect;
var shieldRect : Rect;
var faceRect : Rect;

static function hitFace() {
	facetimer = hitFaceLength;
	faceID = 1;
}

static function attackFace() {
	facetimer = attackFaceLength;
	faceID = 2;
}

function Start() {
	faceID = 0;
	facetimer = -1;
	
	// Find the proportion to resize all textures to
	var hudHeight : float = Screen.height * screenProportion;
	var proportion : float = hudHeight / background.height;
	
	// set the variables
	backgroundRect.width = background.width * proportion;
	backgroundRect.height = background.height * proportion;
	healthRect.width = healthBar.width * proportion;
	healthRect.height = healthBar.height * proportion;
	shieldRect.width = shieldBar.width * proportion;
	shieldRect.height = shieldBar.height * proportion;
	faceRect.width= faceDefault.width * proportion;
	faceRect.height = faceDefault.height * proportion;
	healthRect.x *= proportion;
	healthRect.y *= proportion;
	shieldRect.x *= proportion;
	shieldRect.y *= proportion;
	faceRect.x *= proportion;
	faceRect.y *= proportion;
	
	// shift the coordinates by the offsets
	x = xOffset * Screen.width;
	y = yOffset * Screen.height;
	backgroundRect.x = x;
	backgroundRect.y = y;
	healthRect.x += x;
	healthRect.y += y;
	shieldRect.x += x;
	shieldRect.y += y;
	faceRect.x += x;
	faceRect.y += y;
	
	// Store the full width of each texture
	healthFullWidth = healthRect.width;
	shieldFullWidth = shieldRect.width;
	statFaceDefault = faceDefault;
	statFaceHit = faceHit;
	statFaceDraw = faceDraw;
}

function OnGUI() {
	GUI.depth = 1;
	GUI.DrawTexture( backgroundRect, background);
	drawHealth();
	drawShield();
	drawFace();
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
	healthRect.width = health * healthFullWidth;
	
	// draw the bar
	GUI.DrawTexture( healthRect, draw );
}

function drawShield() {
	// Calculate the texture width
	var shield : float = playerAttributes.shieldDuration;
	shield /= maxShield;
	shieldRect.width = shield * shieldFullWidth;
	
	GUI.DrawTexture( shieldRect, shieldBar );
}

function drawFace() {
	if( facetimer > 0 ) {
		facetimer -= Time.deltaTime;
		if( facetimer < 0 || Mathf.Approximately( facetimer, 0 ) ) {
			facetimer = -1;
			faceID = 0;
		}
	}
	// Decide on which texture to draw
	var draw : Texture;
	switch( faceID ) {
		case 1:
			draw = faceHit;
			break;
		case 2:
			draw = faceAttack;
			break;
		default:
			if( playerAttributes.health <= danger )
				draw = faceDanger;
			else
				draw = faceDefault;
	}
	GUI.DrawTexture( faceRect,  draw );
}