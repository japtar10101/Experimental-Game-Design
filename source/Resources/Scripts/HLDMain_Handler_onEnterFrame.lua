--------------------------------------------------------------------------------
--  Handler.......... : onEnterFrame
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.onEnterFrame (  )
--------------------------------------------------------------------------------
	
    if ( not this.bSwitchingScene ( ) )
    then
        local underCursorObject     = this.hUnderCursorObject     ( )
        local lastUnderCursorObject = this.hLastUnderCursorObject ( )
        
        if ( underCursorObject )
        then
            if ( not lastUnderCursorObject )
            then
                -- Send MouseEnter event to underCursorObject
                --
                this.sendMouseEnterEventToObject ( underCursorObject )
            
            elseif ( not object.isEqualTo ( underCursorObject, lastUnderCursorObject ) )
            then
                -- Send MouseLeave event to lastUnderCursorObject
                --
                this.sendMouseLeaveEventToObject ( lastUnderCursorObject )
    
                -- Send MouseEnter event to underCursorObject
                --
                this.sendMouseEnterEventToObject ( underCursorObject )
            end
        
        elseif ( lastUnderCursorObject )
        then
            -- Send MouseLeave event to lastUnderCursorObject
            --
            this.sendMouseLeaveEventToObject ( lastUnderCursorObject )
        end
        
        this.hLastUnderCursorObject ( underCursorObject )
        
        -- Do we need to switch to a new scene ?
        --
        if ( this.sNextScene ( ) ~= "" )
        then
            this.switchScene ( )
        end
    end
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
