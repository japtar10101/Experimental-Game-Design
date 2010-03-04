--------------------------------------------------------------------------------
--  Handler.......... : onKeyboardKeyUp
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.onKeyboardKeyUp ( kKeyCode )
--------------------------------------------------------------------------------
	
    local t = this.tKeyUpEventTargetObjects ( )
    
    if ( not table.isEmpty ( t ) )
    then
        local iObjMax = table.getSize ( t )
        
        for iObj = 1, iObjMax, 2
        do
            local hObj = table.getAt ( t, iObj - 1 )
            if  ( hObj 
            and   object.isActive ( hObj ) )
            then
                object.sendEvent ( hObj, table.getAt ( t, iObj ), "onEventKeyUp", kKeyCode )
            end
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
