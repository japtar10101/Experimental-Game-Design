--------------------------------------------------------------------------------
--  Function......... : processTriggerOn
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDPlaySound.processTriggerOn ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    if  ( targetObject )
    then
        table.setAt ( privateVariables, 5,  this.Loop ( ) ) -- set trigger state to "on" or "off" depending on Loop flag
        table.setAt ( privateVariables, 6,  true ) -- set trigger change state to "yes"
    	
        sound.stop  ( targetObject, this.SoundIndex ( ) )
        sound.play  ( targetObject, this.SoundIndex ( ), this.Volume ( ), this.Loop ( ), 1 )
    end
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
