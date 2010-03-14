var swordRenderer : Renderer;
var swordAnimation : Animation;
var upSwing : String;
var downSwing : String;
var rightSwing : String;
var leftSwing : String;

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
	if( Input.GetKey( KeyCode.UpArrow ) ) {
		swordAnimation.PlayQueued(upSwing);
	}
	if( Input.GetKey( KeyCode.DownArrow ) ) {
		swordAnimation.PlayQueued(downSwing);
	}
	if( Input.GetKey( KeyCode.RightArrow ) ) {
		swordAnimation.PlayQueued(rightSwing);
	}
	if( Input.GetKey( KeyCode.LeftArrow ) ) {
		swordAnimation.PlayQueued(leftSwing);
	}
}
