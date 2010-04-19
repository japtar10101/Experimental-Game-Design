// The material to switch to after the player passes the object
var transparent : Material;

private var switched : boolean = false;
function Start () {
	if( !transparent || !transform ) {
		Destroy( this );
	}
}

function Update () {
	if( globalAttributes.charPos.transform.position.z >= transform.position.z
			&& !switched ) {
		renderer.material = getMaterial();
		switched = true;
	}
}

function getMaterial() {
	var colorCopy = renderer.material.color;
	var materialCopy = transparent;
	colorCopy.a = transparent.color.a;
	materialCopy.color = colorCopy;
	return materialCopy;
}