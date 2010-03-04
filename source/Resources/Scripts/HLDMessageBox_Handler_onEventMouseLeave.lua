--------------------------------------------------------------------------------
--  Handler.......... : onEventMouseLeave
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMessageBox.onEventMouseLeave (  )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local onTriggerType     = table.getAt ( privateVariables, 1 )
    local offTriggerType    = table.getAt ( privateVariables, 3 )
    
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
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
