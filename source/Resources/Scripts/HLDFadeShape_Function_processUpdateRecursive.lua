--------------------------------------------------------------------------------
--  Function......... : processUpdateRecursive
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDFadeShape.processUpdateRecursive ( hObject, nValue )
--------------------------------------------------------------------------------
	
    if ( object.isKindOf ( hObject, object.kTypeShape ) )
    then
        shape.setMeshOpacity ( hObject, nValue )
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
