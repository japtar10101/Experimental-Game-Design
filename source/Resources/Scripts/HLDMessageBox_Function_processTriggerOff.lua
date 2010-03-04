--------------------------------------------------------------------------------
--  Function......... : processTriggerOff
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDMessageBox.processTriggerOff ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local hudInstanceID     = table.getAt ( privateVariables, 0 )
    if  ( hudInstanceID )
    then
        hud.callAction ( application.getCurrentUser ( ), hudInstanceID..".Hide" )
        this.postEvent ( 1, "onDestroyHUD", hudInstanceID )
        
        table.setAt ( privateVariables, 0,  nil   )
    
        table.setAt ( privateVariables, 5,  false ) -- set trigger state to "off"
        table.setAt ( privateVariables, 6,  true  ) -- set trigger change state to "yes"        
    end
    
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
