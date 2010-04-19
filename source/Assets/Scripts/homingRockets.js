//force variable
var highestForce : float = 200;
//force variable
var lowestForce : float = 10;
//If the rocket is less than switchPos distance away
//from the player, aim for the player instead
var switchPos : float = 10;
// The time the rocket remains alive.
var lifeTime : float = 2;

//this object's rigidbody
private var thisBody : Rigidbody;
private var difVector : Vector3;
private var forceMagn : float;
private var aliveTime : float = 0;

function Update() {
	if( toRun() ) {
		transform.LookAt( transform.position - thisBody.velocity );
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
			forceMagn = 0;
		}
		difVector.Normalize();
		thisBody.AddForce( difVector * forceMagn );
	}
}

function aimFor() {
	var check = globalAttributes.charPos.transform.position - transform.position;
	if( check.magnitude < switchPos ) {
		return check;
	} else {
		return globalAttributes.retPos.transform.position - transform.position;
	}
}

function toRun() {
	if( renderer.enabled )
		return true;
	else
		return false;
}

function Start() {
	thisBody = GetComponent(Rigidbody);
	
	if( !thisBody || !transform || !renderer ){
		Destroy(this);
		return;
	}
	
	aliveTime = lifeTime;
}
