
// These values are all fraction values from 0 to 1
var xOffset : float = 0.05;
var yOffset : float = 0.75;
var screenProportion : float = 0.2;

// Textures
var scoreBar : Texture;
var comboBar : Texture;
var multiBar : Texture;
var background : Texture;

//TODO: add a variable to track face conditions

//TODO: make rects to store these variables.  Ugh.
//private var bkgRect : Rect;
// Coordinates
private var x : int;
private var y : int;

//RECTANGLES!!!!!!!!
var scoreRect : Rect;
var comboRect : Rect;
var multiRect : Rect;
var scoreTextRect : Rect;
var comboTextRect : Rect;
var multiTextRect : Rect;
//private var prev : TextAnchor;

function Start() {
	//prev = GUI.skin.label.alignment = TextAnchor.MiddleLeft;
	
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
	
	scoreTextRect.width = scoreRect.width;
	scoreTextRect.height = scoreRect.height;
	comboTextRect.width = comboRect.width;
	comboTextRect.height = comboRect.height;
	multiTextRect.width = multiRect.width;
	multiTextRect.height = multiRect.height;
	
	// shift the coordinates by the offsets
	x = xOffset * Screen.width;
	y = yOffset * Screen.height;
	scoreRect.x += x;
	scoreRect.y += y;
	comboRect.x += x;
	comboRect.y += y;
	multiRect.x += x;
	multiRect.y += y;
	scoreTextRect.x = scoreRect.x * 1.109;
	scoreTextRect.y = scoreRect.y;
	comboTextRect.x = comboRect.x * 1.109;
	comboTextRect.y = comboRect.y;
	multiTextRect.x = multiRect.x * 1.109;
	multiTextRect.y = multiRect.y;
	
	print(scoreTextRect);
	
}

function OnGUI() {
	GUI.depth = 1;
	
	drawScore();
	if(swingControls.incrementer > 0)
		drawCombo();
		
	if(swingControls.multiplier > 1)
		drawMulti();
}

function drawScore() {
	GUI.DrawTexture( scoreRect, scoreBar);
	GUI.Label(scoreTextRect, playerAttributes.score.ToString());
}

function drawCombo() {
	GUI.DrawTexture(comboRect, comboBar);
	GUI.Label(comboTextRect, swingControls.incrementer.ToString());
}

function drawMulti() {
	GUI.DrawTexture( multiRect, multiBar);
	GUI.Label(multiTextRect, swingControls.multiplier.ToString());
}
