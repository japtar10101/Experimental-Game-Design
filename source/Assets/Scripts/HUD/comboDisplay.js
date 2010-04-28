var displayTime : float = 2;


function Update () {
	deleteSelf();
}

function deleteSelf() {
	WaitForSeconds(displayTime);
	Destroy(gameObject);
}