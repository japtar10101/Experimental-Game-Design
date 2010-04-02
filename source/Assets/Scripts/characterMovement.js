//reticule Position
var retPos : Transform;
//this GameObject's Transform
private var thisPos : Transform;
//character Game object
private var charGame : Rigidbody;

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