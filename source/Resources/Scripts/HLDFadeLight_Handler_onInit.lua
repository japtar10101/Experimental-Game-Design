--------------------------------------------------------------------------------
--  Handler.......... : onInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDFadeLight.onInit (  )
--------------------------------------------------------------------------------
	
    -- Initialize private variables
    --
    local privateVariables = this.Private ( )
    
    table.empty ( privateVariables )
    table.add   ( privateVariables, nil                     ) --  0 : target object
    table.add   ( privateVariables, nil                     ) --  1 : on trigger type
    table.add   ( privateVariables, nil                     ) --  2 : on trigger param
    table.add   ( privateVariables, nil                     ) --  3 : off trigger type
    table.add   ( privateVariables, nil                     ) --  4 : off trigger param
    table.add   ( privateVariables, this.InitialValue ( )   ) --  5 : trigger state
    table.add   ( privateVariables, false                   ) --  6 : trigger changed flag (used for MouseClick)
    table.add   ( privateVariables, 0                       ) --  7 : interpolation factor
    table.add   ( privateVariables, 0                       ) --  8 : starting factor
    table.add   ( privateVariables, 0                       ) --  9 : destination factor
    table.add   ( privateVariables, 0                       ) -- 10 : starting value
    table.add   ( privateVariables, 0                       ) -- 11 : current value
    table.add   ( privateVariables, 0                       ) -- 12 : initial light R value
    table.add   ( privateVariables, 0                       ) -- 13 : initial light G value
    table.add   ( privateVariables, 0                       ) -- 14 : initial light B value

    -- Initialize interpolation factor
    --
    if ( this.InitialValue ( ) )
    then
        table.setAt ( privateVariables,  7, 1 )
        table.setAt ( privateVariables,  9, 1 )
        table.setAt ( privateVariables, 11, 1 )
    end

    -- Bind target object
    --
    local s = application.getCurrentUserScene ( )
    if  ( s )
    then
        local tag = this.TargetObjectTag ( )
        if (  tag == "" )
        then
            log.error ( "HLDFadeLight : You must specify a target for object ", this.getObject ( ) )
        else
            local o = scene.getTaggedObject ( s, tag )
            if  ( o )
            then
                table.setAt ( privateVariables, 0, o )
            else
                log.error ( "HLDFadeLight : Could not find object with the tag \'", tag, "\'." )
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
