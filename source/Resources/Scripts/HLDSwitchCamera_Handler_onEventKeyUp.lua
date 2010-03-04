--------------------------------------------------------------------------------
--  Handler.......... : onEventKeyUp
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDSwitchCamera.onEventKeyUp ( nKey )
--------------------------------------------------------------------------------

    local privateVariables      = this.Private ( )
    local targetObject          = table.getAt ( privateVariables, 0 )
    local triggerType           = table.getAt ( privateVariables, 1 )
    local triggerKey            = table.getAt ( privateVariables, 2 )

    if ( targetObject )
    then
        -- Test trigger
        --
        if ( triggerType == "KeyUp" )
        then
            if ( nKey == triggerKey )
            then
                this.processTrigger ( )
            end
        end
    end
        
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
