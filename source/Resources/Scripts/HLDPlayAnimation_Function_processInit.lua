--------------------------------------------------------------------------------
--  Function......... : processInit
--  Author........... : 
--  Description...... : 
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
function HLDPlayAnimation.processInit ( )
--------------------------------------------------------------------------------
	
    local privateVariables  = this.Private ( )
    local targetObject      = table.getAt ( privateVariables, 0 )
    if  ( targetObject )
    then
        if ( object.hasController ( targetObject, object.kControllerTypeAnimation ) )
        then
            animation.changeClip                ( targetObject, 0, this.AnimationIndex ( ) )
            animation.setPlaybackKeyFrameBegin  ( targetObject, 0, animation.getClipKeyFrameRangeMin ( targetObject, 0 ) )
            animation.setPlaybackKeyFrameEnd    ( targetObject, 0, animation.getClipKeyFrameRangeMax ( targetObject, 0 ) )
            animation.setPlaybackSpeed          ( targetObject, 0, this.Speed ( ) )
            
            if ( this.InitialValue ( ) )
            then
                animation.setPlaybackMode       ( targetObject, 0, animation.kPlaybackModeOnce )
                animation.setPlaybackCursor     ( targetObject, 0, animation.getClipKeyFrameRangeMax ( targetObject, 0 ) )
            else
                animation.setPlaybackMode       ( targetObject, 0, animation.kPlaybackModeOnceReversed )
                animation.setPlaybackCursor     ( targetObject, 0, 0 )
            end
        else
            log.error ( "HLDPlayAnimation : You must put an AnimBank on object ", targetObject )
        end
    end
	
--------------------------------------------------------------------------------
end
--------------------------------------------------------------------------------
