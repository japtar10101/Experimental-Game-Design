static var bullet : GameObject;
static var rocket1 : GameObject;
static var rocket2 : GameObject;

var setBullet : GameObject;
var setBibleRocket : GameObject;
var setBombRocket : GameObject;

function Start() {
	bullet = setBullet;
	rocket1 = setBibleRocket;
	rocket2 = setBombRocket;
	if( !bullet || !rocket1 || !rocket2 ) {
		print( "Projectiles not set, game will probably freak out." );
		return;
	}
}