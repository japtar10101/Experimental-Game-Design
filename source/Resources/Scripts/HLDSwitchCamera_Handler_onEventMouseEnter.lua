--------------------------------------------------------------------------------
--  Handler.......... : onEventMouseEnter
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDSwitchCamera.onEventMouseEnter (  )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    local triggerType       = table.getAt ( privateVariables, 1 )
    
    if ( targetObject )
    then
        -- Test trigger
        --
        if ( triggerType == "MouseEnter" )
        then
            this.processTrigger ( )
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
