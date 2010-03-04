--------------------------------------------------------------------------------
--  Function......... : processInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDFadeShape.processInit ( )
--------------------------------------------------------------------------------
	
    local privateVariables      = this.Private ( )
    local targetObject          = table.getAt ( privateVariables, 0 )
    local interpolationFactor   = table.getAt ( privateVariables, 7 )
    if  ( targetObject )
    then
        this.processUpdateRecursive ( targetObject, interpolationFactor )
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
