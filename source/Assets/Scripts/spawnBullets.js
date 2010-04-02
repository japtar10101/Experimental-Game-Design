//Bullet game object
var bullet : GameObject;
//Types of bullet firing formations
var bulletTypes = 3;
//testing moving bullets
var newClone1;
//testing rigid body
var clone1Rigid;
//shoot time
var shootDelay : float = .001;
//bool fired
var fired;
//variable for the character's position
var charPos : GameObject;


function Update () {

	
	if(newClone1) {
		clone1Rigid.AddRelativeForce(Vector3.forward*-70);
		//newClone1.transform.LookAt(charPos.transform.position);
	}
	
	if(!fired) {
		fired = true;
		GenerateBullet();
	}
}

function GenerateBullet() {

	var position = GetComponent(Transform);
	var currentType = Random.Range(0, bulletTypes);
	newClone1 = Instantiate(bullet, this.transform.position, this.transform.rotation); 
	clone1Rigid = newClone1.GetComponent(Rigidbody);
		//var newClone2 = Instantiate(bullet, position.TransformPoint(Vector3(-3,0,-1)), Quaternion.identity); 
	//var newClone3 = Instantiate(bullet, position.TransformPoint(Vector3(3,0,-1)), Quaternion.identity); 
	newClone1.transform.Rotate(Vector3(180,0,0));
	//newClone2.transform.Rotate(Vector3(180,0,0));
	//newClone3.transform.Rotate(Vector3(180,0,0));
}

function Start() {
	
	fired = false;
}
