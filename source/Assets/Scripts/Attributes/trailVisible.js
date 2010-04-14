//Bullet's trail game object
var trail : GameObject[];

private var visible : Renderer;

function Start() {
	visible = GetComponent( Renderer );
	if( !visible ) {
		Destroy( this );
	}
}

function Update () {
	for( reveal in trail ) {
		if( reveal ) {
			reveal.renderer.enabled = visible.enabled;
		}
	}
}