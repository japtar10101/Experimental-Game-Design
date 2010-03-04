--------------------------------------------------------------------------------
--  Function......... : processUpdateRecursive
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDBlinkShape.processUpdateRecursive ( hObject, nValue )
--------------------------------------------------------------------------------
	
    if ( object.isKindOf ( hObject, object.kTypeShape ) )
    then
        local subset = this.SubsetIndex ( )        
        if  ( subset < 0 )
        then
            shape.overrideMeshMaterialEmissive ( hObject, 1, 1, 1, nValue )
        else
            shape.overrideMeshSubsetMaterialEmissive ( hObject, subset, 1, 1, 1, nValue )
        end
    end
    
    if ( object.isKindOf ( hObject, object.kTypeGroup ) )
    then
        local childCount = group.getSubObjectCount ( hObject )
        if  ( childCount > 0 )
        then
            for i = 0, childCount - 1
            do
                this.processUpdateRecursive ( group.getSubObjectAt ( i ), nValue )
            end
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
