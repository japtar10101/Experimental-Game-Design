var playerHealth : GameObject;
var font : Font;
private var Script;
var deathSound :  AudioClip;
var playerDead;

function Update () {
	if(!playerDead) {
		//guiText.text = Script.health.ToString();
		if(Script.health<=0) {
			guiText.text = "DEAD";
			audio.PlayOneShot(deathSound);
			playerDead = true;
		}
	}
}

function Start() {
	guiText.font = font;
	playerDead = false;
	Script = playerHealth.GetComponent(playerAttributes);
	if(!Script) {
		guiText.text = "script deleted";
		Destroy(this);
	} else {
		guiText.text = "It's working!";
	}
}

function OnGUI() {
	GUI.Box( Rect(30,680,playerAttributes.health*12,30), "HP");
	GUI.Box( Rect(30,720,playerAttributes.shieldDuration*12,30), "SP");
}