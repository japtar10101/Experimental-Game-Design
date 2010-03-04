--------------------------------------------------------------------------------
--  Function......... : processButton
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMessageBox.processButton ( action, target )
--------------------------------------------------------------------------------
	
    if  ( action ~= "None" )
    then
        if  ( target ~= "" )
        then
            local s = application.getCurrentUserScene ( )
            local t = scene.getTaggedObject ( s, target )
            if  ( t )
            then
                local iMax = object.getAIModelCount ( t )
                if  ( iMax > 0 )
                then
                    for i = 0, iMax - 1
                    do
                        local aimodel = object.getAIModelNameAt ( t, i )
                        if ( string.getSubString ( aimodel, 0, 3 ) == "HLD" )
                        then
                            if      ( action == "Switch On"  ) then object.sendEvent ( t, aimodel, "onSwitchOn"  )
                            elseif  ( action == "Switch Off" ) then object.sendEvent ( t, aimodel, "onSwitchOff" )
                            end
                        end
                    end
                end
            end
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
