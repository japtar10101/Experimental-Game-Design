//reticule Position
var retPos : Transform;
// Strength of this script's force
var multiple = 1000;


//this GameObject's Transform
private var thisPos : Transform;
//character Game object
private var charGame : Rigidbody;
// Matrix for character positioning
private var orthoMatrix : Matrix4x4;

function Update () {
	var difVector = retPos.position - thisPos.position;
	//Vector3.OrthoNormalize( difVector, thisPos.position );
	difVector = orthoMatrix.MultiplyVector( difVector );
	difVector.z = 0;
	charGame.AddForce(difVector*multiple);
}

function Start() {
	thisPos = GetComponent(Transform);
	charGame = GetComponent(Rigidbody);
	orthoMatrix = Matrix4x4.Ortho( -1, 1, -1, 1, -1, 1);
	
	if(!thisPos || !retPos || !charGame){
		Destroy(this);
	}
}
