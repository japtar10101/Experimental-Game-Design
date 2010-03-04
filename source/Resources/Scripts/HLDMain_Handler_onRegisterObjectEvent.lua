--------------------------------------------------------------------------------
--  Handler.......... : onRegisterObjectEvent
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMain.onRegisterObjectEvent ( hObject, sAIModel, sEvent )
--------------------------------------------------------------------------------

    local bOK = false
    
	if ( sEvent == "KeyDown" ) 
    then 
        table.add   ( this.tKeyDownEventTargetObjects ( ), hObject  ) 
        table.add   ( this.tKeyDownEventTargetObjects ( ), sAIModel )
        bOK         = true

	elseif ( sEvent == "KeyUp" ) 
    then 
        table.add   ( this.tKeyUpEventTargetObjects ( ), hObject  ) 
        table.add   ( this.tKeyUpEventTargetObjects ( ), sAIModel )
        bOK         = true

	elseif ( sEvent == "MouseEnter" ) 
    then 
        table.add   ( this.tMouseEnterEventTargetObjects ( ), hObject  ) 
        table.add   ( this.tMouseEnterEventTargetObjects ( ), sAIModel )
        bOK         = true

	elseif ( sEvent == "MouseLeave" ) 
    then 
        table.add   ( this.tMouseLeaveEventTargetObjects ( ), hObject  ) 
        table.add   ( this.tMouseLeaveEventTargetObjects ( ), sAIModel )
        bOK         = true

	elseif ( sEvent == "MouseClick" ) 
    then 
        table.add   ( this.tMouseClickEventTargetObjects ( ), hObject  ) 
        table.add   ( this.tMouseClickEventTargetObjects ( ), sAIModel )
        bOK         = true
    end


    if ( bOK )
    then
        log.message ( "HLD : Registered event ", sEvent, " for object ", hObject, " with AIModel ", sAIModel )
    else
        log.warning ( "HLD : Faild registering event ", sEvent, " for object ", hObject, " with AIModel ", sAIModel )
	end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
