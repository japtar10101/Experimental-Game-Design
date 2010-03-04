--------------------------------------------------------------------------------
--  Handler.......... : onEnterFrame
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDVisitCamera.onEnterFrame (  )
--------------------------------------------------------------------------------
	
    local o         = this.getObject ( )        
    local dynObject = this.hDynObject ( )
    local dt        = application.getLastFrameTime ( )
    
    if ( dynObject ~= nil )
    then
        -- Turn head
        --
        if      ( this.bRotateRight ( ) ) then this.nDstAngleH ( this.nDstAngleH ( ) - 45 * dt )
        elseif  ( this.bRotateLeft  ( ) ) then this.nDstAngleH ( this.nDstAngleH ( ) + 45 * dt )
        end
        
        local rh = math.interpolate ( this.nCurAngleH ( ), this.nDstAngleH ( ), 10 * dt )
        local rv = math.interpolate ( this.nCurAngleV ( ), this.nDstAngleV ( ), 10 * dt )
        local h  = math.interpolate ( this.nCurHeight ( ), this.nDstHeight ( ),  2 * dt )
        
        this.nCurAngleH ( rh )
        this.nCurAngleV ( rv )
        this.nCurHeight ( h  )
                        
        object.setRotation  ( o, 0, rh, 0, object.kGlobalSpace )
        object.rotate       ( o, rv, 0, 0, object.kLocalSpace  )
            
        -- Place the camera at the dynObject position, with a little offset.
        --
        object.matchTranslation ( o, dynObject, object.kGlobalSpace )
        object.translate        ( o, 0, h, 0, object.kGlobalSpace )

        -- Add forces if needed
        --
        local oXx, oXy, oXz = object.getXAxis ( o, object.kGlobalSpace )
        local oYx, oYy, oYz = object.getYAxis ( o, object.kGlobalSpace )
        local oZx, oZy, oZz = object.getZAxis ( o, object.kGlobalSpace )
        local  fx,  fy,  fz = 0, 0, 0
        
        if      ( this.bGoForward    ( ) ) then fx, fy, fz = math.vectorSubtract ( fx, fy, fz, oZx, oZy, oZz )
        elseif  ( this.bGoBackward   ( ) ) then fx, fy, fz = math.vectorAdd      ( fx, fy, fz, oZx, oZy, oZz ) 
        end

        if      ( this.bStrafeRight  ( ) ) then fx, fy, fz = math.vectorAdd      ( fx, fy, fz, oXx, oXy, oXz )
        elseif  ( this.bStrafeLeft   ( ) ) then fx, fy, fz = math.vectorSubtract ( fx, fy, fz, oXx, oXy, oXz ) 
        end
        
        fx, fy, fz = math.vectorNormalize   ( fx, 0, fz )
        fx, fy, fz = math.vectorScale       ( fx, 0, fz, 5000 )
        
        dynamics.addForce ( dynObject, fx, fy, fz, object.kGlobalSpace )
        
        -- Gravity
        --
        dynamics.addForce ( dynObject, 0, -2000, 0, object.kGlobalSpace )
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
