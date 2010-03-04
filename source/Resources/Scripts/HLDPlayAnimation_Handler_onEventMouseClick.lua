--------------------------------------------------------------------------------
--  Handler.......... : onEventMouseClick
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDPlayAnimation.onEventMouseClick ( nButton )
--------------------------------------------------------------------------------
	
    local privateVariables      = this.Private ( )
    local targetObject          = table.getAt ( privateVariables, 0 )
    local onTriggerType         = table.getAt ( privateVariables, 1 )
    local onTriggerButton       = table.getAt ( privateVariables, 2 )
    local offTriggerType        = table.getAt ( privateVariables, 3 )
    local offTriggerButton      = table.getAt ( privateVariables, 4 )
    local triggerState          = table.getAt ( privateVariables, 5 )
    local triggerChangeState    = table.getAt ( privateVariables, 6 )
    
    if ( targetObject and not triggerChangeState )
    then
        if ( triggerState )
        then
            -- Test "OFF" trigger
            --
            if ( offTriggerType == "MouseClick" )
            then
                if ( nButton == offTriggerButton )
                then
                    this.processTriggerOff ( )
                end
            end
        else
            -- Test "ON" trigger
            --
            if ( onTriggerType == "MouseClick" )
            then
                if ( nButton == onTriggerButton )
                then
                    this.processTriggerOn ( )
                end
            end
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
