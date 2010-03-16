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
// A value from 0 to 1, with 1 = 100%
var spawnProbability : float = 0.2;

private var pos = Vector3(0,0,0);
private var relativeLocation : Transform;

function Update () {
	// Do we want to generate a new enemy?
	if( GameObject.FindGameObjectsWithTag("Destructable").length > spawnMax ) {
		return;
	} else if( Random.Range( 0, 1 ) > spawnProbability ) {
		return;
	}
	
	// Generate a random position to create a destructable enemy
	RandomPosition();
	pos = relativeLocation.TransformPoint( pos );
	
	// Generate a random enemy
	var index = Random.Range( 0, spawn.length );
	Instantiate( spawn[index], pos, Quaternion.identity );
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
		if( !i.CompareTag("Destructable") ) {
			Destroy( this );
			return;
		}
	}
	
	// Make sure all parameters are positive
	if( xLimit < 0 || yLimit < 0 || zStart < 0 || zLimit < 0 ) {
		Destroy( this );
		return;
	} else if( spawnMax < 1 || spawnProbability <= 0 ) {
		Destroy( this );
		return;
	}
	
	// Grab the relative location to spawn enemies
	relativeLocation = GetComponent( Transform );
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