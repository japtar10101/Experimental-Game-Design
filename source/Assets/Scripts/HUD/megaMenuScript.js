static var faceID : int = 0;
static var animated : boolean = false;
static var index : int = 0;

var speed : float = 0.8;
var buttonSensitivity : float = 0.1;
var menu : GameObject;
var stopPlaying : AudioSource;
var switchTo : AudioSource;
var quit : button;
var levels : String[] = ["level", "infinite"];
var texts : button[];
var loading : Renderer;

private var toSwitch : boolean = true;
private var deadButton : float = -1;

function Start() {
	if( !menu )
		menu = GameObject.Find("menu");
	if( !menu ) {
		Destroy( this );
		return;
	}
	spinSpeed = speed;
	textVisible( false );
	faceID = 0;
	animated = false;
	index = 0;
	loading.enabled = false;
}

function FixedUpdate() {
	// Do nothing if animated
	if( animated ) return;
	
	// Conduct an event based on ID
	var spinDir : int;
	switch( faceID ) {
		case 0:
			spinDir = startMenu();
			if( spinDir > 0 ) textVisible( true );
			rotateMenu( spinDir );
			break;
		case 1:
			spinDir = levelMenu();
			if( spinDir != 0 ) textVisible( false );
			rotateMenu( spinDir );
			break;
		case 2:
			spinDir = controlMenu();
			if( spinDir < 0 ) textVisible( true );
			rotateMenu( spinDir );
			break;
		default:
			loading.enabled = true;
			loadMenu();
			break;
	}
}

function textVisible( visible : boolean ) : void {
	if( quit.changeMaterial.enabled == visible )
		return;
	quit.changeMaterial.enabled = visible;
	for( var change : button in texts )
		change.changeMaterial.enabled = visible;
}

function startMenu() : int {
	if( Input.GetAxis("Proceed") > 0 ) {
		if( toSwitch ) {
			stopPlaying.Stop();
			switchTo.Play();
			toSwitch = false;
		}
		return 1;
	} else return 0;
}

function levelMenu() : int {
	var input : int =  Input.GetAxis("Vertical") + Input.GetAxis("Swing Vertical");
	
	// Setup the new index
	if( input < 0 ) {
		changeIndex(true);
		return 0;
	} else if( input > 0 ) {
		changeIndex(false);
		return 0;
	} else
		deadButton = -1;
	
	// If not, proceed or quit
	input = Input.GetAxis("Proceed");
	if( input > 0 ) {
		if( index == levels.length ) {
			print( "Quitting application" );
			Application.Quit();
			return 0;
		} else return 1;
	} else if( input < 0 )
		return -1;
	else
		return 0;
}

function changeIndex( up : boolean ) : void {
	// Make the button wasn't clicked before
	if( deadButton < 0 || deadButton > buttonSensitivity )
		deadButton = 0;
	else {
		deadButton += Time.deltaTime;
		return;
	}
	var past : int = index;
	
	// Setup the new index
	if( up ) index += 1;
	else index -= 1;
	if( index < 0 ) index = levels.length;
	else if( index > levels.length )
		index = 0;
	print( "Updated index" );
	
	// Run the animations
	if( past == levels.length )
		quit.select( false );
	else
		texts[past].select( false );
	if( index == levels.length )
		quit.select( true );
	else
		texts[index].select( true );
}

function controlMenu() : int {
	var input : int = Input.GetAxis("Proceed");
	if( input > 0 )
		return 1;
	else if( input < 0 )
		return -1;
	else
		return 0;
}

function loadMenu() : void {
	if( index < 0 || index >= levels.length )
		index = 0;
	Application.LoadLevel( levels[index] );
}

function rotateMenu( forward : int ) {
	if( forward == 0 )
		return;
	print( "rotating" );

	// Figure out the target angle
	var target : float;
	if( forward > 0 )
		target = menu.transform.eulerAngles.y + 90;
	else
		target = menu.transform.eulerAngles.y - 90;
	animated = true;
	
	// Rotate the cube
	var angle : float = 0;
	var diff : float;
	while( angle < 90 ) {
		yield;
		diff = Time.deltaTime * 90 / speed;
		angle += diff;
		if( angle > 90 )
			menu.transform.eulerAngles.y = target;
		else if( forward > 0 )
			menu.transform.Rotate(0, diff, 0);
		else
			menu.transform.Rotate(0, diff * -1, 0);
	}
	if( forward > 0 ) faceID += 1;
	else faceID -= 1;
	animated = false;
}
