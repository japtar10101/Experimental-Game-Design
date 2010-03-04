--------------------------------------------------------------------------------
--  Function......... : processTriggerOff
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDFadeLight.processTriggerOff ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local currentValue      = table.getAt ( privateVariables, 11 )

    table.setAt ( privateVariables, 5,  false ) -- set trigger state to "off"
    table.setAt ( privateVariables, 6,  true  ) -- set trigger change state to "yes"
    table.setAt ( privateVariables, 7,  1 )
    table.setAt ( privateVariables, 8,  1 )
    table.setAt ( privateVariables, 9,  0 )
    table.setAt ( privateVariables, 10, currentValue )

--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
