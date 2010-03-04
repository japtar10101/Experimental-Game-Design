--------------------------------------------------------------------------------
--  Function......... : processInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDPlayMovie.processInit ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    if  ( targetObject )
    then
        if ( this.InitialValue ( ) )
        then
            shape.playMeshSubsetMaterialEffectMap0Movie ( targetObject, this.SubsetIndex ( ) )
        else
            shape.stopMeshSubsetMaterialEffectMap0Movie ( targetObject, this.SubsetIndex ( ) )
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
