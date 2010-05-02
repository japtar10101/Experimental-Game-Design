var minOpacity : float = 0.5;
private var shieldColor : Material;
private var shieldOn : Renderer;

private var change : Color;
function Start() {
	shieldOn = GetComponent( Renderer );
	shieldColor = shieldOn.material;
}

function FixedUpdate () {
	if( shieldOn.enabled )
		fade();
}

function fade() {
	change = shieldColor.GetColor("_Color");
	var alpha : float = playerAttributes.shieldDuration / bars.maxShield;
	if(alpha < minOpacity) alpha = minOpacity;
	else if(alpha > 1) alpha = 1;
	change.a = alpha;
	shieldColor.SetColor("_Color", change);
}
