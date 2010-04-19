var timerAnimation : String = "bombTimer";
var deathAnimation : String = "bombDeath";
var explodeAnimation : String = "bombExplode";
var deathSound : AudioClip;
var rocket : GameObject;

private var timerStart = false;
private var dying = false;

function Start() {
	if( !animation ) {
		print( "destroyed" );
		Destroy( this );
		return;
	}
}

function Update () {
	// If the animation started playing, flag the animation as started
	if( animation.IsPlaying( timerAnimation ) )
		timerStart = true;
	
	// If the animation is no longer running,
	// AND it's not playing death, play the explode animation
	else if( timerStart && !animation.IsPlaying( deathAnimation ) )
		explode();
}

function explode() {
	if( !dying ) {
		dying = true;
		animation.CrossFade( explodeAnimation );
		audio.PlayOneShot( deathSound );
	} else if( !animation.IsPlaying( explodeAnimation ) ) {
		Destroy( gameObject );
	}
}