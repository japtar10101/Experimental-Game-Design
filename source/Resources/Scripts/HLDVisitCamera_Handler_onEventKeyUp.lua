--------------------------------------------------------------------------------
--  Handler.......... : onEventKeyUp
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDVisitCamera.onEventKeyUp ( nKey )
--------------------------------------------------------------------------------
	
	if      ( nKey == input.kKeyUp    ) then this.bGoForward   ( false )
    elseif  ( nKey == input.kKeyDown  ) then this.bGoBackward  ( false )
    elseif  ( nKey == input.kKeyRight ) then this.bRotateRight ( false )
    elseif  ( nKey == input.kKeyLeft  ) then this.bRotateLeft  ( false )
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
