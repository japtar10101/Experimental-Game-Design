// The material to switch to after the player passes the object
var transparent : Material;

private var switched : boolean = false;
function Start () {
	if( !transparent || !transform ) {
		Destroy( this );
		return;
	}
	
	var colorCopy = renderer.material.color;
	colorCopy.a = transparent.color.a;
	transparent.color = colorCopy;
	return transparent;
}

function Update () {
	if( globalAttributes.charPos.transform.position.z >= transform.position.z
			&& !switched ) {
		renderer.material = transparent;
		switched = true;
	}
}
