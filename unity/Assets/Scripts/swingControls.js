var speed = 250.0;
var rotateAround : Transform;
var toRotate : Transform;

private var isAnimated = false;
private var rotateAxis = Vector3.zero;
private var angle = 0;
private var totalAngle = 0;

function Update () {
	if( !rotateAround || !toRotate ) {
		return;
	}
	//TODO: deal with animation
	/*
	else if( !isAnimated ) {
		angle = 0;
	}
	*/
	angle = 0;
	// Figure out the direction to rotate in
	if( Input.GetKey( KeyCode.UpArrow ) ) {
		rotateAxis = Vector3.right;
		angle -= 1;
		isAnimated = true;
	} else if( Input.GetKey( KeyCode.DownArrow ) ) {
		rotateAxis = Vector3.right;
		angle += 1;
		isAnimated = true;
	} else if( Input.GetKey( KeyCode.RightArrow ) ) {
		rotateAxis = Vector3.up;
		angle += 1;
		isAnimated = true;
	} else if( Input.GetKey( KeyCode.LeftArrow ) ) {
		rotateAxis = Vector3.up;
		angle -= 1;
		isAnimated = true;
	}
	
	// Move the controller
	angle *= speed;
	toRotate.RotateAround( rotateAround.position, rotateAxis, angle * Time.deltaTime);
}

@script RequireComponent(Transform)
