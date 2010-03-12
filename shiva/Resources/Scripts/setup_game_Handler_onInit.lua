--------------------------------------------------------------------------------
--  Handler.......... : onInit
--  Author........... : TAro Omiya
--  Description...... : Sets up the default scene
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function setup_game.onInit (  )
--------------------------------------------------------------------------------
	-- Get to the first default scene
    application.setCurrentUserScene( "city_scape" )
    
    -- Set the camera's position
    local mainCamera = application.getCurrentUserActiveCamera()
    object.setTranslation ( mainCamera, 0, 0, 0, object.kGlobalSpace )
    object.lookAt ( mainCamera, 0, 0, -10, object.kGlobalSpace, 1 )
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
