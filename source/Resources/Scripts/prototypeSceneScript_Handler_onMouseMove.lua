--------------------------------------------------------------------------------
--  Handler.......... : onMouseMove
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function prototypeSceneScript.onMouseMove ( nPointX, nPointY, nDeltaX, nDeltaY, nRayPntX, nRayPntY, nRayPntZ, nRayDirX, nRayDirY, nRayDirZ )
--------------------------------------------------------------------------------
	local hObj = this.getObject ( )
    object.sendEvent ( hObj, "CharAI", "onMouseMove", nPointX, nPointY,
        nDeltaX, nDeltaY, nRayPntX, nRayPntY, nRayPntZ, nRayDirX,
        nRayDirY, nRayDirZ )

--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
