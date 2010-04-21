private var shieldWidth : int;

function Start() {
	shieldWidth = guiTexture.pixelInset.width;
}

function OnGUI() {
	guiTexture.pixelInset.width = shieldWidth *
		( playerAttributes.shieldDuration * 1.0 / globalAttributes.script.maxShield );
}
