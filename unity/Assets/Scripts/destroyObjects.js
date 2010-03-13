// For this script to work correctly,
//one has to set the camera variable
var cameraPos : Camera;
var zDisplacement = 0;

private var destroyObjects : GameObject[];

function Update () {
	// Error checking: don't analyze null values
	if( !cameraPos ) {
		return;
	} else if( !cameraPos.transform ) {
		return;
	}
	
	// Grab all destructable gameobjects
	destroyObjects = GameObject.FindGameObjectsWithTag( "Destructable" );
	
	// Setup the displacement z-coordinate
	var displace = cameraPos.transform.position.z + zDisplacement;
	
	// Destroy objects who is past the z-location
	for( var toDestroy : GameObject in destroyObjects ) {
		if( !toDestroy.transform ) {
			continue;
		} else if( toDestroy.transform.position.z <= displace ) {
			Destroy( toDestroy );
		}
	}
}
