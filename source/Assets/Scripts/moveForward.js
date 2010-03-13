var speed = 8.5;

private var moveObject : Transform;
private var moveDir : Vector3;

function Start() {
	moveObject = GetComponent( Transform );
	moveDir = Vector3.forward * speed;
}

function Update () {
	moveObject.Translate( moveDir * Time.deltaTime );
}