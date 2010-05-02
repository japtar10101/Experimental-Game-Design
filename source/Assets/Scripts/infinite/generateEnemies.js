var wall : GameObject;
var playPos : Transform;
var minInterval : float = 3;
var maxInterval : float = 8;
var difficulties : difficulty[];
var offset : Vector3;
var bombOffset : Vector3;

private var changeDifficulty : int;
private var index : int = 0;
private var nextInterval : float;
private var intervalTime : float;
private var intervalCount : int = 0;
private var cloneWall: GameObject;
private var script : enemyWall;
private var points : corners;

function Start() {
	nextInterval = Random.Range( minInterval, maxInterval );
	intervalTime = 0;
	changeDifficulty = difficulties[0].changeAfter;
}

function Update () {
	intervalTime += Time.deltaTime;
	
	// Generate a random enemy
	if(intervalTime > nextInterval) {
		intervalTime = 0;
		intervalCount += 1;
		nextInterval = Random.Range( minInterval, maxInterval );
		GenerateDifficulty(intervalCount > changeDifficulty);
	}
	
	// increase index when necessary
	if( intervalCount > changeDifficulty ) {
		intervalCount = 0;
		if( index < difficulties.length - 1 ) {
			index += 1;
			print( "Changed difficulty to " + index );
			changeDifficulty = difficulties[index].changeAfter;
		}
	}
}

function GenerateDifficulty( newWave : boolean ) {
	cloneWall = Instantiate( wall, playPos.position + offset,
		Quaternion.identity );
		
	points = cloneWall.GetComponent( corners );
	
	script = cloneWall.GetComponent( enemyWall );
	script.enemies = difficulties[index].GetEnemies(
		points.upperRightLimit, points.lowerLeftLimit);
	offsetBombs( script.enemies );
	
	if( newWave ) {
		var waveNum : int = index + 2;
		points.textMesh.text = "Wave " + waveNum;
	}
}

function offsetBombs( enemies : GameObject[] ) : void {
	for( var enemy : GameObject in enemies ) {
		if( enemy.GetComponent( bombAttributes ) )
			enemy.transform.position += bombOffset;
	}
}