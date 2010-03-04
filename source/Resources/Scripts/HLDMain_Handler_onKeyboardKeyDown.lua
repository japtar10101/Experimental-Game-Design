--------------------------------------------------------------------------------
--  Handler.......... : onKeyboardKeyDown
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.onKeyboardKeyDown ( kKeyCode )
--------------------------------------------------------------------------------
	
    local t = this.tKeyDownEventTargetObjects ( )
    
    if ( not table.isEmpty ( t ) )
    then
        local iObjMax = table.getSize ( t )
        
        for iObj = 1, iObjMax, 2
        do
            local hObj = table.getAt ( t, iObj - 1 )
            if  ( hObj 
            and   object.isActive ( hObj ) )
            then
                object.sendEvent ( hObj, table.getAt ( t, iObj ), "onEventKeyDown", kKeyCode )
            end
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
