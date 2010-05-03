var enemies : Renderer[];

private var load : boolean = true;

function Update() {
	if( load ) {
		for( var show : Renderer in enemies )
			show.renderer.enabled = true;
		load = false;
	}
}