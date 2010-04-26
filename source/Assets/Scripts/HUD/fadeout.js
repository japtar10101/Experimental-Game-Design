// The color to fadeout as
var fadeout : Color = Color.black;
var fadeoutTime : float = 5;
var holdTime : float = 5;
var fadeTo : Texture;

private var alpha : float = 0;
private var loadLevel : String;
private var line : String;
private var toFadeout : boolean = false;

function Fadeout( level : String, text : String ) {
	toFadeout = true;
	loadLevel = level;
	line = text;
	alpha = 0;
	Time.timeScale = 0.1;
	fade();
}

function hold() {
	toFadeout = false;
	yield WaitForSeconds( holdTime );
	Application.LoadLevel (loadLevel);
}

function fade() {
	while( alpha < 1 ) {
		alpha += Mathf.Clamp01(Time.deltaTime / fadeoutTime);
		if( alpha > 1 )
			alpha = 1;

		GUI.color = fadeout;
		GUI.color.a = alpha;
		GUI.DrawTexture( new Rect(0, 0, Screen.width, Screen.height ), fadeTo );
		GUI.Label(Rect(Screen.width / 2, Screen.height / 2, Screen.width, Screen.height), line);
		yield;
	}
	hold();
}