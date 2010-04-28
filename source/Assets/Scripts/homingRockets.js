//force variable
var highestForce : float = 100;
//force variable
var lowestForce : float = 50;
//If the rocket is less than switchPos distance away
//from the player, aim for the player instead
var switchPos : float = 10;
// The time the rocket remains alive.
var lifeTime : float = 2;
var isCoin : boolean = false;

//this object's rigidbody
private var thisBody : Rigidbody;
private var difVector : Vector3;
private var lastVector : Vector3 = Vector3.zero;
private var forceMagn : float;
private var aliveTime : float = 0;
private var trans : Transform;
private var rend : Renderer;

function Update() {
	if( toRun() ) {
		transform.LookAt( trans.position - thisBody.velocity );
		aliveTime -= Time.deltaTime;
	}
}

function FixedUpdate () {
	if(toRun()) {
		difVector = aimFor();
		forceMagn = highestForce;
		if( difVector.magnitude > 1 ) {
			forceMagn /= difVector.magnitude;
		}
		if( forceMagn < lowestForce ) {
			forceMagn = lowestForce;
		}
		if( aliveTime < 0 ) {
			if( isCoin ) {
				Destroy( gameObject );
				return;
			}
			if( lastVector == Vector3.zero )
				lastVector = difVector;
			else
				difVector = lastVector;
		}
		difVector.Normalize();
		thisBody.AddForce( difVector * forceMagn );
	}
}

function aimFor() {
	var check = globalAttributes.charPos.transform.position - trans.position;
	if( check.magnitude < switchPos ) {
		return check;
	} else {
		return globalAttributes.retPos.transform.position - trans.position;
	}
}

function toRun() {
	if( rend.enabled )
		return true;
	else
		return false;
}

function Start() {
	thisBody = GetComponent(Rigidbody);
	trans = transform;
	rend = renderer;
	if( !thisBody || !trans || !rend ){
		Destroy(this);
		return;
	}
	
	aliveTime = lifeTime;
}
