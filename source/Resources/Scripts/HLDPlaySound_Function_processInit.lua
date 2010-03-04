--------------------------------------------------------------------------------
--  Function......... : processInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDPlaySound.processInit ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    if  ( targetObject )
    then
        if ( object.hasController ( targetObject, object.kControllerTypeSound ) )
        then
            if ( this.InitialValue ( ) )
            then
                sound.stop  ( targetObject, this.SoundIndex ( ) )
                sound.play  ( targetObject, this.SoundIndex ( ), this.Volume ( ), this.Loop ( ), 1 )
            end
        else
            log.error ( "HLDPlaySound : You must put a SoundBank on object ", targetObject )
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
