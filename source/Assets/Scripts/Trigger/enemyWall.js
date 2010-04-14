// The enemies to "spawn"
var enemies : GameObject[];
// The direction to move enemies
var dirMove : Vector3 = Vector3.up * -1;
// The speed to move enemies
var speedMove : float = 10;
// The distance to move enemies
var distMove : float = 2;

// Boolean indicating to move the enemies
private var moveEnemies;
// Float indicating the distance we've moved
private var moveDistance : float;
// Magnitude vector that we're moving
private var moveMagn : Vector3;

function Start() {
	// Setup move magnitude
	moveMagn = dirMove;
	moveMagn.Normalize();
	moveMagn *= speedMove;
	
	// Setup variables
	moveDistance = 0;
	moveEnemies = false;
}

function Update() {
	// Move the enemes
	if( moveEnemies ) {
		// If we moved far enough, stop the movement
		if( moveDistance >= distMove ) {
			// Make the enemies fire
			var script;
			for( reveal in enemies ) {
				script = reveal.GetComponent( spawnBullets );
				if( script ) {
					script.startFire = true;
				}
			}
			moveEnemies = false;
		}
		
		// Else, move all enemies
		else {
			var moveVector = moveMagn * Time.deltaTime;
			for( reveal in enemies ) {
				if( reveal.transform ) {
					reveal.transform.position += moveVector;
				}
			}
			// Increment distance
			moveDistance += moveVector.magnitude;
		}
	}
}

function OnTriggerEnter (other : Collider) {	
	//Check if what collided was the player
	if( other.gameObject.CompareTag( "Player" ) ) {
		// Reveal all enemies
		for( reveal in enemies ) {
			if( reveal.renderer ) {
				reveal.renderer.enabled = true;
			}
		}
		moveEnemies = true;
	}
}
