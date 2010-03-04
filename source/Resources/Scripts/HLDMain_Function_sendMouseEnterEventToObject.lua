--------------------------------------------------------------------------------
--  Function......... : sendMouseEnterEventToObject
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.sendMouseEnterEventToObject ( hObject )
--------------------------------------------------------------------------------
	
    local t = this.tMouseEnterEventTargetObjects ( )
    
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
                object.sendEvent ( hObj, table.getAt ( t, iObj ), "onEventMouseEnter" )
            end
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
