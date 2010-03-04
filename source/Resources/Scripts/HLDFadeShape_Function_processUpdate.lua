--------------------------------------------------------------------------------
--  Function......... : processUpdate
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDFadeShape.processUpdate ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    if  ( targetObject )
    then
        local curFactor = table.getAt ( privateVariables, 7 )
        local dstFactor = table.getAt ( privateVariables, 9 )
        
        if ( curFactor ~= dstFactor )
        then
            local dt    = application.getLastFrameTime ( )
            local value = 0
            
            if ( math.abs ( dstFactor - curFactor ) < 0.01 )
            then
                type      = "Linear"
                curFactor = dstFactor
                value     = dstFactor
            
            elseif  ( curFactor < dstFactor )
            then
                local t     = this.FadeTimeOn ( )
                local type  = this.FadeTypeOn ( )
                local start = table.getAt ( privateVariables, 10 )
        
                if ( t < 0.01 )
                then
                    curFactor = dstFactor
                    value     = dstFactor
                else
                    curFactor = math.min ( curFactor + dt / t, dstFactor )
                    value     = start + ( 1 - start ) * this.evaluateFunction ( type, curFactor, table.getAt ( privateVariables, 8 ), dstFactor )
                end
            else
                local t     = this.FadeTimeOff ( )
                local type  = this.FadeTypeOff ( )
                local start = table.getAt ( privateVariables, 10 )
                
                if ( t < 0.01 )
                then
                    curFactor = dstFactor
                    value     = dstFactor
                else
                    curFactor = math.max ( curFactor - dt / t, dstFactor )
                    value     = start * this.evaluateFunction ( type, 1 - curFactor, table.getAt ( privateVariables, 8 ), dstFactor )
                end
            end

            table.setAt ( privateVariables, 7,  curFactor )
            table.setAt ( privateVariables, 11, value )
            
            this.processUpdateRecursive ( targetObject, value )
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
