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
	
	//guiText.text = Script.health.ToString();
	
}

function OnGUI() {
	GUI.Box(Rect(30,800,Script.health*3,30), "HP~" + Script.health.ToString());
}