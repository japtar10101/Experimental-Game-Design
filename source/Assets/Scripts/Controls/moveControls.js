var speed : float = 8.5;
var characterTransform : Transform;

private var moveDirection = Vector3.zero;
private var verticalDirection = 0;
private var horizontalDirection = 0;
private var animateRight = false;
private var animateLeft = false;
private var animateUp = false;
private var animateDown = false;

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
	if( characterTransform ) {
		animateCharacter();
	}
	var controller : CharacterController = GetComponent(CharacterController);
	var flags = controller.Move(moveDirection * Time.deltaTime);
}

function animateCharacter() {
	/*
	// If we're moving sideways
	if( horizontalDirection < 0 && !animateRight ) {
		characterAnimation.Play( moveRight );
		animateRight = true;
	} else if( horizontalDirection >= 0 && animateRight ) {
		characterAnimation.Rewind( moveRight );
		animateRight = false;
	}
	if( horizontalDirection > 0 && !animateLeft ) {
		characterAnimation.Play( moveLeft );
		animateLeft = true;
	} else if( horizontalDirection <= 0 && animateLeft ) {
		characterAnimation.Rewind( moveLeft );
		animateLeft = false;
	}
	if( verticalDirection > 0 && !animateUp ) {
		characterAnimation.Play( moveUp );
		animateUp = true;
	} else if( verticalDirection <= 0 && animateUp ) {
		characterAnimation.Rewind( moveUp );
		animateUp = false;
	}
	if( verticalDirection < 0 && !animateDown ) {
		characterAnimation.Play( moveDown );
		animateDown = true;
	} else if( verticalDirection >= 0 && animateDown ) {
		characterAnimation.Rewind( moveDown );
		animateDown = false;
	}
	*/
}

@script RequireComponent(CharacterController)
