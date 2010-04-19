//variable for offset reticule position
var reticuleOffset : Vector3 = Vector3.zero;
// *sigh* some things needs to be correctly oriented
var rotate180 : boolean = false;

private var checkPos;

function Update () {
	checkPos = lookAt();
	this.transform.LookAt(checkPos + reticuleOffset);
	if( rotate180 ) {
		this.transform.Rotate(0, 180, 0);
	}
}

function lookAt() {
	var tPos = this.transform.position;
	var rPos = globalAttributes.retPos.transform.transform.position;
	var cPos = globalAttributes.charPos.transform.position;
	if( tPos.z > rPos.z + 2  ) {
		return rPos;
	} else {
		return cPos;
	}
}