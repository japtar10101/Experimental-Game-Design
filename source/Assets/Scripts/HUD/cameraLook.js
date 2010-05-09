// Strength of this script's force
var multiple : float= 500;
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
var targetDist : float = 500;
private var anim : Animation;

function Update () {
	targetPos = centerObject.transform.position;
	targetPos.z += targetDist;
	
	if( !anim.isPlaying )
		trans.rotation.eulerAngles.z = 0;
	//camObject.transform.LookAt(targetPos);
	
	trans.localPosition.z = zPos;
		
	addForce();
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
	difVector = retPosition() - trans.position;
	difVector += offset;
	difVector.z = 0;
	charGame.AddForce(difVector*multiple);
}

function retPosition() {
	difVector = Camera.main.transform.position -
		globalAttributes.retPos.transform.position;
	difVector.Normalize();
	retRay.origin = globalAttributes.retPos.transform.position;
	retRay.direction = difVector;
	//TODO: somehow get the orthoganol back location of the reticule
	// First, get the screen point
	//var screenPoint = Camera.main.WorldToScreenPoint( globalAttributes.retPos.transform.position );
	//return Camera.main.ScreenToWorldPoint( screenPoint );
	//return globalAttributes.retPos.transform.position;
	return retRay.GetPoint( 10 );
}
