--------------------------------------------------------------------------------
--  Handler.......... : onEventMouseClick
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDSwitchScene.onEventMouseClick ( nButton )
--------------------------------------------------------------------------------
	
    local privateVariables      = this.Private ( )
    local triggerType           = table.getAt ( privateVariables, 1 )
    local triggerButton         = table.getAt ( privateVariables, 2 )
    
    -- Test trigger
    --
    if ( triggerType == "MouseClick" )
    then
        if ( nButton == triggerButton )
        then
            this.processTrigger ( )
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
