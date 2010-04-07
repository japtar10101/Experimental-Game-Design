//Bullet game object
var bullet : GameObject;
//Rocket game object
var rocket : GameObject;
//Types of bullet firing formations
var bulletTypes = 2;
//testing moving bullets
var newClone1;
//testing moving rockets
var rocketClone;
//testing rigid body
var clone1Rigid;
//shoot time
var shootDelay : float = .001;
//bool fired
var fired;
//variable for reticule position
var retPos : Transform;
//this object's position
private var thisPos : Transform;
//multiple variable
var multiple = 50.0;

function Update () {
	
	if(newClone1) {
		clone1Rigid.AddRelativeForce(Vector3.forward*-70);
	}
	
	if(!fired) {
		fired = true;
		GenerateBullet();
	}
}

function GenerateBullet() {

	var position = GetComponent(Transform);
	var currentType = Random.Range(0, bulletTypes);

	if(currentType == 1){
		rocketClone = Instantiate(rocket, this.transform.position, this.transform.rotation);
		rocketClone.transform.Rotate(Vector3(180,0,0));
	}
	else{
		newClone1 = Instantiate(bullet, this.transform.position, this.transform.rotation); 
		clone1Rigid = newClone1.GetComponent(Rigidbody);
		newClone1.transform.Rotate(Vector3(180,0,0));
	}
}

function Start() {
	thisPos = GetComponent(Transform);
	charPos = GetComponent(GameObject);
	
	if(!thisPos || !retPos){
		Destroy(this);
	}
	
	fired = false;
}
