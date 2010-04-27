var wall : GameObject;
var playPos : Transform;
var minInterval : float = 3;
var maxInterval : float = 8;
var changeDifficulty : int;
var difficulties : difficulty[];
var offset : Vector3;

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
}

function Update () {
	intervalTime += Time.deltaTime;
	
	// Generate a random enemy
	if(intervalTime > nextInterval) {
		GenerateDifficulty();
		intervalTime = 0;
		intervalCount += 1;
		nextInterval = Random.Range( minInterval, maxInterval );
	}
	// TODO: increase index when necessary
}

function GenerateDifficulty() {
	cloneWall = Instantiate( wall, playPos.position + offset,
		Quaternion.identity );
		
	points = cloneWall.GetComponent( corners );
	
	script = cloneWall.GetComponent( enemyWall );
	script.enemies = difficulties[index].GetEnemies(
		points.upperRightLimit, points.lowerLeftLimit);
}
