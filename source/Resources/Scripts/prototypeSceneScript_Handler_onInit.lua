--------------------------------------------------------------------------------
--  Handler.......... : onInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function prototypeSceneScript.onInit (  )
--------------------------------------------------------------------------------
	
	--
	-- Write your code here, using 'this' as current AI instance.
	-- This handler is called once, at AI instance initialization.
	--
	application.setCurrentUserScene ( "prototype" )
    --object.sendEvent( application.getCurrentUserActiveCamera(), "CharAI", "onCaptureInput", true )
    
    local s = application.getCurrentUserScene ( )
    music.play(s,0,1)

--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
