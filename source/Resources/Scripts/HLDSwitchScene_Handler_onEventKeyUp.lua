--------------------------------------------------------------------------------
--  Handler.......... : onEventKeyUp
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDSwitchScene.onEventKeyUp ( nKey )
--------------------------------------------------------------------------------

    local privateVariables      = this.Private ( )
    local triggerType           = table.getAt ( privateVariables, 1 )
    local triggerKey            = table.getAt ( privateVariables, 2 )

    -- Test trigger
    --
    if ( triggerType == "KeyUp" )
    then
        if ( nKey == triggerKey )
        then
            this.processTrigger ( )
        end
    end
        
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
