var enemies : GameObject[];
var probability : float[];
var minNum : int = 1;
var maxNum : int = 1;

private var num : int;

function GetEnemies( upperRightLimit : Transform,
		lowerLeftLimit : Transform ) : GameObject[] {
	var posMax : Vector3 = upperRightLimit.position;
	var posMin : Vector3 = lowerLeftLimit.position;
	num  = Random.Range( minNum, maxNum );
	var toReturn : GameObject[] = new GameObject[num];
	while( num > 0 ) {
		//toReturn[num - 1] = cloneEnemy( posMin );
		//toReturn[num - 1] = cloneEnemy( posMax );
		
		toReturn[num - 1] = cloneEnemy( new Vector3(
			Random.Range( posMin.x, posMax.x ),
			Random.Range( posMin.y, posMax.y ),
			Random.Range( posMin.z, posMax.z ) ) );
		
		num -= 1;
	}
	return toReturn;
}

function cloneEnemy( location : Vector3 ) : GameObject {
	var toClone : GameObject;
	var prob : float = Random.value;
	if( Mathf.Approximately( prob, 0 ) )
		toClone = enemies[0];
	else {
		var index : int = -1;
		while( prob > 0 ) {
			index += 1;
			prob -= probability[index];
		}
		toClone = enemies[index];
	}
	
	return Instantiate( toClone, location, Quaternion.identity );
}
