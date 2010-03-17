var bullet : GameObject;

function Update () {
	
}

function Start() {
	var position = GetComponent(Transform);
	var newClone = Instantiate(bullet, position.TransformPoint(Vector3(0,0,-1)), Quaternion.identity); 
	newClone.transform.Rotate(Vector3(90,0,0));
}