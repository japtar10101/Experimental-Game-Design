--------------------------------------------------------------------------------
--  Handler.......... : onEnterFrame
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDPlayMovie.onEnterFrame (  )
--------------------------------------------------------------------------------
	
    if ( this.Loop ( ) )
    then
        local privateVariables  = this.Private ( )
        local targetObject      = table.getAt ( privateVariables, 0 )
        if  ( targetObject )
        then
            if ( table.getAt ( privateVariables, 5 ) )
            then
                if ( shape.getMeshSubsetMaterialEffectMap0MoviePlaybackProgress ( targetObject, this.SubsetIndex ( ) ) >= 0.95 )
                then
                    shape.stopMeshSubsetMaterialEffectMap0Movie ( targetObject, this.SubsetIndex ( ) )
                    shape.playMeshSubsetMaterialEffectMap0Movie ( targetObject, this.SubsetIndex ( ) )
                end
            end
        end
    end
    
	-- Set trigger change state to "no"
    --
    table.setAt ( this.Private ( ), 6, false )
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
