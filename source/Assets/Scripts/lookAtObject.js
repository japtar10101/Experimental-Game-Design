//variable for offset reticule position
var reticuleOffset : Vector3 = Vector3.zero;
// *sigh* some things needs to be correctly oriented
var rotate180 : boolean = false;

private var checkPos;
private var pos : Transform;

function Start() {
	pos = transform;
}

function Update () {
	checkPos = lookAt();
	pos.LookAt(checkPos + reticuleOffset);
	if( rotate180 )
		pos.Rotate(0, 180, 0);
}

function lookAt() {
	var tPos = pos.position;
	var rPos = globalAttributes.retPos.transform.transform.position;
	var cPos = globalAttributes.charPos.transform.position;
	if( tPos.z > rPos.z + 2  ) {
		return rPos;
	} else {
		return cPos;
	}
}