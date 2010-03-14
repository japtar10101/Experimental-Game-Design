var speed : float = 8.5;

private var moveDirection = Vector3.zero;
private var verticalDirection = 0;
private var horizontalDirection = 0;

function Update () {
	// Detect the controls
	verticalDirection = 0;
	horizontalDirection = 0;
	if( Input.GetKey( "w" ) ) {
		verticalDirection += 1;
	}
	if( Input.GetKey( "s" ) ) {
		verticalDirection -= 1;
	}
	if( Input.GetKey( "d" ) ) {
		horizontalDirection += 1;
	}
	if( Input.GetKey( "a" ) ) {
		horizontalDirection -= 1;
	}
	
	// Move across the 2D plane
	moveDirection = new Vector3( horizontalDirection, verticalDirection, 0 );
	moveDirection = transform.TransformDirection(moveDirection);
	moveDirection *= speed;
	
	// Move the controller
	var controller : CharacterController = GetComponent(CharacterController);
	var flags = controller.Move(moveDirection * Time.deltaTime);
}

@script RequireComponent(CharacterController)
