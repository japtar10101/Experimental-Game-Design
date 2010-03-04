--------------------------------------------------------------------------------
--  Function......... : processTriggerOn
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMessageBox.processTriggerOn ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )

    local uniqueID = string.replace ( "HLDMessageBox_"..application.getTotalFrameTime ( )..math.random ( 0, 100 ), ".", "" )
    
    if ( hud.newTemplateInstance ( application.getCurrentUser ( ), "HLDMessageBox", uniqueID ) )
    then
        -- Register HUD
        --
        user.sendEvent ( application.getCurrentUser ( ), "HLDMain", "onRegisterHUD", uniqueID )
    
        -- Set text
        --
        local hText = hud.getComponent ( application.getCurrentUser ( ), uniqueID..".Text" )
        if  ( hText )
        then
            hud.setLabelText ( hText, string.replace ( this.Text ( ), "\\n", "\n" ) )
        end
        
        -- Show/hide buttons
        --
        local buttons = this.Buttons ( )
        if  ( buttons == "Close" ) 
        then 
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonClose"   ), true )
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonYes"     ), false )
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonNo"      ), false )
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonCancel"  ), false )

        elseif ( buttons == "Yes, No" ) 
        then 
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonClose"   ), false )
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonYes"     ), true )
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonNo"      ), true )
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonCancel"  ), false )

        elseif ( buttons == "Yes, No, Cancel" ) 
        then 
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonClose"   ), false )
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonYes"     ), true )
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonNo"      ), true )
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonCancel"  ), true )
        else
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonClose"   ), false )
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonYes"     ), false )
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonNo"      ), false )
            hud.setComponentVisible ( hud.getComponent ( application.getCurrentUser ( ), uniqueID..".ButtonCancel"  ), false )
        end
        
        -- Configure buttons actions
        --
        local hOnButtonClose = hud.getAction ( application.getCurrentUser ( ), uniqueID..".OnButtonClose" )
        if  ( hOnButtonClose )
        then
            hud.beginActionCommand                  ( hOnButtonClose, hud.kCommandTypeSendEventToUser )
            hud.pushActionCommandRuntimeArgument    ( hOnButtonClose, hud.kRuntimeValueCurrentUser )
            hud.pushActionCommandArgument           ( hOnButtonClose, "HLDMain" )
            hud.pushActionCommandArgument           ( hOnButtonClose, "onForwardEvent" )
            hud.pushActionCommandArgument           ( hOnButtonClose, scene.getObjectTag ( application.getCurrentUserScene ( ), this.getObject ( ) ) )
            hud.pushActionCommandArgument           ( hOnButtonClose, "HLDMessageBox" )
            hud.pushActionCommandArgument           ( hOnButtonClose, "onHUDButtonClose" )
            hud.endActionCommand                    ( hOnButtonClose )
        end

        local hOnButtonYes = hud.getAction ( application.getCurrentUser ( ), uniqueID..".OnButtonYes" )
        if  ( hOnButtonYes )
        then
            hud.beginActionCommand                  ( hOnButtonYes, hud.kCommandTypeSendEventToUser )
            hud.pushActionCommandRuntimeArgument    ( hOnButtonYes, hud.kRuntimeValueCurrentUser )
            hud.pushActionCommandArgument           ( hOnButtonYes, "HLDMain" )
            hud.pushActionCommandArgument           ( hOnButtonYes, "onForwardEvent" )
            hud.pushActionCommandArgument           ( hOnButtonYes, scene.getObjectTag ( application.getCurrentUserScene ( ), this.getObject ( ) ) )
            hud.pushActionCommandArgument           ( hOnButtonYes, "HLDMessageBox" )
            hud.pushActionCommandArgument           ( hOnButtonYes, "onHUDButtonYes" )
            hud.endActionCommand                    ( hOnButtonYes )
        end
    
        local hOnButtonNo = hud.getAction ( application.getCurrentUser ( ), uniqueID..".OnButtonNo" )
        if  ( hOnButtonNo )
        then
            hud.beginActionCommand                  ( hOnButtonNo, hud.kCommandTypeSendEventToUser )
            hud.pushActionCommandRuntimeArgument    ( hOnButtonNo, hud.kRuntimeValueCurrentUser )
            hud.pushActionCommandArgument           ( hOnButtonNo, "HLDMain" )
            hud.pushActionCommandArgument           ( hOnButtonNo, "onForwardEvent" )
            hud.pushActionCommandArgument           ( hOnButtonNo, scene.getObjectTag ( application.getCurrentUserScene ( ), this.getObject ( ) ) )
            hud.pushActionCommandArgument           ( hOnButtonNo, "HLDMessageBox" )
            hud.pushActionCommandArgument           ( hOnButtonNo, "onHUDButtonNo" )
            hud.endActionCommand                    ( hOnButtonNo )
        end

        local hOnButtonCancel = hud.getAction ( application.getCurrentUser ( ), uniqueID..".OnButtonCancel" )
        if  ( hOnButtonCancel )
        then
            hud.beginActionCommand                  ( hOnButtonCancel, hud.kCommandTypeSendEventToUser )
            hud.pushActionCommandRuntimeArgument    ( hOnButtonCancel, hud.kRuntimeValueCurrentUser )
            hud.pushActionCommandArgument           ( hOnButtonCancel, "HLDMain" )
            hud.pushActionCommandArgument           ( hOnButtonCancel, "onForwardEvent" )
            hud.pushActionCommandArgument           ( hOnButtonCancel, scene.getObjectTag ( application.getCurrentUserScene ( ), this.getObject ( ) ) )
            hud.pushActionCommandArgument           ( hOnButtonCancel, "HLDMessageBox" )
            hud.pushActionCommandArgument           ( hOnButtonCancel, "onHUDButtonCancel" )
            hud.endActionCommand                    ( hOnButtonCancel )
        end
    
    
        -- ...
        --
        table.setAt ( privateVariables, 0, uniqueID )
    
        table.setAt ( privateVariables, 5,  true ) -- set trigger state to "on"
        table.setAt ( privateVariables, 6,  true ) -- set trigger change state to "yes"
    end

--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
