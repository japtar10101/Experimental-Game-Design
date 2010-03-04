--------------------------------------------------------------------------------
--  Handler.......... : onInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.onInit (  )
--------------------------------------------------------------------------------

    -- Setup defaults
    --
    hud.setDefaultTextShadowColor   ( this.getUser ( ), 0, 0, 0, 192 )
    hud.setDefaultFont              ( this.getUser ( ), "HLDArial" )


	-- Create fade screen
    --
    local fadeScreen = hud.newComponent ( this.getUser ( ), hud.kComponentTypeContainer, "HLDFadeScreen" )
	if  ( fadeScreen )
    then
        hud.setComponentPosition        ( fadeScreen, 50, 50 )
        hud.setComponentSize            ( fadeScreen, 100, 100 )
        hud.setComponentBackgroundColor ( fadeScreen, 0, 0, 0, 255 )
        hud.setComponentBorderColor     ( fadeScreen, 0, 0, 0, 0 )
        hud.setComponentVisible         ( fadeScreen, true )
        hud.setComponentZOrder          ( fadeScreen, 254 )
        
        local fadeInAction  = hud.newAction ( this.getUser ( ), "HLDFadeScreenIn"  )
        local fadeOutAction = hud.newAction ( this.getUser ( ), "HLDFadeScreenOut" )
        
        if ( fadeInAction )
        then
            hud.beginActionCommand          ( fadeInAction, hud.kCommandTypeInterpolateOpacity )
            hud.pushActionCommandArgument   ( fadeInAction, fadeScreen )
            hud.pushActionCommandArgument   ( fadeInAction, 0 )
            hud.pushActionCommandArgument   ( fadeInAction, hud.kInterpolatorTypeLinear )
            hud.pushActionCommandArgument   ( fadeInAction, 1000 )
            hud.endActionCommand            ( fadeInAction )
            hud.beginActionCommand          ( fadeInAction, hud.kCommandTypeSetVisible )
            hud.pushActionCommandArgument   ( fadeInAction, fadeScreen )
            hud.pushActionCommandArgument   ( fadeInAction, false )
            hud.endActionCommand            ( fadeInAction )
        end
        
        if ( fadeOutAction )
        then
            hud.beginActionCommand          ( fadeOutAction, hud.kCommandTypeSetVisible )
            hud.pushActionCommandArgument   ( fadeOutAction, fadeScreen )
            hud.pushActionCommandArgument   ( fadeOutAction, true )
            hud.endActionCommand            ( fadeOutAction )
            hud.beginActionCommand          ( fadeOutAction, hud.kCommandTypeInterpolateOpacity )
            hud.pushActionCommandArgument   ( fadeOutAction, fadeScreen )
            hud.pushActionCommandArgument   ( fadeOutAction, 255 )
            hud.pushActionCommandArgument   ( fadeOutAction, hud.kInterpolatorTypeLinear )
            hud.pushActionCommandArgument   ( fadeOutAction, 1000 )
            hud.endActionCommand            ( fadeOutAction )
        end
    end
    
    -- Is there a startup scene ?
    --
    local startupScene = application.getCurrentUserEnvironmentVariable ( "HLDStartupScene" )
    if  ( startupScene )
    then
        this.sStartupScene ( startupScene )
    else
        log.error ( "HLDMain : Please create an environment variable named \"HLDStartupScene\" containing the name of the startup scene." )
    end
	
    -- Build intro sequence
    --
    this.buildStartupSequence ( )
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
