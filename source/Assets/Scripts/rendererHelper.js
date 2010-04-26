var bibleAnimation : Animation = null;
// Renders to enable/disable
var allRenderers : Renderer[];

// Helper script that renders a model visible when its renderer is
private var isRendered : boolean = false;
private var check : Renderer;

function Start() {
	if( bibleAnimation ) {
		bibleAnimation.Play();
		bibleAnimation.Stop();
	}
	check = renderer;
}

function Update () {
	if( renderer.enabled != isRendered ) {
		isRendered = check.enabled;
		renderAll( check.enabled );
	}
}

function renderAll( state : boolean ) {
	for( var render : Renderer in allRenderers ) {
		if( render ) render.enabled = state;
	}
}