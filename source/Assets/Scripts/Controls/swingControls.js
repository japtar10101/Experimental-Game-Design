var swordRenderer : Renderer;
var swordAnimation : Animation;
var swordSound : AudioSource;
var upSwing : String;
var downSwing : String;
var circleSwing : String;

private var rotate : Transform;

function Start() {
	rotate = GetComponent(Transform);
	if( !swordAnimation || !swordRenderer ) {
		// If variables aren't defined, halt
		Destroy( this );
	}
}
	
function Update () {
	// Figure out the animation to play
	queueAnimation();
	
	// reorient the player, if necessary
	var playing = swordAnimation.IsPlaying( downSwing ) || swordAnimation.IsPlaying( upSwing ) || swordAnimation.IsPlaying( circleSwing );
	swordRenderer.enabled = playing;
	if( !playing ) {
		rotate.localEulerAngles.y = 0;
	}
}

function queueAnimation() {
	var playThis : String = null;
	var rotateAngle = 0;
	
	if( Input.GetAxis ("Barrel Roll") ) {
		// Queue Barrel roll animation
		playThis = circleSwing;
	} else {
		// Check the axis that the sword is swung.
		var verticalInput = Input.GetAxis ("Swing Vertical");
		var horizontalInput = Input.GetAxis ("Swing Horizontal");
		
		if( horizontalInput == 0  ) {
			// Do a perfectly vertical swing
			if( verticalInput < 0 ) {
				playThis = downSwing;
			} else if( verticalInput > 0 ) {
				playThis = upSwing;
			} else {
				return;
			}
		} else {
			// There's horizontalInput, play an animation
			// depending on input
			if( verticalInput < 0 ) {
				playThis = downSwing;
			} else {
				playThis = upSwing;
			}
			rotateAngle = anglePlayer( horizontalInput, verticalInput );
		}
	}
	if( playThis && !swordAnimation.isPlaying) {
		swordAnimation.Play( playThis );
		swordSound.Play();
		rotate.localEulerAngles.y = rotateAngle;
	}
}

function anglePlayer( horizontalInput, verticalInput ) {
	if( verticalInput == 0 ) {
		if( horizontalInput > 0 ) {
			return -90;
		} else {
			return 90;
		}
	} else if( verticalInput < 0 ) {
		if( horizontalInput > 0 ) {
			return 45;
		} else {
			return -45;
		}
	} else {
		if( horizontalInput > 0 ) {
			return -45;
		} else {
			return 45;
		}
	}
}