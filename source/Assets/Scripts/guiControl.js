static var playerDead : boolean;

var danger : int = 5;
var dangerTexture : Texture;

private var healthWidth : int;
private var shieldWidth : int;
private var healthTexture : int;

function Start() {
	playerDead = false;
	healthWidth = guiTexture.pixelInset.width;
	shieldWidth = guiTexture.pixelInset.width;
	healthTexture = guiTexture.texture;
}

function OnGUI() {
	guiTexture.pixelInset.width = shieldWidth *
		( playerAttributes.shieldDuration / globalAttributes.script.maxShield );
	guiTexture.pixelInset.width = healthWidth *
		( playerAttributes.health / globalAttributes.script.maxHealth );
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
