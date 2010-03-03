--------------------------------------------------------------------------------
--  Handler.......... : onKeyboardKeyDown
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function prototypeSceneScript.onKeyboardKeyDown ( kKeyCode )
--------------------------------------------------------------------------------
	-- At Esc, quit this game --
    local hObj = this.getObject ( )
    if ( kKeyCode == input.kKeyEscape ) then
        local b = not this.bGameMode ( )
        object.sendEvent ( hObj, "CharAI", "onCaptureInput", b )
        this.bGameMode ( b )
    else
        object.sendEvent ( hObj, "CharAI", "onKeyboardKeyDown", kKeyCode )
    end
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
