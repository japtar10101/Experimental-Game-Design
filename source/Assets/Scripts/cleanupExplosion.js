var allAnimations : Animation[];
var lifeTime : float = 1;

private var rend : Renderer;
private var ready : boolean = true;

function Start() {
	rend = renderer;
}

function FixedUpdate () {
	if( rend.enabled && ready ) {
		timeDestroy();
		ready = false;
	}
}

function timeDestroy() {
	yield WaitForSeconds( lifeTime );
	Destroy( gameObject );
}
