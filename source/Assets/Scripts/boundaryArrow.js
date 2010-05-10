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

function Update() {
	if( boundChecker.collisionFlags == CollisionFlags.None ) {
		arrowRend.enabled = false;
	} else if( boundChecker.collisionFlags & CollisionFlags.Above ) {
		arrowRend.enabled = true;
		arrowAnim.Play();
		arrowPos.rotation.eulerAngles.z = 0;
		arrowPos.localScale.y = 1;
	}
}
