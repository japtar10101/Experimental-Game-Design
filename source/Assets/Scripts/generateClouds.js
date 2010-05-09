var clouds : GameObject[];
var cloudBounds : Rect = new Rect( 0,0, 1, 1 );
var tileX : int = 6;
var tileY : int = 3;
var speed : float = 1;

private var rightBound : float;
private var leftBound : float;
private var allClones : GameObject[];
private var cloudPos : Transform;
private var trans : Transform;

function Start() {
	allClones = new GameObject[(tileX - 1) * 2 * tileY + tileY];
	
	// First, clone a lot of clouds, and parent it to this.
	trans = transform;
	cloudPos = clouds[0].transform;
	var index : int = 0;
	
	// Make the middle column
	var clone : GameObject;
	for( var countY : int = 0; countY < tileY; countY += 1 ) {
		clone = generateClouds();
		clone.transform.localPosition.z -= countY * cloudBounds.height;
		addVariance( clone.transform );
		allClones[index] = clone;
		index += 1;
	}
	
	// Create left and right columns
	var y : float;
	for( countY = 0; countY < tileY; countY += 1 ) {
		for( var countX : int = 1; countX < tileX; countX += 1 ) {
			clone = generateClouds();
			y = countY * cloudBounds.height;
			clone.transform.localPosition.z -= y;
			clone.transform.localPosition.x -= countX * cloudBounds.width;
			addVariance( clone.transform );
			allClones[index] = clone;
			index += 1;
			clone = generateClouds();
			clone.transform.localPosition.z -= y;
			clone.transform.localPosition.x += countX * cloudBounds.width;
			addVariance( clone.transform );
			allClones[index] = clone;
			index += 1;
		}
	}
	
	//Calculate the right and left bounds
	leftBound = rightBound = cloudPos.localPosition.x;
	rightBound += cloudBounds.width * (tileX - 1) + cloudBounds.x;
	leftBound -= cloudBounds.width * tileX + cloudBounds.x;
}

function generateClouds() : GameObject {
	var index : int = Random.Range(0,clouds.length);
	var clone : GameObject;
	//Debug.Break();
	clone = Instantiate( clouds[index], cloudPos.position, cloudPos.rotation);
	clone.transform.localScale = trans.localScale;
	clone.transform.parent = trans;
	clone.renderer.enabled = true;
	return clone;
}

function addVariance( trans : Transform ) : void {
	trans.localPosition.x += Random.Range(
		cloudBounds.x * -1, cloudBounds.x );
	trans.localPosition.z += Random.Range(
		cloudBounds.y * -1, cloudBounds.y );
	if( Random.Range( 0, 2 ) > 0 )
		trans.localRotation.eulerAngles.z += 180;
}

function Update() {
	moveClouds();
}

function moveClouds() : void {
	var x : float;
	for( var cloud : GameObject in allClones ) {
		if( !cloud ) continue;
		x = cloud.transform.localPosition.x + Time.deltaTime * speed;
		if( x > rightBound )
			x = leftBound;
		cloud.transform.localPosition.x = x;
	}
}
