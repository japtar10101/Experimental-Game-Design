var speed : float = 8;

private var moveDirection;
private var controller : CharacterController;

function Start() {
	controller = GetComponent(CharacterController);
}

function Update () {
	// Detect the controls
	var hor = Input.GetAxis ("Horizontal");
	var ver = Input.GetAxis ("Vertical");
	moveDirection = new Vector3( hor, ver, 0 );
	
	// Move the controller
	moveDirection *= speed;
	var flags = controller.Move(moveDirection * Time.deltaTime);
}

@script RequireComponent(CharacterController)
