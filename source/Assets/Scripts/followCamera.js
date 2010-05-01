/*
Follow the camera!
*/

private var displacement : Vector3;
private var trans : Transform;

function Start() {
	trans = transform;
	displacement = trans.position - Camera.main.transform.position;
}

function Update () {
	trans.position = Camera.main.transform.position + displacement;
}