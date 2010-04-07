//variable for the character
var reticulePos : GameObject;
//position to look at
private var lookPos : Transform;

function Update () {
	if(reticulePos) {
		this.transform.LookAt(lookPos);
	}
}

function Start() {
	this.transform.Rotate(Vector3(90,0,0));
	lookPos = reticulePos.transform;
	
}