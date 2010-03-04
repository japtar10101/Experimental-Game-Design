--------------------------------------------------------------------------------
--  Function......... : createDynObject
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDVisitCamera.createDynObject ( )
--------------------------------------------------------------------------------
	
    local s = object.getScene ( this.getObject ( ) )
    
    if ( s ~= nil )
    then
        local dynObject = scene.createRuntimeObject ( s, "HLDDummy" )
        
        if ( dynObject ~= nil )
        then
            this.hDynObject ( dynObject )
        
            object.matchTranslation ( dynObject, this.getObject ( ), object.kGlobalSpace )
            object.translate        ( dynObject, 0, this.nDstHeight ( ), 0, object.kGlobalSpace )
        
            -- Setup dynamics
            --
            if ( dynamics.createSphereBody ( dynObject, 0.25 ) )
            then
                dynamics.enableDynamics         ( dynObject, true )
                dynamics.enableCollisions       ( dynObject, true )
                dynamics.enableGravity          ( dynObject, true )
                dynamics.setLinearDampingEx     ( dynObject, 5.00, 0, 5.00 )
                dynamics.setAngularDamping      ( dynObject, 5.00 )
                dynamics.setLinearSpeedLimit    ( dynObject, 2 )
                dynamics.setMass                ( dynObject, 80 )
            end
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
