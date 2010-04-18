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
	}
}

function OnGUI() {
	GUI.Box(Rect(30,680,Script.maxHealth*12,30), "");
	GUI.Box(Rect(30,720,Script.maxShield*12,30), "");
	GUI.Box(Rect(30,680,Script.health*12,30), "HP");
	GUI.Box(Rect(30,720,Script.shieldDuration*12,30), "SP");
	/*
	GUI.Box(Rect(30,680,Script.health*12,30), "HP~" + Script.health.ToString());
	GUI.Box(Rect(30,720,Script.shieldDuration*12,30), "SP~" + Script.shieldDuration.ToString());
	*/
}