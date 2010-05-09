/*
Follow the camera!
*/

private var displacement : Vector3;
private var trans : Transform;
var cameraPos : Transform;

function Start() {
	trans = transform;
	if( !cameraPos )
		cameraPos = Camera.main.transform;
	displacement = trans.position - cameraPos.position;
}

function Update () {
	trans.position = cameraPos.position + displacement;
}