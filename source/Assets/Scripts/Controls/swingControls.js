static var multiplier : int;
static var incrementer : int;
static var limit : int = 16;

var swordRenderer : Renderer;
var swordAnimation : Animation;
var swordSound : AudioSource;
var pressUp : String;
var pressDown : String;
var defaultAnim : String;
var hackSpeedUpAnim : int = 1;

var rotate : Transform;
private var backToDefault : boolean = false;
//private var revertScore : boolean;

static function computeScore( score : int ) : int {
	var result : int = score * multiplier + incrementer;
	multiplier += 1;
	if( result > limit )
		return limit;
	else
		return result;
}

function Start() {
	multiplier = 1;
	incrementer = 0;
	if( !rotate )
		rotate = GetComponent(Transform);
	if( !swordAnimation || !swordRenderer ) {
		// If variables aren't defined, halt
		print( "destroyed" );
		Destroy( this );
	}
	swordAnimation[pressUp].speed = hackSpeedUpAnim;
	swordAnimation[pressDown].speed = hackSpeedUpAnim;
}
	
function Update () {
	// Figure out the animation to play
	var playing = swordAnimation.IsPlaying( pressDown ) || swordAnimation.IsPlaying( pressUp );
	queueAnimation( playing );
	playing = swordAnimation.IsPlaying( pressDown ) || swordAnimation.IsPlaying( pressUp );
	
	// reorient the player, if necessary
	swordRenderer.enabled = playing;
	if( !playing ) {
		rotate.localEulerAngles.z = 0;
		if( backToDefault ) {
			swordAnimation.CrossFade( defaultAnim );
			backToDefault = false;
		}
	}
}

function queueAnimation( playing : boolean ) {
	var playThis : String = null;
	var rotateAngle = 0;
	
	// Check the axis that the sword is swung.
	var verticalInput = Input.GetAxis ("Swing Vertical");
	var horizontalInput = Input.GetAxis ("Swing Horizontal");

	if( horizontalInput == 0 ) {
		// Do a perfectly vertical swing
		if( verticalInput < 0 )
			playThis = pressDown;
		else if( verticalInput > 0 )
			playThis = pressUp;
		else
			return;
	} else {
		// There's horizontalInput, play an animation
		// depending on input
		if( verticalInput < 0 )
			playThis = pressDown;
		else
			playThis = pressUp;
		rotateAngle = anglePlayer( horizontalInput, verticalInput );
	}
	if( playThis && !playing) {
		if( multiplier > 1 ) {
			incrementer += 1;
			multiplier = 1;
		} else
			incrementer = 0;
		backToDefault = true;
		swordAnimation.Play( playThis );
		swordSound.Play();
		rotate.localEulerAngles.z = rotateAngle;
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