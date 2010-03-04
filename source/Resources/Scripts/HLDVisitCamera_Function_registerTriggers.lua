--------------------------------------------------------------------------------
--  Function......... : registerTriggers
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDVisitCamera.registerTriggers ( )
--------------------------------------------------------------------------------
	
    user.sendEvent ( application.getCurrentUser ( ), "HLDMain", "onRegisterObjectEvent", this.getObject ( ), "HLDVisitCamera", "KeyDown" )
    user.sendEvent ( application.getCurrentUser ( ), "HLDMain", "onRegisterObjectEvent", this.getObject ( ), "HLDVisitCamera", "KeyUp" )
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
