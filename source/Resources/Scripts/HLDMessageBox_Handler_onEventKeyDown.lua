--------------------------------------------------------------------------------
--  Handler.......... : onEventKeyDown
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMessageBox.onEventKeyDown ( nKey )
--------------------------------------------------------------------------------
	
    local privateVariables      = this.Private ( )
    local onTriggerType         = table.getAt ( privateVariables, 1 )
    local onTriggerKey          = table.getAt ( privateVariables, 2 )
    local offTriggerType        = table.getAt ( privateVariables, 3 )
    local offTriggerKey         = table.getAt ( privateVariables, 4 )
    local triggerState          = table.getAt ( privateVariables, 5 )
    local triggerChangeState    = table.getAt ( privateVariables, 6 )
    
    if ( not triggerChangeState )
    then
        if ( triggerState )
        then
            -- Test "OFF" trigger
            --
            if ( offTriggerType == "KeyDown" )
            then
                if ( nKey == offTriggerKey )
                then
                    this.processTriggerOff ( )
                end
            end
        else
            -- Test "ON" trigger
            --
            if ( onTriggerType == "KeyDown" )
            then
                if ( nKey == onTriggerKey )
                then
                    this.processTriggerOn ( )
                end
            end
        end
    end
    
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
