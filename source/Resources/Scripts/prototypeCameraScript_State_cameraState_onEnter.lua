--------------------------------------------------------------------------------
--  State............ : cameraState
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function prototypeCameraScript.cameraState_onEnter ( )
--------------------------------------------------------------------------------
	
	--
	-- Write your code here, using 'this' as current AI instance.
	--
	object.setTranslation ( this.getObject(), 0, 0, 0, object.kGlobalSpace )
    object.lookAt ( this.getObject(), 0, 0, -1, object.kGlobalSpace, 1 )
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
