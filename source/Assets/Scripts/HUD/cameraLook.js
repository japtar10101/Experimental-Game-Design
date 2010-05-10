static var minDistance : float = 5;
static var highMultiple : float= 200;

// Strength of this script's force
var multiple : float= 80;
var centerObject : GameObject;

//character Game object
private var charGame : Rigidbody;
private var offset : Vector3 = Vector3.zero;
private var trans : Transform;
private var retRay : Ray;
private var difVector : Vector3;

private var zPos : float;
private var targetPos : Vector3;
var camObject : GameObject;
var targetDist : float = 100;
private var anim : Animation;

function Update () {
	targetPos = centerObject.transform.position;
	targetPos.z += targetDist;
	
	if( !anim.isPlaying )
		trans.rotation.eulerAngles.z = 0;
	camObject.transform.LookAt(targetPos);
	
	addForce();
	trans.localPosition.z = zPos;
}

function Start() {
	retRay = new Ray(Vector3.zero, Vector3.forward );
	charGame = GetComponent(Rigidbody);
	trans = transform;
	anim = animation;
	if(!trans || !charGame || !anim){
		Destroy(this);
		return;
	}
	
	zPos = trans.localPosition.z;
	
	if( centerObject ) {
		offset = trans.position - centerObject.transform.position;
	}
}

function addForce() {
	var retPos : Vector3 = retPosition();
	difVector = retPos - trans.position;
	difVector += offset;
	difVector.z = 0;
	if( difVector.magnitude > minDistance ) {
		charGame.AddForce(difVector*highMultiple);
	} else {
		charGame.AddForce(difVector*multiple);
	}
}

function retPosition() : Vector3 {
	return globalAttributes.retPos.transform.position;
}
