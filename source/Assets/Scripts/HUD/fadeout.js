private static var toFadeout : boolean = false;
private static var toFadein : boolean = true;
private static var loadLevel : String;
private static var line : String;
private static var toHold : boolean;

// The color to fadeout as
var fadeoutTime : float = 5;
var holdTime : float = 5;
var fadeTo : Texture;

private var height : int;
private var hold : float = 0;

static function startFade( level : String, text : String, slowDown : boolean, hold : boolean) : void {
	toFadeout = true;
	loadLevel = level;
	line = text;
	toHold = hold;
	if( slowDown )
		Time.timeScale = 0.4;
}

function Start() {
	toFadein = true;
	toFadeout = false;
	height = Screen.height;
}

function OnGUI() {
	if( toFadein ) fadeIn();
	else if( toFadeout ) fadeOut();
}

function fadeIn() {
	print( "fading in" );
	GUI.DrawTexture( new Rect(0, 0, Screen.width, height ), fadeTo );
	height -= Mathf.RoundToInt( fadeSpeed() );
	yield;
	if( height <= 0 ) {
		print( "done fading" );
		height = 0;
		toFadein = false;
	}
}

function fadeOut() : void {
	// hold if height is large enough
	if( height >= Screen.height ) {
		if( !toHold ) return;
		GUI.DrawTexture( new Rect(0, 0, Screen.width, Screen.height ), fadeTo );	
		GUI.Label(Rect(Screen.width / 2, Screen.height / 2,
			Screen.width, Screen.height), line);
		hold += Time.deltaTime;
		if( hold >= holdTime ) {
			toFadeout = false;
			Time.timeScale = 1;
			Application.LoadLevel (loadLevel);
		}
	}
	
	// Otherwise, fade in
	else {
		GUI.DrawTexture( new Rect(0, 0, Screen.width, height ), fadeTo );
		height += Mathf.RoundToInt( fadeSpeed() );
		if( height >= Screen.height )
			height = Screen.height;
	}
}

private function fadeSpeed() : float {
	var check : float = Time.deltaTime * Screen.height / fadeoutTime;
	if( check < 1 )
		return 1;
	else
		return Time.deltaTime * Screen.height / fadeoutTime;
}
