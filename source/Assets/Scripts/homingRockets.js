//variable for reticule position
var retPos : Transform;
//variable for reticule position
var charPos : Transform;
//force variable
var highestForce : float = 200;
//force variable
var lowestForce : float = 10;
//If the rocket is less than switchPos distance away
//from the player, aim for the player instead
var switchPos : float = 10;
// The time the rocket remains alive.
var lifeTime : float = 2;

//this object's position
private var thisPos : Transform;
//this object's rigidbody
private var thisBody : Rigidbody;
//this object's Renderer
private var visible : Renderer;
private var difVector : Vector3;
private var forceMagn : float;
private var aliveTime : float = 0;

function Update() {
	if( toRun() ) {
		thisPos.LookAt( thisPos.position - thisBody.velocity );
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
	var check = charPos.position - thisPos.position;
	if( check.magnitude < switchPos ) {
		return check;
	} else {
		return retPos.position - thisPos.position;
	}
}

function toRun() {
	if( retPos && visible.enabled ) {
		return true;
	} else {
		return false;
	}
}

function Start() {
	thisPos = GetComponent(Transform);
	thisBody = GetComponent(Rigidbody);
	visible = GetComponent( Renderer );
	
	var check;
	if( !retPos ) {
		check = GameObject.Find("bigReticule");
		if( check ) {
			retPos = check.position;
		}
	}
	if( !charPos ) {
		check = GameObject.Find("character");
		if( check ) {
			charPos = check.position;
		}
	}
	if( !retPos || !charPos || !thisPos || !thisBody || !visible){
		Destroy(this);
	}
	aliveTime = lifeTime;
}