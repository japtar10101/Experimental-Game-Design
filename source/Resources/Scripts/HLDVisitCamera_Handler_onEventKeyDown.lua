--------------------------------------------------------------------------------
--  Handler.......... : onEventKeyDown
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDVisitCamera.onEventKeyDown ( nKey )
--------------------------------------------------------------------------------
	
	if      ( nKey == input.kKeyUp    ) then this.bGoForward   ( true )
    elseif  ( nKey == input.kKeyDown  ) then this.bGoBackward  ( true )
    elseif  ( nKey == input.kKeyRight ) then this.bRotateRight ( true )
    elseif  ( nKey == input.kKeyLeft  ) then this.bRotateLeft  ( true )
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
