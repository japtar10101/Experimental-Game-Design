--------------------------------------------------------------------------------
--  Handler.......... : onEventKeyUp
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDBlinkShape.onEventKeyUp ( nKey )
--------------------------------------------------------------------------------

    local privateVariables      = this.Private ( )
    local targetObject          = table.getAt ( privateVariables, 0 )
    local onTriggerType         = table.getAt ( privateVariables, 1 )
    local onTriggerKey          = table.getAt ( privateVariables, 2 )
    local offTriggerType        = table.getAt ( privateVariables, 3 )
    local offTriggerKey         = table.getAt ( privateVariables, 4 )
    local triggerState          = table.getAt ( privateVariables, 5 )
    local triggerChangeState    = table.getAt ( privateVariables, 6 )

    if ( targetObject )
    then
        if ( triggerState )
        then
            -- Test "OFF" trigger
            --
            if ( offTriggerType == "KeyUp" )
            then
                if ( nKey == offTriggerKey )
                then
                    this.processTriggerOff ( )
                end
            end
        else
            -- Test "ON" trigger
            --
            if ( onTriggerType == "KeyUp" )
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
