// For this script to work correctly,
//one has to set the camera variable
var cameraPos : Camera;
var xDisplacement : float = 100;
var zDisplacement = 0;
var zDistance = 100;
var yDisplacement = -10;
var yDistance = 100;

private var destroyObjects : GameObject[];

function Update () {
	// Error checking: don't analyze null values
	if( !cameraPos ) {
		return;
	} else if( !cameraPos.transform ) {
		return;
	}
	
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
	var displace = cameraPos.transform.position.z + zDisplacement;
	if ( check.z <= displace ) {
		return true;
	}
	
	// check in front of the camera
	displace = cameraPos.transform.position.z + zDistance;
	if ( check.z >= displace ) {
		return true;
	}
	
	// Check the right of the camera
	displace = cameraPos.transform.position.x + xDisplacement;
	if ( check.x >= displace ) {
		return true;
	}
	
	// Check the left of the camera
	displace = cameraPos.transform.position.x - xDisplacement;
	if ( check.x <= displace ) {
		return true;
	}
	
	// Check above the camera
	displace = cameraPos.transform.position.y + yDistance;
	if ( check.y >= displace ) {
		return true;
	}
	
	// Check below the camera
	displace = cameraPos.transform.position.y + yDisplacement;
	if ( check.y <= displace ) {
		return true;
	}
	
	return false;
}
