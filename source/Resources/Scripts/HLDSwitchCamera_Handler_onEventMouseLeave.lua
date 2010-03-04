--------------------------------------------------------------------------------
--  Handler.......... : onEventMouseLeave
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDSwitchCamera.onEventMouseLeave (  )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    local triggerType       = table.getAt ( privateVariables, 1 )
    
    if ( targetObject )
    then
        -- Test trigger
        --
        if ( triggerType == "MouseLeave" )
        then
            this.processTrigger ( )
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
