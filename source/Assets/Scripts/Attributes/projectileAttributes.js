static var bullet : GameObject;
static var rocket1 : GameObject;
static var rocket2 : GameObject;
static var coin : GameObject;
static var coinMed : GameObject;
static var coinBig : GameObject;
static var coinMega : GameObject;
static var coinUltra : GameObject;
static var coinMedVal : int;
static var coinBigVal : int;
static var coinMegaVal : int;
static var coinUltraVal : int;
static var explode : GameObject;
static var hit : GameObject;
static var enemyHit : GameObject;
static var dangerHit : GameObject;

var setBullet : GameObject;
var setBibleRocket : GameObject;
var setBombRocket : GameObject;
var setCoin : GameObject;
var setCoinMed : GameObject;
var setCoinBig : GameObject;
var setCoinMega : GameObject;
var setCoinUltra : GameObject;
var setExplode : GameObject;
var setHit : GameObject;
var setEnemyHit : GameObject;
var setDangerHit : GameObject;

function Start() {
	bullet = setBullet;
	rocket1 = setBibleRocket;
	rocket2 = setBombRocket;
	coin = setCoin;
	coinMed = setCoinMed;
	coinBig = setCoinBig;
	coinMega = setCoinMega;
	coinUltra = setCoinUltra;
	explode = setExplode;
	hit = setHit;
	enemyHit = setEnemyHit;
	dangerHit = setDangerHit;
	if( !bullet || !rocket1 || !rocket2 || !coin || !explode || !hit || !enemyHit
			|| !coinMed || !coinBig ) {
		print( "Projectiles not set, game will probably freak out." );
		return;
	} else {
		var script : coinAttributes;
		script = coinMed.GetComponent( coinAttributes );
		coinMedVal = script.value;
		script = coinBig.GetComponent( coinAttributes );
		coinBigVal = script.value;
		script = coinMega.GetComponent( coinAttributes );
		coinMegaVal = script.value;
		script = coinUltra.GetComponent( coinAttributes );
		coinUltraVal = script.value;
	}
}