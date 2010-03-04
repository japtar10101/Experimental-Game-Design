--------------------------------------------------------------------------------
--  Function......... : processTriggerOn
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDFadeLight.processTriggerOn ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local currentValue      = table.getAt ( privateVariables, 11 )
    
    table.setAt ( privateVariables, 5,  true ) -- set trigger state to "on"
    table.setAt ( privateVariables, 6,  true ) -- set trigger change state to "yes"
    table.setAt ( privateVariables, 7,  0 )
    table.setAt ( privateVariables, 8,  0 )
    table.setAt ( privateVariables, 9,  1 )
    table.setAt ( privateVariables, 10, currentValue )
    	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
