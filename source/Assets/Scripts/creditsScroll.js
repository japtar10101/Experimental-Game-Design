var creditTexture : Texture;
var speed : float = 20;
var startHold : float = 3;
var endHold : float = 3;
var returnTo : String = "menu";
/* State of credits
	0 = start hold
	1 = scroll credits
	2 = end hold
	3 = fadeout
	4 = finished
*/
private var state : int = 0;
private var hold : float = -1;
private var yLimit : float;
private var rect : Rect;

function Start() {
	var prop : float = Screen.width / creditTexture.width;
	var height : float = prop * creditTexture.height;
	rect = new Rect( 0, 0, Screen.width, height );
	yLimit = height - Screen.height;
	yLimit *= -1;
}

function OnGUI() {
	GUI.depth = 2;
	switch( state ) {
		case 0:
			start();
			break;
		case 1:
			scroll();
			break;
		case 2:
			end();
			break;
		case 3:
			fadeout.startFade( returnTo, "", false, false);
			state = 4;
			break;
		default:
			GUI.DrawTexture( rect, creditTexture );
	}
}

function scroll() : void {
	rect.y -= Time.deltaTime * speed;
	if( rect.y < yLimit ) {
		rect.y = yLimit;
		state = 2;
	}
	GUI.DrawTexture( rect, creditTexture );
}

function start() : void {
	GUI.DrawTexture( rect, creditTexture );
	if( hold < 0 ) hold = 0;
	hold += Time.deltaTime;
	if( hold >= startHold ) {
		hold = -1;
		state = 1;
	}
}

function end() : void {
	GUI.DrawTexture( rect, creditTexture );
	if( hold < 0 ) hold = 0;
	hold += Time.deltaTime;
	if( hold >= endHold ) {
		hold = -1;
		state = 3;
	}
}
