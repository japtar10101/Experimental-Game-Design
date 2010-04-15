//variable for the character
var reticulePos : GameObject;
//variable for offset reticule position
var reticuleOffset : Vector3 = Vector3.zero;

function Update () {
	if(reticulePos) {
		this.transform.LookAt(reticulePos.transform.position + reticuleOffset);
	}
}