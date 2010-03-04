--------------------------------------------------------------------------------
--  Handler.......... : onMouseButtonDown
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.onMouseButtonDown ( nButton, nPointX, nPointY, nRayPntX, nRayPntY, nRayPntZ, nRayDirX, nRayDirY, nRayDirZ )
--------------------------------------------------------------------------------
	
    if ( nButton == 0 )
    then
        this.findUnderCursorObject  ( nRayPntX, nRayPntY, nRayPntZ, nRayDirX, nRayDirY, nRayDirZ )
        local underCursorObject     = this.hUnderCursorObject ( )
        if  ( underCursorObject )
        then
            this.sendMouseClickEventToObject ( underCursorObject, nButton )
        end
	end
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
