--------------------------------------------------------------------------------
--  Handler.......... : onEventMouseEnter
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDFadeShape.onEventMouseEnter (  )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    local onTriggerType     = table.getAt ( privateVariables, 1 )
    local offTriggerType    = table.getAt ( privateVariables, 3 )
    
    if ( targetObject )
    then
        -- Test "ON" trigger
        --
        if ( onTriggerType == "MouseEnter" )
        then
            this.processTriggerOn ( )
        end

        -- Test "OFF" trigger
        --
        if ( offTriggerType == "MouseEnter" )
        then
            this.processTriggerOff ( )
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
