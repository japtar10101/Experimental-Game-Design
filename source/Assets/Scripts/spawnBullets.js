//Bullet game object
var bullet : GameObject;
//Types of bullet firing formations
var bulletTypes = 3;
//testing moving bullets
var newClone1;

function Update () {
	//if(newClone1) {
		//newClone1.transform.Translate(Vector3(-1,0,0) * Time.deltaTime);
	//}
	newClone1.GetComponent(Rigidbody).AddRelativeForce(Vector3.forward*-20);

	
}

function Start() {
	var position = GetComponent(Transform);
	var currentType = Random.Range(0, bulletTypes);
	newClone1 = Instantiate(bullet, position.TransformPoint(Vector3(0,0,-1)), Quaternion.identity); 
		//var newClone2 = Instantiate(bullet, position.TransformPoint(Vector3(-3,0,-1)), Quaternion.identity); 
	//var newClone3 = Instantiate(bullet, position.TransformPoint(Vector3(3,0,-1)), Quaternion.identity); 
	//newClone1.transform.Rotate(Vector3(180,0,0));
	//newClone2.transform.Rotate(Vector3(180,0,0));
	//newClone3.transform.Rotate(Vector3(180,0,0));
}