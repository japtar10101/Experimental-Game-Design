//reticule Position
var retPos : Transform;
//this GameObject's Transform
private var thisPos : Transform;
//character Game object
private var charGame : Rigidbody;

var limitX = 0;
var limitY = 0;
var multiple = 1000;


function Update () {
	var difVector = retPos.position - thisPos.position;
	difVector.z = 0;
	charGame.AddForce(difVector*multiple);
}

function Start() {
	thisPos = GetComponent(Transform);
	charGame = GetComponent(Rigidbody);
	
	if(!thisPos || !retPos || !charGame){
		Destroy(this);
	}
	
}

function FixedUpdate() {
	if( thisPos.position.x > limitX ) {
		thisPos.position.x = limitX;
	}
	if( thisPos.position.y > limitY ) {
		thisPos.position.y = limitY;
	}
}