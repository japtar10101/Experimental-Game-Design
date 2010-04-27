var levels : String[] = ["level", "infinite"];
var texts : GameObject[];
var popUp : String = "menuPopup";
var popDown : String = "menuDown";
private var index : int = 0;

function Start() {
	if( levels.length <= 0 )
		Destroy( this );
	if( texts.length <= 0 )
		Destroy( this );
	if( texts.length == levels.length )
		Destroy( this );
	print( "level select not deleted" );
}

function Update () {
	if( menu.faceID == 1 ) {
		var input : int = Input.GetAxis("Vertical") + Input.GetAxis("Swing Vertical");
		if( input > 0 ) changeIndex( true );
		else if( input < 0 ) changeIndex( false );
	} else if( !menu.animated && menu.faceID >= 3 )
		Application.LoadLevel( levels[index] );
}

function changeIndex( up : boolean ) {
	var past : int = index;
	
	// Setup the new index
	if( up ) index += 1;
	else index -= 1;
	if( index < 0 ) index = 0;
	else if( index >= levels.length )
		index = levels.length - 1;
	print( "Updated index" );
	// Run the animations
	texts[past].animation.PlayQueued( popDown );
	texts[index].animation.PlayQueued( popUp );
}
