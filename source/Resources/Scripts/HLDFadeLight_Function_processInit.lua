--------------------------------------------------------------------------------
--  Function......... : processInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDFadeLight.processInit ( )
--------------------------------------------------------------------------------
	
    local privateVariables      = this.Private ( )
    local targetObject          = table.getAt ( privateVariables, 0 )
    local interpolationFactor   = table.getAt ( privateVariables, 7 )
    if  ( targetObject )
    then
        if ( object.isKindOf ( targetObject, object.kTypeLight ) )
        then
            -- Get initial light color values
            --
            local r, g, b = light.getColor ( targetObject )
            
            table.setAt ( privateVariables, 12, r )
            table.setAt ( privateVariables, 13, g )
            table.setAt ( privateVariables, 14, b )
        
            -- Update light color
            --
            if ( object.isKindOf ( targetObject, object.kTypeLight ) )
            then
                local r = table.getAt ( privateVariables, 12 )
                local g = table.getAt ( privateVariables, 13 )
                local b = table.getAt ( privateVariables, 14 )
                
                light.setColor ( targetObject, interpolationFactor * r, interpolationFactor * g, interpolationFactor * b )
            end
        else
            log.error ( "HLDFadeLight : target object ", targetObject, " must be a light." )
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
