--------------------------------------------------------------------------------
--  Handler.......... : onEventMouseClick
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDSwitchCamera.onEventMouseClick ( nButton )
--------------------------------------------------------------------------------
	
    local privateVariables      = this.Private ( )
    local targetObject          = table.getAt ( privateVariables, 0 )
    local triggerType           = table.getAt ( privateVariables, 1 )
    local triggerButton         = table.getAt ( privateVariables, 2 )
    
    if ( targetObject )
    then
        -- Test trigger
        --
        if ( triggerType == "MouseClick" )
        then
            if ( nButton == triggerButton )
            then
                this.processTrigger ( )
            end
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
