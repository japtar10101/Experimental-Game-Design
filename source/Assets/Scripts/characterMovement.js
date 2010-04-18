//reticule Position
var retPos : Transform;
// Strength of this script's force
var multiple = 1000;

//this GameObject's Transform
private var thisPos : Transform;
//character Game object
private var charGame : Rigidbody;

function Start() {
	thisPos = GetComponent(Transform);
	charGame = GetComponent(Rigidbody);
	
	if(!thisPos || !retPos || !charGame){
		Destroy(this);
	}
}

function Update () {
	var difVector = retPosition() - thisPos.position;
	difVector.z = 0;
	charGame.AddForce(difVector*multiple);
}

function retPosition() {
	//TODO: somehow get the orthoganol back location of the reticule
	// First, get the screen point
	var screenPoint = Camera.main.WorldToScreenPoint( retPos.position );
	//return Camera.main.ScreenToWorldPoint( screenPoint );
	return retPos.position;
}
