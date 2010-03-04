--------------------------------------------------------------------------------
--  Handler.......... : onInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDSwitchCamera.onInit (  )
--------------------------------------------------------------------------------
	
    -- Initialize private variables
    --
    local privateVariables = this.Private ( )
    
    table.empty ( privateVariables )
    table.add   ( privateVariables, nil                     ) -- 0 : target object
    table.add   ( privateVariables, nil                     ) -- 1 : trigger type
    table.add   ( privateVariables, nil                     ) -- 2 : trigger param

    -- Bind target object
    --
    local s = application.getCurrentUserScene ( )
    if  ( s )
    then
        local tag = this.TargetObjectTag ( )
        if (  tag == "" )
        then
            log.error ( "HLDSwitchCamera : You must specify a target for object ", this.getObject ( ) )
        else
            local o = scene.getTaggedObject ( s, tag )
            if  ( o )
            then
                table.setAt ( privateVariables, 0, o )
            else
                log.error ( "HLDSwitchCamera : Could not find object with the tag \'", tag, "\'." )
            end
        end
    end
    
    -- Initialize object from initial value
    --
    this.processInit ( )
    
    -- Analyze triggers and register them.
    --
    this.registerTriggers ( )
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
