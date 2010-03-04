--------------------------------------------------------------------------------
--  Function......... : switchScene
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.switchScene ( )
--------------------------------------------------------------------------------

    this.bSwitchingScene ( true )
	
    -- Unregister all
    --
    table.empty ( this.tKeyDownEventTargetObjects    ( ) )
    table.empty ( this.tKeyUpEventTargetObjects      ( ) )
    table.empty ( this.tMouseClickEventTargetObjects ( ) )
    table.empty ( this.tMouseEnterEventTargetObjects ( ) )
    table.empty ( this.tMouseLeaveEventTargetObjects ( ) )
    this.hLastUnderCursorObject ( nil )
    this.hUnderCursorObject     ( nil )
    
    -- Fade Out
    --
    hud.stopAction ( this.getUser ( ), "HLDFadeScreenIn"  )
    hud.stopAction ( this.getUser ( ), "HLDFadeScreenOut" )
    hud.callAction ( this.getUser ( ), "HLDFadeScreenOut" )
    this.postEvent ( 1.1, "onSwitchScene" )
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
