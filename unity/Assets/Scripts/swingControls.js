var speed = 900.0;
var rotateAround : Transform;
var toRotate : Transform;
var defaultPosition : Vector3 = new Vector3(0,0,-10);
var defaultAngle : Vector3 = new Vector3(90,0,0);

private var isAnimated = false;
private var rotateAxis = Vector3.zero;
private var angle = 0;
private var totalAngle = 0;

function Update () {
	if( !rotateAround || !toRotate ) {
		// If Transforms aren't defined, halt
		return;
	} else if( isAnimated ) {
		//If we're animated, continue animating
		animateSwing();
		return;
	}
		
	// Figure out the direction to rotate in
	setupAnimation();
	if( Input.GetKey( KeyCode.UpArrow ) ) {
		rotateAxis = Vector3.right;
		angle += 1;
		isAnimated = true;
	} else if( Input.GetKey( KeyCode.DownArrow ) ) {
		rotateAxis = Vector3.right;
		angle -= 1;
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
	angle *= speed;
}

function setupAnimation() {
	angle = 0;
	totalAngle = 0;
	toRotate.position = rotateAround.TransformPoint( defaultPosition );
	toRotate.localEulerAngles = defaultAngle;
}

function animateSwing() {
	var incAngle = angle * Time.deltaTime;
	totalAngle += incAngle;
	if( totalAngle > 360 || totalAngle < -360 ) {
		isAnimated = false;
	} else {
		toRotate.RotateAround( rotateAround.position, rotateAxis, incAngle);
	}
}
