--------------------------------------------------------------------------------
--  Handler.......... : onInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDOpenURL.onInit (  )
--------------------------------------------------------------------------------
	
    -- Initialize private variables
    --
    local privateVariables = this.Private ( )
    
    table.empty ( privateVariables )
    table.add   ( privateVariables, nil                     ) -- 0 : target object (not used in this AI)
    table.add   ( privateVariables, nil                     ) -- 1 : trigger type
    table.add   ( privateVariables, nil                     ) -- 2 : trigger param

    -- Initialize object from initial value
    --
    this.processInit ( )
    
    -- Analyze triggers and register them.
    --
    this.registerTriggers ( )
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
