var down : Vector3 = new Vector3( 90, 0, 0 );
var isEnabled : Renderer;
private var shadow : Projector;
private var trans : Transform;

function Start() {
	trans = transform;
	shadow = GetComponent( Projector );
}

function Update () {
	shadow.enabled = isEnabled.enabled;
	if( shadow.enabled )
		trans.rotation.eulerAngles = down;
}