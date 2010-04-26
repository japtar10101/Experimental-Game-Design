static var factor : float = 0.025;
// *sigh* some things needs to be correctly oriented
var rotate180 : boolean = false;

private var checkPos : Vector3;
private var pos : Transform;
private var tPos : Vector3;
private var cPos : Vector3;
private var ray : Ray;
private var distance : float;

function Start() {
	pos = transform;
	ray = new Ray(pos.position, Vector3.forward);
}

function Update () {
	pos.LookAt(lookAt());
	if( rotate180 )
		pos.Rotate(0, 180, 0);
}

function lookAt() {
	tPos = pos.position;
	cPos = globalAttributes.charPos.transform.position;
	
	// First, make a ray from player's position to the player's direction
	//ray.origin = cPos;
	//ray.direction = moveForward.moveDir;
	ray = new Ray( cPos, moveForward.moveDir );
	
	// Find the distance from here to the player.
	checkPos = tPos - cPos;
	
	// Get the point on the ray, factoring the player's speed and distance
	if( checkPos.magnitude < 10 )
		return cPos;
	distance = checkPos.magnitude *
		factor * moveForward.currentSpeed;
	Debug.DrawRay (ray.origin, ray.direction * distance, Color.green);
	//print( distance );
	//return ray.GetPoint(distance);
	return ray.GetPoint(distance);
}