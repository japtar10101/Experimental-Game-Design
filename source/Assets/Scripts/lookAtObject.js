//variable for the character
var reticulePos : GameObject;
//variable for the character
var characterPos : GameObject;
//variable for offset reticule position
var reticuleOffset : Vector3 = Vector3.zero;
// *sigh* some things needs to be correctly oriented
var rotate180 : boolean = false;

private var checkPos;

function Start () {
	if( !reticulePos ) {
		reticulePos = GameObject.Find("bigReticule");
	}
	if( !characterPos ) {
		characterPos = GameObject.Find("character");
	}
}

function Update () {
	if(reticulePos && characterPos) {
		checkPos = lookAt();
		this.transform.LookAt(checkPos + reticuleOffset);
		if( rotate180 ) {
			this.transform.Rotate(0, 180, 0);
		}
	}
}

function lookAt() {
	var tPos = this.transform.position;
	var rPos = reticulePos.transform.position;
	var cPos = characterPos.transform.position;
	if( tPos.z > rPos.z + 2  ) {
		return rPos;
	} else {
		return cPos;
	}
}