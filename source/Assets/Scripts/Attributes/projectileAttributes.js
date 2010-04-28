static var bullet : GameObject;
static var rocket1 : GameObject;
static var rocket2 : GameObject;
static var coin : GameObject;
static var explode : GameObject;
static var text : GameObject;

var setBullet : GameObject;
var setBibleRocket : GameObject;
var setBombRocket : GameObject;
var setCoin : GameObject;
var setExplode : GameObject;
var set3dText : GameObject;

function Start() {
	bullet = setBullet;
	rocket1 = setBibleRocket;
	rocket2 = setBombRocket;
	coin = setCoin;
	explode = setExplode;
	text = set3dText;
	if( !bullet || !rocket1 || !rocket2 || !coin || !explode || !text) {
		print( "Projectiles not set, game will probably freak out." );
		return;
	}
}