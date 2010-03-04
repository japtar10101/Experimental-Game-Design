--------------------------------------------------------------------------------
--  Function......... : processTriggerOn
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDPlayAnimation.processTriggerOn ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    if  ( targetObject )
    then
        table.setAt ( privateVariables, 5,  true ) -- set trigger state to "on"
        table.setAt ( privateVariables, 6,  true ) -- set trigger change state to "yes"
    	
        animation.setPlaybackMode ( targetObject, 0, animation.kPlaybackModeOnce )
    end
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
