--------------------------------------------------------------------------------
--  Handler.......... : onEnterFrame
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDFadeLight.onEnterFrame (  )
--------------------------------------------------------------------------------
	
    -- Update
    --
    this.processUpdate ( )
    
    -- Set trigger change state to "no"
    --
    table.setAt ( this.Private ( ), 6, false )
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
