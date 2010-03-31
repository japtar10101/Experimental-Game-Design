var speed = 16;
var yTurn : float = 0;

private var moveDir : Vector3 = Vector3.zero;
private var moveObject : Transform;


function Start() {
	moveObject = GetComponent( Transform );
	if(moveDir == Vector3.zero) {
		moveDir = Vector3.forward * speed;
	}
}

function Update () {
	moveObject.Translate( moveDir * Time.deltaTime );
	moveObject.Rotate( 0, yTurn * Time.deltaTime, 0 );
}

function SetTurnY ( turn : float ) {
	yTurn = turn;
}