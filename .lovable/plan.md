## Goal

On the homepage cinematic hero, the first 10–15 seconds (intro music + AJ's opening line) are the emotional hook. Today the video autoplays muted and the unmute pill just toggles audio mid-stream — visitors miss the opening. Change the behavior so unmuting seamlessly restarts the video from frame 1 with sound, and change the pill copy to invite the action.

## Scope

Single file: `src/components/VideoHero.tsx` (home hero only). Renovations hero and inline showcases are unchanged.

## Behavior changes

1. **Pill copy**
   - Muted state: `Tap for sound` (replaces current `Unmute`)
   - Unmuted state: `Mute` (unchanged)
   - Icon behavior unchanged (VolumeX / Volume2, brass accent).

2. **Tap-to-unmute = restart from beginning**
   - On click while muted: set `video.currentTime = 0`, unmute, then `play()`.
   - Briefly fade the video to opacity 0 during the seek and fade back in on the next `playing` event so the jump-cut is invisible (poster underneath covers the gap — same fade pattern already used for initial load).
   - Sync `audioPreference` as today so downstream inline players (Walkthrough, Delivery) pick up the unmuted preference.

3. **Re-mute behavior**
   - Tapping again to mute: just mutes in place (no restart). Matches user expectation — the restart is a one-time "give me the intro" gesture, not a loop.

4. **Subsequent loops**
   - The video already has `loop`. After the first unmute-restart, it continues to loop with sound. No change there.

## Accessibility & edge cases

- `aria-label` updates in sync: "Play video with sound from the beginning" when muted, "Mute video" when unmuted.
- Reduced-motion users: pill is already hidden in that path, no change.
- If `play()` rejects (rare autoplay-with-sound block on some browsers), fall back to leaving the video where it is and just unmuting — no broken state.
- Mobile: same behavior; the seek-to-0 + play gesture is user-initiated so audio is allowed.

## What does NOT change

- Video sources, poster, HLS/MP4 fallback, layout, vignette, scroll indicator, "Palm Beach, Florida" stamp, animations.
- `useAudioPreference` contract — still broadcasts the unmuted state to inline players.
- Renovations hero and all other autoplay videos site-wide.

## Technical notes

- Implementation lives entirely in the `toggleMute` handler and the pill's label/aria props.
- The brief fade reuses the existing `ready` state pattern: set `ready = false` before seek, the existing `playing` listener flips it back to `true` and the CSS opacity transition handles the crossfade.
