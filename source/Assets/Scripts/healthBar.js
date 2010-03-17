var playerHealth : GameObject;
var font : Font;
private var Script;

function Update () {
	guiText.text = Script.health.ToString();
}

function Start() {
	guiText.font = font;
	Script = playerHealth.GetComponent(playerAttributes);
	if(!Script) {
		guiText.text = "script deleted";
		Destroy(this);
	}
	
	guiText.text = Script.health.ToString();
	//guiText.text = "10000";
	
}