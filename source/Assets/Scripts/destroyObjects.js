// For this script to work correctly,
//one has to set the camera variable
var xDisplacement : float = 100;
var zDisplacement : float = 0;
var zDistance : float = 100;
var yDisplacement : float = -10;
var yDistance : float = 100;

private var destroyObjects : GameObject[];

function FixedUpdate () {
	destroyByTags();
}

function destroyByTags() {
	// Destroy all destructable gameobjects
	destroyObjects = GameObject.FindGameObjectsWithTag( "Destructable" );
	destroyAll();
	
	// Do the same thing with health
	destroyObjects = GameObject.FindGameObjectsWithTag( "Health" );
	destroyAll();
}

function destroyAll() {
	// Destroy objects who is past the z-location
	for( var toDestroy : GameObject in destroyObjects ) {
		if( !toDestroy.transform || !toDestroy.renderer || !toDestroy.renderer.enabled ) {
			continue;
		} else if( canBeDestroyed( toDestroy.transform.position ) ) {
			Destroy( toDestroy );
		}
	}
}

function canBeDestroyed( check ) {
	// check behind the camera
	var displace = Camera.main.transform.position.z + zDisplacement;
	if ( check.z <= displace ) {
		return true;
	}
	
	// check in front of the camera
	displace = Camera.main.transform.position.z + zDistance;
	if ( check.z >= displace ) {
		return true;
	}
	
	// Check the right of the camera
	displace = Camera.main.transform.position.x + xDisplacement;
	if ( check.x >= displace ) {
		return true;
	}
	
	// Check the left of the camera
	displace = Camera.main.transform.position.x - xDisplacement;
	if ( check.x <= displace ) {
		return true;
	}
	
	// Check above the camera
	displace = Camera.main.transform.position.y + yDistance;
	if ( check.y >= displace ) {
		return true;
	}
	
	// Check below the camera
	displace = Camera.main.transform.position.y + yDisplacement;
	if ( check.y <= displace ) {
		return true;
	}
	
	return false;
}
