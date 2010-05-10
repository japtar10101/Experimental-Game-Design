var arrowPos : Transform;
var arrowAnim : Animation;
var arrowRend : Renderer;
var collideDetect : GameObject;

private var boundChecker : CharacterController;
private var thisPos : Transform;
private var collidePos : Transform;

function Start() {
	thisPos = transform;
	collidePos = collideDetect.transform;
	boundChecker = GetComponent( CharacterController );
	arrowRend.enabled = false;
}

/*
function OnControllerColliderHit(hit : ControllerColliderHit) {
	// Ignore collision on anything but the invisible walls
	if( hit.gameObject != collideDetect )
		return;
	
	// Render the arrow visible
	arrowRend.enabled = true;
	arrowAnim.Play();
	if(boundChecker.collisionFlags & CollisionFlags.Above) {
		arrowPos.rotation.eulerAngles.z = 0;
		arrowPos.localScale.y = 1;
	} else if(boundChecker.collisionFlags & CollisionFlags.Below) {
		arrowPos.rotation.eulerAngles.z = 180;
		arrowPos.localScale.y = 1;
	} else {
		arrowPos.localScale.y = 1.3;
		
		// If collided on the left side, turn 90
		if( thisPos.position.x < collidePos.position.x )
			arrowPos.rotation.eulerAngles.z = 90;
		else
			arrowPos.rotation.eulerAngles.z = 270;
	}
}
*/

function FixedUpdate() {
	if( boundChecker.collisionFlags == CollisionFlags.None ) {
		arrowRend.enabled = false;
		return;
	}
	var vertical : int = 0;
	var horizontal : int = 0;
	
	if( boundChecker.collisionFlags & CollisionFlags.Above )
		vertical = 1;
	else if( boundChecker.collisionFlags & CollisionFlags.Below )
		vertical = -1;
	if( boundChecker.collisionFlags & CollisionFlags.Sides ) {
		if( thisPos.position.x < collidePos.position.x )
			horizontal = -1;
		else
			horizontal = 1;
	}
	showArrow( vertical, horizontal );
}

function showArrow( vertical : int, horizontal : int ) {
	arrowRend.enabled = true;
	arrowAnim.Play();
	
	// Find all combinations
	if( horizontal == 0 ) {
		// Only vertical angles
		arrowPos.localScale.y = 1;
		if( vertical > 0 )
			arrowPos.rotation.eulerAngles.z = 0;
		else
			arrowPos.rotation.eulerAngles.z = 180;
	} else if( vertical == 0 ) {
		// Only horizontal angles
		arrowPos.localScale.y = 1.2;
		if( horizontal > 0 )
			arrowPos.rotation.eulerAngles.z = 270;
		else
			arrowPos.rotation.eulerAngles.z = 90;
	} else {
		arrowPos.localScale.y = 1.4;
		if( vertical > 0 ) {
			if( horizontal > 0 )
				arrowPos.rotation.eulerAngles.z = 315;
			else
				arrowPos.rotation.eulerAngles.z = 45;
		} else {
			if( horizontal > 0 )
				arrowPos.rotation.eulerAngles.z = 225;
			else
				arrowPos.rotation.eulerAngles.z = 135;
		}
	}	
}