var swordRenderer : Renderer;
var swordAnimation : Animation;
var swordSound : AudioSource;
var upSwing : String;
var downSwing : String;
var rightSwing : String;
var leftSwing : String;
var circleSwing : String;

function Update () {
	if( !swordAnimation || !swordRenderer ) {
		// If variables aren't defined, halt
		return;
	}
		
	// Figure out the animation to play
	queueAnimation();
	swordRenderer.enabled = swordAnimation.isPlaying;
}

function queueAnimation() {
	var playThis : String = null;
	if( Input.GetKey( KeyCode.UpArrow ) ) {
		playThis = upSwing;
	} else if( Input.GetKey( KeyCode.DownArrow ) ) {
		playThis = downSwing;
	} else if( Input.GetKey( KeyCode.RightArrow ) ) {
		playThis = rightSwing;
	} else if( Input.GetKey( KeyCode.LeftArrow ) ) {
		playThis = leftSwing;
	} else if( Input.GetKey( KeyCode.Space ) ) {
		playThis = circleSwing;
	}
	if( playThis && !swordAnimation.isPlaying) {
		swordAnimation.Play( playThis );
		swordSound.Play();
	}
}