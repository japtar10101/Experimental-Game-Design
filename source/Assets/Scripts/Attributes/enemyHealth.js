var hitSound : AudioClip;
var anim : Animation;
var deathSound : AudioClip;
var deathAnim : String;
var hitAnim : String;
var health : int = 1;
var score : int = 1;


// Flag checking if you're dying
private var dying : boolean = false;
// Script
private var spawn : spawnBulletsV2;
private var collide : Collider;
private static var initForce : float = 1500;
private var comboText : TextMesh;
private var trans : Transform;

function Start() {
	spawn = GetComponent( spawnBulletsV2 );
	collide = GetComponent( Collider );
	if( !anim ) anim = animation;
	if( !anim ) {
		print( "destroyed" );
		Destroy( this );
		return;
	}
	anim[hitAnim].layer = 2;
	dying = false;
	trans = transform;
}

function Update () {
	if( dying && !anim.IsPlaying( deathAnim ) )
		Destroy( gameObject );
}

function OnTriggerEnter (other : Collider) {
	// ignore triggering on death
	if( dying ) return;	
	else decreaseHealth(other.gameObject);
}

function decreaseHealth( collided : GameObject ) {
	//verify what we're colliding with is a sword
	if( collided.CompareTag( "Sword" ) ) {
		health -= 1;
		hitEffect();
		if( health <= 0 ) {
			explosion();
			anim.CrossFade( deathAnim );
			audio.PlayOneShot(deathSound);
			if( spawn )
				spawn.startFire = false;
			collide.isTrigger = false;
			dying = true;
		} else {
			anim.Play( hitAnim );
			audio.PlayOneShot(hitSound);
		}
		swingControls.multiplier += 1;
		if( swingControls.toIncrement ) {
			swingControls.incrementer += 1;
			swingControls.toIncrement = false;
		}
	}
}

function hitEffect() {
	var clone : GameObject = Instantiate(
		projectileAttributes.enemyHit, trans.position, trans.rotation );
	clone.transform.Rotate( Random.Range(0, 360), 90, 90 );
	clone.transform.parent = trans;
	clone.renderer.enabled = true;
}

function explosion() {
	var trans : Transform = transform;
	
	// Compute score
	score = swingControls.computeScore( score );
	
	// Generate big coins
	var numCoins : int = score / projectileAttributes.coinBigVal;
	score -= numCoins * projectileAttributes.coinBigVal;
	while( numCoins > 0 ) {
		generateCoin( projectileAttributes.coinBig, trans );
		numCoins -= 1;
	}
	
	// Generate medium coins
	numCoins = score / projectileAttributes.coinMedVal;
	score -= numCoins * projectileAttributes.coinMedVal;
	while( numCoins > 0 ) {
		generateCoin( projectileAttributes.coinMed, trans );
		numCoins -= 1;
	}
	
	// Generate small coins
	while( score > 0 ) {
		generateCoin( projectileAttributes.coin, trans );
		score -= 1;
	}
	
	//Generate explosions
	var clone : GameObject = Instantiate( projectileAttributes.explode,
		trans.position, trans.rotation );
	clone.renderer.enabled = true;
}

function generateCoin( coin : GameObject, trans : Transform ) {
	var rot : Vector3;
	var clone : GameObject;
	var rigidClone : Rigidbody;
	
	clone = Instantiate( coin, trans.position, trans.rotation );
	rot.x = Random.Range( 0, 360 );
	rot.y = Random.Range( 0, 360 );
	rot.z = Random.Range( 0, 360 );
	clone.transform.Rotate( rot );
	clone.renderer.enabled = true;
			
	// Add a constant force to it
	rigidClone = clone.GetComponent( Rigidbody );
	rigidClone.AddRelativeForce( Vector3.forward * initForce * -1 );
}

@script RequireComponent(Collision)
