// Strength of this script's force
var multiple = 1000;
var centerObject : GameObject;

//character Game object
private var charGame : Rigidbody;
private var offset : Vector3 = Vector3.zero;

function Start() {
	charGame = GetComponent(Rigidbody);
	
	if(!transform || !charGame){
		Destroy(this);
		return;
	}
	if( centerObject ) {
		offset = transform.position - centerObject.transform.position;
	}
}

function Update () {
	var difVector = retPosition() - transform.position;
	difVector += offset;
	difVector.z = 0;
	charGame.AddForce(difVector*multiple);
}

function retPosition() {
	//TODO: somehow get the orthoganol back location of the reticule
	// First, get the screen point
	var screenPoint = Camera.main.WorldToScreenPoint( globalAttributes.retPos.transform.position );
	//return Camera.main.ScreenToWorldPoint( screenPoint );
	return globalAttributes.retPos.transform.position;
}
