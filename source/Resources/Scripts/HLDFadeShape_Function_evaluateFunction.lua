--------------------------------------------------------------------------------
--  Function......... : evaluateFunction
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDFadeShape.evaluateFunction ( sType, nFactor, nSrc, nDst )
--------------------------------------------------------------------------------
	
    -- Interpolation
    --
    local result
    
    if      ( sType == "Linear"         ) then result  = nSrc + ( nDst - nSrc ) * nFactor
    elseif  ( sType == "EaseOutExpo"    ) then result  = nSrc + ( nDst - nSrc ) * ( 1 - math.pow ( 2, -10 *   nFactor       ) )
    elseif  ( sType == "EaseInExpo"     ) then result  = nSrc + ( nDst - nSrc ) * (     math.pow ( 2,  10 * ( nFactor - 1 ) ) )
    else                                       result  = 0
    end

    -- log.message ( string.format ( "f:%.2f : %.2f < %.2f < %.2f", nFactor, nSrc, result, nDst ) )

    return result
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
