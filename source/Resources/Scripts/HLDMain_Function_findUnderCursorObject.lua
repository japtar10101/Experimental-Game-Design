--------------------------------------------------------------------------------
--  Function......... : findUnderCursorObject
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.findUnderCursorObject ( nRayPntX, nRayPntY, nRayPntZ, nRayDirX, nRayDirY, nRayDirZ )
--------------------------------------------------------------------------------
	
    if ( hud.getUnderCursorComponent ( this.getUser ( ) ) )
    then
        this.hUnderCursorObject ( nil )
    else
        local s = application.getCurrentUserScene ( )
        if  ( s )
        then
            local o = scene.getFirstHitSensor ( s, nRayPntX, nRayPntY, nRayPntZ, nRayDirX, nRayDirY, nRayDirZ, 500 )
            
            this.hUnderCursorObject ( o )
        end
    end
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
