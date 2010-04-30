var isEnabled : Renderer;
var anim : Animation;
var clipName : String;
var numIntervals : int = 10;

private var rend : Renderer;
private var animClip : AnimationState;
private var timer : TextMesh;
private var animSpeed : float;
private var animLength : float;

function Start() {
	rend = renderer;
	animClip = anim[clipName];
	timer = GetComponent( TextMesh );
	animLength = animClip.length / numIntervals;
}

function Update () {
	rend.enabled = isEnabled.enabled;
	if( anim.IsPlaying(clipName) )
		timer.text = updateText();
}

function updateText() : String {
	var print : float = numIntervals;
	print -= Mathf.RoundToInt( animClip.time / animLength );
	return print.ToString();
}