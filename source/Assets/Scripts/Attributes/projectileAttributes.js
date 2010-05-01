static var bullet : GameObject;
static var rocket1 : GameObject;
static var rocket2 : GameObject;
static var coin : GameObject;
static var explode : GameObject;
static var hit : GameObject;
static var enemyHit : GameObject;

var setBullet : GameObject;
var setBibleRocket : GameObject;
var setBombRocket : GameObject;
var setCoin : GameObject;
var setExplode : GameObject;
var setHit : GameObject;
var setEnemyHit : GameObject;

function Start() {
	bullet = setBullet;
	rocket1 = setBibleRocket;
	rocket2 = setBombRocket;
	coin = setCoin;
	explode = setExplode;
	hit = setHit;
	enemyHit = setEnemyHit;
	if( !bullet || !rocket1 || !rocket2 || !coin || !explode || !hit || !enemyHit) {
		print( "Projectiles not set, game will probably freak out." );
		return;
	}
}