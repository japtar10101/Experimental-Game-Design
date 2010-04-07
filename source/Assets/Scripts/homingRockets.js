//variable for reticule position
var retPos : Transform;
//this object's position
private var thisPos : Transform;
//this object's rigidbody
private var thisBody : Rigidbody;
//character position
var charPos : Transform;
//multiple variable
var multiple = 50.0;

function Update () {
	if(retPos) {
		var difVector = retPos.position - thisPos.position;
		difVector.z = 0;
		thisBody.AddForce(difVector*multiple);
		//thisBody.AddRelativeForce(Vector3.forward*-5);
		//print("moving towards player");
	}
}

function Start() {
	thisPos = GetComponent(Transform);
	thisBody = GetComponent(Rigidbody);
	
	if(!thisPos || !retPos){
		//print("destroyed");
		//Destroy(this);
	}
	
	fired = false;
}