// These values are all fraction values from 0 to 1
var xOffset : float = 0.1;
var yOffset : float = 0.8;
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

// animation times
var timeHit : float = 0.5;
var timeAttack : float = 0.5;
var danger : int = 8;

private var bkgWidth : int;
private var bkgHeight : int;
private var healthWidth : int;
private var healthHeight : int;
private var shieldWidth : int;
private var shieldHeight : int;
private var faceWidth : int;
private var faceHeight : int;
private var x : int;
private var y : int;

function Start() {
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
	healthOffsetX *= proportion;
	healthOffsetY *= proportion;
	shieldOffsetX *= proportion;
	shieldOffsetY *= proportion;
	faceOffsetX *= proportion;
	faceOffsetY *= proportion;
	
	// shift the coordinates by the offsets
	x = xOffset * Screen.width;
	y = yOffset * Screen.height;
}

function OnGUI() {
	GUI.DrawTexture( new Rect(x, y, bkgWidth, bkgHeight ),
		background );
	GUI.DrawTexture( new Rect(healthOffsetX + x, healthOffsetY + y,
		healthWidth, healthHeight ), healthBar );
	GUI.DrawTexture( new Rect(shieldOffsetX + x, shieldOffsetY + y,
		shieldWidth, shieldHeight ), shieldBar );
	GUI.DrawTexture( new Rect(faceOffsetX + x, faceOffsetY + y,
		faceWidth, faceHeight ),  faceDefault );
}
