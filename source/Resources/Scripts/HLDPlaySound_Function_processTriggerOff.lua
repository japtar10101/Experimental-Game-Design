--------------------------------------------------------------------------------
--  Function......... : processTriggerOff
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDPlaySound.processTriggerOff ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    if  ( targetObject )
    then
        table.setAt ( privateVariables, 5,  false ) -- set trigger state to "off"
        table.setAt ( privateVariables, 6,  true  ) -- set trigger change state to "yes"
    
        sound.stop  ( targetObject, this.SoundIndex ( ) )
    end
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
