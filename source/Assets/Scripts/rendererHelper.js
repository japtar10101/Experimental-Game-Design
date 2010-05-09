var bibleAnimation : Animation = null;
// Renders to enable/disable
var allRenderers : Renderer[];
var emitter : ParticleEmitter;
var numYields : int = 3;

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
	if( check.enabled != isRendered ) {
		isRendered = check.enabled;
		renderAll( check.enabled );
		if( emitter && check.enabled )
			emitter.emit = true;
	}
}

function renderAll( state : boolean ) {
	var num : int;
	for( var render : Renderer in allRenderers ) {
		if( render ) {
			if( render.enabled )
				continue;
			num = 0;
			while( num < numYields ) {
				yield;
				num += 1;
			}
			render.enabled = state;
		}
	}
}