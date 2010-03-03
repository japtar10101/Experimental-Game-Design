--------------------------------------------------------------------------------
--  Handler.......... : onInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function cameraFollowModel.onInit (  )
--------------------------------------------------------------------------------
	
	--
	-- Write your code here, using 'this' as current AI instance.
	-- This handler is called once, at AI instance initialization.
	--
	local hCam = application.getCurrentUserActiveCamera ( )
    object.translateTo ( hCam, 0, 1.5, 5, object.kGlobalSpace, 1 )
    object.lookAt ( hCam, 0, 1.5, 0, object.kGlobalSpace, 1 )
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
