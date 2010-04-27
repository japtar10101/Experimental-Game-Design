var selected : boolean = false;
var changeMaterial : Renderer;

private static var selectZ : float = -5.5;
private static var unselectZ : float = -6;
private static var selectC : Color = new Color(1,0,0);
private static var unselectC : Color = new Color(1,1,1);
private var trans : Transform;

function Start() {
	trans = transform;
	setButton();
}

function select( popUp : boolean ) {
	// Ignore cases where the popup and selected are the same
	if( popUp == selected ) return;
	
	selected = popUp;
	setButton();
}

function setButton() {
	if( selected ) {
		changeMaterial.material.color = selectC;
		trans.localPosition.z = selectZ;
	} else {
		changeMaterial.material.color = unselectC;
		trans.localPosition.z = unselectZ;
	}
}
