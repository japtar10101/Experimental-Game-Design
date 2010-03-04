--------------------------------------------------------------------------------
--  Handler.......... : onEventMouseLeave
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDFadeLight.onEventMouseLeave (  )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    local onTriggerType     = table.getAt ( privateVariables, 1 )
    local offTriggerType    = table.getAt ( privateVariables, 3 )
    
    if ( targetObject )
    then
        -- Test "ON" trigger
        --
        if ( onTriggerType == "MouseLeave" )
        then
            this.processTriggerOn ( )
        end

        -- Test "OFF" trigger
        --
        if ( offTriggerType == "MouseLeave" )
        then
            this.processTriggerOff ( )
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
