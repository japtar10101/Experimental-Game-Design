--------------------------------------------------------------------------------
--  Handler.......... : onInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDSwitchScene.onInit (  )
--------------------------------------------------------------------------------
	
    -- Initialize private variables
    --
    local privateVariables = this.Private ( )
    
    table.empty ( privateVariables )
    table.add   ( privateVariables, nil                     ) -- 0 : target object (not used in this AI)
    table.add   ( privateVariables, nil                     ) -- 1 : trigger type
    table.add   ( privateVariables, nil                     ) -- 2 : trigger param

    -- Bind target object
    --
    local s = application.getCurrentUserScene ( )
    if  ( s )
    then
        local s = this.TargetScene ( )
        if (  s == "" )
        then
            log.error ( "HLDSwitchScene : You must specify a target scene for object ", this.getObject ( ) )
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
