--------------------------------------------------------------------------------
--  Function......... : buildStartupSequence
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.buildStartupSequence ( )
--------------------------------------------------------------------------------
	
    -- Build startup HUD
    --
    local startupSequence = hud.newAction ( this.getUser ( ), "HLDMainStartupSequence" )
    
    for i = 0, 9
    do
        local text = application.getCurrentUserEnvironmentVariable ( "HLDStartupText"..i )
        local logo = application.getCurrentUserEnvironmentVariable ( "HLDStartupLogo"..i )
        
        if ( text )
        then
            local h = hud.newComponent ( this.getUser ( ), hud.kComponentTypeLabel )
            if  ( h )
            then
                hud.setComponentPosition        ( h, 50, 50 )
                hud.setComponentSize            ( h, 90, 50 )
                hud.setComponentBackgroundColor ( h, 0, 0, 0, 255 )
                hud.setComponentBorderColor     ( h, 0, 0, 0, 0 )
                hud.setComponentForegroundColor ( h, 127, 127, 127, 255 )
                hud.setComponentVisible         ( h, true )
                hud.setComponentOpacity         ( h, 0 )
                hud.setComponentZOrder          ( h, 255 )
                hud.setLabelText                ( h, text )
                hud.setLabelTextHeight          ( h, 25 )
                hud.setLabelTextAlignment       ( h, hud.kAlignCenter, hud.kAlignCenter )
                
                hud.beginActionCommand          ( startupSequence, hud.kCommandTypeInterpolateOpacity )
                hud.pushActionCommandArgument   ( startupSequence, h )
                hud.pushActionCommandArgument   ( startupSequence, 255 )
                hud.pushActionCommandArgument   ( startupSequence, hud.kInterpolatorTypeLinear )
                hud.pushActionCommandArgument   ( startupSequence, 1000 )
                hud.endActionCommand            ( startupSequence )                
                hud.beginActionCommand          ( startupSequence, hud.kCommandTypeSleep )
                hud.pushActionCommandArgument   ( startupSequence, 2000 )
                hud.endActionCommand            ( startupSequence )                
                hud.beginActionCommand          ( startupSequence, hud.kCommandTypeInterpolateOpacity )
                hud.pushActionCommandArgument   ( startupSequence, h )
                hud.pushActionCommandArgument   ( startupSequence, 0 )
                hud.pushActionCommandArgument   ( startupSequence, hud.kInterpolatorTypeLinear )
                hud.pushActionCommandArgument   ( startupSequence, 1500 )
                hud.endActionCommand            ( startupSequence )                
                hud.beginActionCommand          ( startupSequence, hud.kCommandTypeSleep )
                hud.pushActionCommandArgument   ( startupSequence, 1000 )
                hud.endActionCommand            ( startupSequence )                
                hud.beginActionCommand          ( startupSequence, hud.kCommandTypeSetVisible )
                hud.pushActionCommandArgument   ( startupSequence, h )
                hud.pushActionCommandArgument   ( startupSequence, false )
                hud.endActionCommand            ( startupSequence )                
            end
        
        elseif ( logo )
        then
            local h = hud.newComponent ( this.getUser ( ), hud.kComponentTypeContainer )
            if  ( h )
            then
                hud.setComponentPosition        ( h, 50, 50 )
                hud.setComponentSize            ( h, 50, 50 )
                hud.setComponentAspectInvariant ( h, true )
                hud.setComponentBackgroundImage ( h, logo )
                hud.setComponentBackgroundColor ( h, 127, 127, 127, 255 )
                hud.setComponentBorderColor     ( h, 0, 0, 0, 0 )
                hud.setComponentVisible         ( h, true )
                hud.setComponentOpacity         ( h, 0 )
                hud.setComponentZOrder          ( h, 255 )
                
                hud.beginActionCommand          ( startupSequence, hud.kCommandTypeInterpolateOpacity )
                hud.pushActionCommandArgument   ( startupSequence, h )
                hud.pushActionCommandArgument   ( startupSequence, 255 )
                hud.pushActionCommandArgument   ( startupSequence, hud.kInterpolatorTypeLinear )
                hud.pushActionCommandArgument   ( startupSequence, 1000 )
                hud.endActionCommand            ( startupSequence )                
                hud.beginActionCommand          ( startupSequence, hud.kCommandTypeSleep )
                hud.pushActionCommandArgument   ( startupSequence, 2000 )
                hud.endActionCommand            ( startupSequence )                
                hud.beginActionCommand          ( startupSequence, hud.kCommandTypeInterpolateOpacity )
                hud.pushActionCommandArgument   ( startupSequence, h )
                hud.pushActionCommandArgument   ( startupSequence, 0 )
                hud.pushActionCommandArgument   ( startupSequence, hud.kInterpolatorTypeLinear )
                hud.pushActionCommandArgument   ( startupSequence, 1500 )
                hud.endActionCommand            ( startupSequence )                
                hud.beginActionCommand          ( startupSequence, hud.kCommandTypeSleep )
                hud.pushActionCommandArgument   ( startupSequence, 1000 )
                hud.endActionCommand            ( startupSequence )                
                hud.beginActionCommand          ( startupSequence, hud.kCommandTypeSetBackgroundImage )
                hud.pushActionCommandArgument   ( startupSequence, h )
                hud.pushActionCommandArgument   ( startupSequence, "" )
                hud.endActionCommand            ( startupSequence )                
                hud.beginActionCommand          ( startupSequence, hud.kCommandTypeSetVisible )
                hud.pushActionCommandArgument   ( startupSequence, h )
                hud.pushActionCommandArgument   ( startupSequence, false )
                hud.endActionCommand            ( startupSequence )                
            end
        else
            break
        end
    end
    
    hud.beginActionCommand                  ( startupSequence, hud.kCommandTypeSendEventToUser )
    hud.pushActionCommandRuntimeArgument    ( startupSequence, hud.kRuntimeValueCurrentUser )
    hud.pushActionCommandArgument           ( startupSequence, "HLDMain" )
    hud.pushActionCommandArgument           ( startupSequence, "onSetNextScene" )
    hud.pushActionCommandArgument           ( startupSequence, this.sStartupScene ( ) )
    hud.endActionCommand                    ( startupSequence )
    
    hud.callAction ( this.getUser ( ), "HLDMainStartupSequence" )
    	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
