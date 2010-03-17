var speed = 8.5;

var moveDir : Vector3 = Vector3.zero;
private var moveObject : Transform;


function Start() {
	moveObject = GetComponent( Transform );
	if(moveDir == Vector3.zero) {
		moveDir = Vector3.forward * speed;
	}
}

function Update () {
	moveObject.Translate( moveDir * Time.deltaTime );
}