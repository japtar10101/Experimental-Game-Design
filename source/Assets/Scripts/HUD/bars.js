// These values are all fraction values from 0 to 1
var xOffset : float = 0.95;
var yOffset : float = 0.95;
var width : float = 0.1;
var height : float = 0.05;

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
var healthOffsetX : int;
var healthOffsetY : int;
var shieldOffsetX : int;
var shieldOffsetY : int;
var faceOffsetX : int;
var faceOffsetY : int;

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

function Start() {
	// First, set the variables to their actual width and height
	bkgWidth = background.width;
	bkgHeight = background.height;
	healthWidth = healthBar.width;
	healthHeight = healthBar.height;
	shieldWidth = shieldBar.width;
	shieldHeight = shieldBar.height;
	faceWidth = faceDefault.width;
	faceHeight = faceDefault.height;
}

function OnGUI() {
	GUI.DrawTexture( new Rect(0, 0, bkgWidth, bkgHeight ),
		background );
	GUI.DrawTexture( new Rect(healthOffsetX, healthOffsetY,
		healthWidth, healthHeight ), healthBar );
	GUI.DrawTexture( new Rect(shieldOffsetX, shieldOffsetY,
		shieldWidth, shieldHeight ), shieldBar );
	GUI.DrawTexture( new Rect(faceOffsetX, faceOffsetY,
		faceWidth, faceHeight ),  faceDefault );
}
