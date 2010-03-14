var sword : GameObject;
var upSwing : Animation;
var downSwing : Animation;
var rightSwing : Animation;
var leftSwing : Animation;

function Update () {
	if( !sword || !upSwing || !downSwing || !rightSwing || !leftSwing ) {
		// If Transforms aren't defined, halt
		return;
	}
		
	// Figure out the animation to play
	queueAnimation();
	sword.GetComponent( Renderer ).enabled = isAnimated();
}

function queueAnimation() {
	if( Input.GetKey( KeyCode.UpArrow ) ) {
		upSwing.PlayQueued();
	}
	if( Input.GetKey( KeyCode.DownArrow ) ) {
		downSwing.PlayQueued();
	}
	if( Input.GetKey( KeyCode.RightArrow ) ) {
		rightSwing.PlayQueued();
	}
	if( Input.GetKey( KeyCode.LeftArrow ) ) {
		leftSwing.PlayQueued();
	}
}

function isAnimated() {
	return upSwing.isPlaying || downSwing.isPlaying || leftSwing.isPlaying || rightSwing.isPlaying;
}
