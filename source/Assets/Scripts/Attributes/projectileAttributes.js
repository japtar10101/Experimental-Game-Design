static var bullet : GameObject;
static var rocket1 : GameObject;
static var rocket2 : GameObject;
static var coin : GameObject;

var setBullet : GameObject;
var setBibleRocket : GameObject;
var setBombRocket : GameObject;
var setCoin : GameObject;

function Start() {
	bullet = setBullet;
	rocket1 = setBibleRocket;
	rocket2 = setBombRocket;
	coin = setCoin;
	if( !bullet || !rocket1 || !rocket2 ) {
		print( "Projectiles not set, game will probably freak out." );
		return;
	}
}