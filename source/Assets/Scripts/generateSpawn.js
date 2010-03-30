//position of each wall
private var pos = Vector3(0,0,60);

private var relativeLocation : Transform;
//the amount of time between each wall
var spawnInterval : float = 30;
//invisible walls to collide into
var spawnWall : GameObject;

//all it does is call the cloning function
function Update () {
	GenerateNewWall();
}

//wait the number of seconds, then spawn a new wall
function GenerateNewWall() {
	//yield WaitForSeconds(spawnInterval);
	
	pos = relativeLocation.TransformPoint(pos);
	
	var newClone = Instantiate(spawnWall, pos, Quaternion.identity);
	newClone.transform.Rotate(Vector3(90,0,0));
	
}

function Start() {
	if(!spawnWall){
		Destroy(this);
	}
		
	// Grab the relative location to spawn enemies
	relativeLocation = GetComponent( Transform );
	if( !relativeLocation ) {
		Destroy( this );
		return;
	}
	
	//GenerateNewWall();
}	
	