var shieldColor : Material;
var shieldOn : Renderer;

private var change : Color;

function Start() {
	if( !shieldOn )
		shieldOn = GetComponent( Renderer );
	if( !shieldColor )
		shieldColor = GetComponent( Material );
}

function Update () {
	if( shieldOn.enabled )
		fade();
}

function fade() {
	change = shieldColor.GetColor("_Color");
	change.a = playerAttributes.shieldDuration / bars.maxShield;
	shieldColor.SetColor("_Color", change);
}
