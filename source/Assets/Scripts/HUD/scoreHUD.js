
// These values are all fraction values from 0 to 1
var xOffset : float = 0.8;
var yOffset : float = 0.85;
var screenProportion : float = 0.2;

// Textures
var scoreBar : Texture;
var comboBar : Texture;
var multiBar : Texture;
var background : Texture;

// Coordinates
private var x : int;
private var y : int;

//RECTANGLES!!!!!!!!
var scoreRect : Rect;
var comboRect : Rect;
var multiRect : Rect;

var atHeightChangeFont : int = 700;
var bigFont : GUIStyle;
var smallFont : GUIStyle;

function Start() {
	// Find the proportion to resize all textures to
	var hudHeight : float = Screen.height * screenProportion;
	var proportion : float = hudHeight / background.height;
	
	// set the variables
	scoreRect.width = scoreBar.width * proportion;
	scoreRect.height = scoreBar.height * proportion;
	comboRect.width = comboBar.width * proportion;
	comboRect.height = comboBar.height * proportion;
	multiRect.height = multiBar.height * proportion;
	multiRect.width = multiBar.width * proportion;
	scoreRect.x *= proportion;
	scoreRect.y *= proportion;
	comboRect.x *= proportion;
	comboRect.y *= proportion;
	multiRect.x *= proportion;
	multiRect.y *= proportion;
		
	// shift the coordinates by the offsets
	x = xOffset * Screen.width;
	y = yOffset * Screen.height;
	scoreRect.x += x;
	scoreRect.y += y;
	comboRect.x += x;
	comboRect.y += y;
	multiRect.x += x;
	multiRect.y += y;
}

function OnGUI() {
	GUI.depth = 1;
	
	drawScore();
	if(swingControls.incrementer > 0)
		drawCombo();
		
	if(swingControls.multiplier > 2)
		drawMulti();
}

function drawScore() {
	GUI.DrawTexture( scoreRect, scoreBar);
	if(Screen.height < atHeightChangeFont)
		GUI.Label(scoreRect, playerAttributes.score.ToString(), smallFont);
	else
		GUI.Label(scoreRect, playerAttributes.score.ToString(), bigFont);
}

function drawCombo() {
	GUI.DrawTexture(comboRect, comboBar);
	if(Screen.height < atHeightChangeFont)
		GUI.Label(comboRect, swingControls.incrementer.ToString(), smallFont);
	else
		GUI.Label(comboRect, swingControls.incrementer.ToString(), bigFont);
}

function drawMulti() {
	GUI.DrawTexture( multiRect, multiBar);
	var mult : int = swingControls.multiplier;
	mult -= 1;
	if(Screen.height < atHeightChangeFont)
		GUI.Label(multiRect, mult.ToString(), smallFont);
	else
		GUI.Label(multiRect, mult.ToString(), bigFont);
}
