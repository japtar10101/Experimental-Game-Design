var hitSound : AudioClip;
var anim : Animation;
var deathSound : AudioClip;
var deathAnim : String;
var hitAnim : String;
var textVariable : TextMesh;
var health : int = 1;
var score : int = 1;


// Flag checking if you're dying
private var dying : boolean = false;
// Script
private var spawn : spawnBulletsV2;
private var collide : Collider;
private static var initForce : float = 1500;
private var comboText : TextMesh;

function Start() {
	spawn = GetComponent( spawnBulletsV2 );
	collide = GetComponent( Collider );
	if( !anim ) anim = animation;
	if( !anim ) {
		print( "destroyed" );
		Destroy( this );
		return;
	}
	dying = false;
}

function Update () {
	if( dying && !anim.IsPlaying( deathAnim ) ) {
		comboText = Instantiate(textVariable, gameObject.transform.position, Quaternion.identity);
		comboText.text = swingControls.incrementer.ToString();
		Destroy( gameObject );
	}
}

function OnTriggerEnter (other : Collider) {
	// ignore triggering on death
	if( dying ) return;	
	else decreaseHealth(other.gameObject);
}

function decreaseHealth( collided : GameObject ) {
	//verify what we're colliding with is a sword
	if( collided.CompareTag( "Sword" ) && collided.renderer.enabled ) {
		health -= 1;
		if( health <= 0 ) {
			explosion();
			anim.CrossFade( deathAnim );
			audio.PlayOneShot(deathSound);
			if( spawn )
				spawn.startFire = false;
			collide.isTrigger = false;
			dying = true;
		} else {
			anim.Blend( hitAnim );
			audio.PlayOneShot(hitSound);
		}
	}
}

function explosion() {
	// Setup variables
	var rot : Vector3;
	var trans : Transform = transform;
	var clone : GameObject;
	var rigidClone : Rigidbody;
	
	// Generate coins
	score = swingControls.computeScore( score );
	while( score > 0 ) {
		clone = Instantiate( projectileAttributes.coin,
			trans.position, trans.rotation );
		rot.x = Random.Range( 0, 360 );
		rot.y = Random.Range( 0, 360 );
		rot.z = Random.Range( 0, 360 );
		clone.transform.Rotate( rot );
		clone.renderer.enabled = true;
			
		// Add a constant force to it
		rigidClone = clone.GetComponent( Rigidbody );
		rigidClone.AddRelativeForce( Vector3.forward * initForce * -1 );
		score -= 1;
	}
	
	//Generate explosions
	clone = Instantiate( projectileAttributes.explode,
		trans.position, trans.rotation );
	clone.renderer.enabled = true;
}

@script RequireComponent(Collision)
