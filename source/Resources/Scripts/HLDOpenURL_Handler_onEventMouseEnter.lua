--------------------------------------------------------------------------------
--  Handler.......... : onEventMouseEnter
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDOpenURL.onEventMouseEnter (  )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local triggerType       = table.getAt ( privateVariables, 1 )
    
    -- Test trigger
    --
    if ( triggerType == "MouseEnter" )
    then
        this.processTrigger ( )
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
