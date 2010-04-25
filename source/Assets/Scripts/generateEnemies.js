// half of x-coordinate range
var xLimit : float = 6;
// half of y-coordinate range
var yLimit : float = 5;
// starting z-coordinate
var zStart : float = 35;
// z-coordinate range
var zLimit : float = 5;
// What to spawn
var spawn : GameObject[];
// Maximum number of objects to spawn
var spawnMax : int = 4;
// Minimum number of time it takes to spawn an enemy
var spawnInterval : float = 3;
// Maxiumum number of time it takes to spawn an enemy
var spawnDelay : float = 8;
//player variable
var player : GameObject;
//z position to spawn after
var zSpawn : float = 2730;

private var pos = Vector3(0,0,0);
private var relativeLocation : Transform;
private var numCoroutines = 0;

function Update () {
	// Generate a random enemy
	if(relativeLocation.position.z >= zSpawn){
		if( numCoroutines < spawnMax ) {
			GenerateDestructable();
		}
	}
}

function GenerateDestructable() {
	// Wait first
	numCoroutines += 1;
	yield WaitForSeconds( Random.Range( spawnInterval, spawnDelay ) );
	
	// Generate a random position to create a destructable enemy
	RandomPosition();
	pos = relativeLocation.TransformPoint( pos );
	
	// Generate a random enemy
	var index = Random.Range( 0, spawn.length );
	var newClone = Instantiate( spawn[index], pos, Quaternion.identity );
	newClone.renderer.enabled = true;
	newClone.tag = "Destructable";
	//newClone.addComponent( );
	numCoroutines -= 1;
}

function Start() {
	// Error checking: Make sure everything is setup correctly
	// Check spawn
	if( !spawn ) {
		Destroy( this );
		return;
	} else if( spawn.Length <= 0 ) {
		Destroy( this );
		return;
	}
	
	// Check spawn's values
	for( var i in spawn ) {
		if( !i.CompareTag("Untagged") ) {
			Destroy( this );
			return;
		}
	}
	
	// Make sure all parameters are positive
	if( xLimit < 0 || yLimit < 0 || zStart < 0 || zLimit < 0 || spawnInterval < 0 || spawnDelay < 0 ) {
		Destroy( this );
		return;
	} else if( spawnMax < 1 || spawnInterval > spawnDelay ) {
		Destroy( this );
		return;
	}
	
	// Grab the relative location to spawn enemies
	relativeLocation = player.GetComponent( Transform );
	
	if( !relativeLocation ) {
		Destroy( this );
		return;
	}
	
}

function RandomPosition() {
	pos.x = Random.Range( xLimit * -1, xLimit );
	pos.y = Random.Range( yLimit * -1, yLimit );
	pos.z = zStart + Random.Range( zLimit * -1, zLimit );
}