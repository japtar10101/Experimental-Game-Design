--------------------------------------------------------------------------------
--  Handler.......... : onForwardEvent
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.onForwardEvent ( sObjectTag, sAIModel, sHandler, vParam0, vParam1, vParam2, vParam3 )
--------------------------------------------------------------------------------
	
	local s = application.getCurrentUserScene ( )
    if  ( s )
    then
        local o = scene.getTaggedObject ( s, sObjectTag )
        if  ( o )
        then
            object.sendEvent ( o, sAIModel, sHandler, sHandler, vParam0, vParam1, vParam2, vParam3 )
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
