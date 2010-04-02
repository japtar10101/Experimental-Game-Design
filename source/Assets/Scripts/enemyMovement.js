//variable for the character
var reticulePos : GameObject;

function Update () {
	if(reticulePos) {
		this.transform.LookAt(reticulePos.transform.position);
	}
}