var speed = 6.0;
private var isAnimated = false;
private var rotation = Vector3.zero;
private var verticalRotation = 0;
private var horizontalRotation = 0;
function Update () {
	if( Input.GetKey( KeyCode.UpArrow ) ) {
		verticalRotation += 1;
	} else if( Input.GetKey( KeyCode.DownArrow ) ) {
		verticalRotation -= 1;
	} else if( Input.GetKey( KeyCode.RightArrow ) ) {
		horizontalRotation += 1;
	} else if( Input.GetKey( KeyCode.LeftArrow ) ) {
		horizontalRotation -= 1;
	}
	/*
	moveDirection = new Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);
	moveDirection = transform.TransformDirection(moveDirection);
	moveDirection *= speed;
	
	// Move the controller
	var controller : CharacterController = GetComponent(CharacterController);
	var flags = controller.Move(moveDirection * Time.deltaTime);
	*/
}

//@script RequireComponent(CharacterController)
