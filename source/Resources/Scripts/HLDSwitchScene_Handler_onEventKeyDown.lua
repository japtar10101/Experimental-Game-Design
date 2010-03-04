--------------------------------------------------------------------------------
--  Handler.......... : onEventKeyDown
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDSwitchScene.onEventKeyDown ( nKey )
--------------------------------------------------------------------------------
	
    local privateVariables      = this.Private ( )
    local triggerType           = table.getAt ( privateVariables, 1 )
    local triggerKey            = table.getAt ( privateVariables, 2 )
    
    -- Test trigger
    --
    if ( triggerType == "KeyDown" )
    then
        if ( nKey == triggerKey )
        then
            this.processTrigger ( )
        end
    end
    
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
