var speed = 250.0;
var rotateAround : Transform;
var toRotate : Transform;

private var isAnimated = false;
private var rotateAxis = Vector3.zero;
private var angle = 0;

function Update () {
	if( !rotateAround || !toRotate ) {
		return;
	}
	// Figure out the direction to rotate in
	angle = 0;
	if( Input.GetKey( KeyCode.UpArrow ) ) {
		rotateAxis = Vector3.right;
		angle -= 1;
	} else if( Input.GetKey( KeyCode.DownArrow ) ) {
		rotateAxis = Vector3.right;
		angle += 1;
	} else if( Input.GetKey( KeyCode.RightArrow ) ) {
		rotateAxis = Vector3.up;
		angle += 1;
	} else if( Input.GetKey( KeyCode.LeftArrow ) ) {
		rotateAxis = Vector3.up;
		angle -= 1;
	}
	
	// Move the controller
	angle *= speed;
	toRotate.RotateAround( rotateAround.position, rotateAxis, angle * Time.deltaTime);
}

@script RequireComponent(Transform)
