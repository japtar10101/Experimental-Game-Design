--------------------------------------------------------------------------------
--  Handler.......... : onSwitchScene
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.onSwitchScene (  )
--------------------------------------------------------------------------------

    -- Reset "next scene"
    --
    local s = this.sNextScene ( )
    this.sNextScene ( "" )
	
    -- Destroy previous scene HUD instances
    --
    this.destroyRegisteredHUDInstances ( )
    
    -- Change scene
    --
    application.setCurrentUserScene ( s )
    
    -- Find startup camera
    --
    this.findAndUseStartupCamera ( )
    
    -- Fade In
    --
    hud.callAction ( this.getUser ( ), "HLDFadeScreenIn" )
    
    
    this.bSwitchingScene ( false )
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
