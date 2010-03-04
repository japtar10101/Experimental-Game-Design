--------------------------------------------------------------------------------
--  Function......... : processTriggerOff
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDPlayMovie.processTriggerOff ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    if  ( targetObject )
    then
        table.setAt ( privateVariables, 5,  false ) -- set trigger state to "off"
        table.setAt ( privateVariables, 6,  true  ) -- set trigger change state to "yes"
    
        shape.pauseMeshSubsetMaterialEffectMap0Movie ( targetObject, this.SubsetIndex ( ) )
    end
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
