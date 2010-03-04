--------------------------------------------------------------------------------
--  Function......... : findAndUseStartupCamera
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.findAndUseStartupCamera ( )
--------------------------------------------------------------------------------
	
	local s = application.getCurrentUserScene ( )
    if  ( s )
    then
        local startup = scene.getTaggedObject ( s, "HLDStartupCamera" )
        if  ( startup )
        then
            application.setCurrentUserActiveCamera ( startup )
        else
            -- 
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
