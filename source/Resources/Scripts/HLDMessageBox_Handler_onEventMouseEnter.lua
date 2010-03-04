--------------------------------------------------------------------------------
--  Handler.......... : onEventMouseEnter
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMessageBox.onEventMouseEnter (  )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local onTriggerType     = table.getAt ( privateVariables, 1 )
    local offTriggerType    = table.getAt ( privateVariables, 3 )
    
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
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
