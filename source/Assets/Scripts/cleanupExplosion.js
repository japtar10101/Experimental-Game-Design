var lifeTime : float = 1;
var ring1 : GameObject;
var ring2 : GameObject;
var toDestroy : GameObject;

private var rend : Renderer;
private var ready : boolean;

function Start() {
	rend = renderer;
	if( !toDestroy )
		toDestroy = gameObject;
	ready = true;
}

function FixedUpdate () {
	if( rend.enabled && ready ) {
		timeDestroy();
		ready = false;
	}
}

function timeDestroy() {
	if( ring1 )
		ring1.transform.rotation.eulerAngles.z =
			Random.Range( 0, 360 );
	if( ring2 )
		ring2.transform.rotation.eulerAngles.z =
			Random.Range( 0, 360 );
	yield WaitForSeconds( lifeTime );
	Destroy( toDestroy );
}
