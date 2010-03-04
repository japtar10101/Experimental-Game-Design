--------------------------------------------------------------------------------
--  Function......... : processTriggerOn
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDPlayMovie.processTriggerOn ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    if  ( targetObject )
    then
        table.setAt ( privateVariables, 5,  true ) -- set trigger state to "on"
        table.setAt ( privateVariables, 6,  true ) -- set trigger change state to "yes"
    	
        shape.playMeshSubsetMaterialEffectMap0Movie ( targetObject, this.SubsetIndex ( ) )
    end
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
