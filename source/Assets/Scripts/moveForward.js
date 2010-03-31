var speed = 16;
var rotateSpeed = 0;
var rotateAround : Transform = null;

private var moveDir : Vector3 = Vector3.zero;
private var rotatePoint : Vector3 = Vector3.zero;
private var moveObject : Transform;


function Start() {
	moveObject = GetComponent( Transform );
	moveDir = Vector3.forward * speed;
	if( rotateAround ) {
		SetRotatePoint( rotateAround, -8 );
	}
}

function Update () {
	if( rotateAround ) {
		moveObject.RotateAround( rotatePoint, Vector3.up, rotateSpeed * Time.deltaTime );
	} else {
		moveObject.Translate( moveDir * Time.deltaTime );
	}
}

function SetRotatePoint ( turn : Transform, speed : float ) {
	rotateAround = turn;
	if( turn ) {
		rotatePoint = rotateAround.position;
		rotateSpeed = speed;
	}
}