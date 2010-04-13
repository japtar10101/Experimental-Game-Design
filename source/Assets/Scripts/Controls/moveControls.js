var speed : float = 8.5;
var characterTransform : Transform;

private var moveDirection = Vector3.zero;
private var verticalDirection = 0;
private var horizontalDirection = 0;

function Update () {
	// Detect the controls
	verticalDirection = Input.GetAxis ("Vertical");
	horizontalDirection = Input.GetAxis ("Horizontal");
	
	// Move across the 2D plane
	moveDirection = new Vector3( horizontalDirection, verticalDirection, 0 );
	moveDirection = transform.TransformDirection(moveDirection);
	moveDirection *= speed;
	
	// Move the controller
	var controller : CharacterController = GetComponent(CharacterController);
	var flags = controller.Move(moveDirection * Time.deltaTime);
}

@script RequireComponent(CharacterController)
