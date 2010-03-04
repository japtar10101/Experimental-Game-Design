--------------------------------------------------------------------------------
--  Handler.......... : onInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMessageBox.onInit (  )
--------------------------------------------------------------------------------
	
    -- Initialize private variables
    --
    local privateVariables = this.Private ( )
    
    table.empty ( privateVariables )
    table.add   ( privateVariables, nil                     ) --  0 : HUD instance name
    table.add   ( privateVariables, nil                     ) --  1 : on trigger type
    table.add   ( privateVariables, nil                     ) --  2 : on trigger param
    table.add   ( privateVariables, nil                     ) --  3 : off trigger type
    table.add   ( privateVariables, nil                     ) --  4 : off trigger param
    table.add   ( privateVariables, this.InitialValue ( )   ) --  5 : trigger state
    table.add   ( privateVariables, false                   ) --  6 : trigger changed flag (used for MouseClick)

    -- Initialize object from initial value
    --
    this.processInit ( )
    
    -- Analyze triggers and register them.
    --
    this.registerTriggers ( )
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
