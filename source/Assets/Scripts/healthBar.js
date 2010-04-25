static var playerDead : boolean;

var danger : int = 5;
var dangerTexture : Texture;

private var healthWidth : int;
private var healthTexture : Texture;

function Start() {
	playerDead = false;
	healthWidth = guiTexture.pixelInset.width;
	healthTexture = guiTexture.texture;
}

function OnGUI() {
	guiTexture.pixelInset.width = healthWidth *
		( playerAttributes.health * 1.0 / globalAttributes.script.maxHealth );
	//print( guiTexture.pixelInset.width );
	if( playerAttributes.health <= danger )
		guiTexture.texture = dangerTexture;
	else
		guiTexture.texture = healthTexture;
}

function Update () {
	if(!playerDead)
		if(playerAttributes.health<=0)
			playerDead = true;
}
