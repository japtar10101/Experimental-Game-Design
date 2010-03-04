--------------------------------------------------------------------------------
--  Function......... : sendMouseClickEventToObject
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.sendMouseClickEventToObject ( hObject, nButton )
--------------------------------------------------------------------------------
	
    local t = this.tMouseClickEventTargetObjects ( )
    
    if ( not table.isEmpty ( t ) )
    then
        local iObjMax = table.getSize ( t )
        
        for iObj = 1, iObjMax, 2
        do
            local hObj = table.getAt ( t, iObj - 1 )
            if  ( hObj 
            and   object.isEqualTo ( hObj, hObject )
            and   object.isActive  ( hObj ) )
            then
                object.sendEvent ( hObj, table.getAt ( t, iObj ), "onEventMouseClick", nButton )
            end
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
