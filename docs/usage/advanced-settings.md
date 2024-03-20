---
id: advanced-settings
title: Advanced Settings
---

:::info
Advanced settings are found within a yaml file located at:<br />
`Documents\Guild Wars 2\addons\blishhud\markers\data\user\advanced.yaml`

These settings are not available within the UI and require a restart of the Pathing module to apply.
:::

### marker-load-paths

A set of directory paths to also check for marker packs to load.  For example, while developing a marker pack in TacO, you can include TacO's marker folder so that Blish HUD can read the pack at the same time.

```yaml
marker-load-paths:
  - c:/taco/pois
  - c:/anotherlocation/markers
```

### optimize-marker-packs

If marker packs should be automatically optimized when they are downloaded.  Since all packs are now optimized prior to being downloaded, this setting won't change anything.

### copy-attribute-recharge-ms

The debounce time for the copy attribute to auto trigger in milliseconds.  By default this is configured to prevent a copy attribute for triggering more than once in 8 seconds.

### interact-gear-x-offset & interact-gear-y-offset

The X and Y offset (% of screen width) of the interact icon.

### interact-gear-animation

If the interact icon should spin or not.  The icon spins to get your attention, but for those that do not want to see this animation, it can be disabled by setting this advanced setting to false.

### info-window-x-offset-pixels & info-window-y-offset-pixels

The X and Y offset of the info window in pixels.

### map-trigger-hide-from-camera

If the early hide feature based on camera movement should be used when the map closes.  When opening and closing your map, the game animates the camera.  We track this animation in order to determine when the map is closing so that we can automatically hide the map elements.  If disabled, fullscreen map elements will persist on screen longer than the map is actually visible as the game doesn't tell us the map is closed until the animation completes.

### map-trail-douglas-peucker-error

The Douglas Peucker error used by the trails shown on the minimap.

### category-name-truncate-width

The width in pixels that category names will be truncated to if 'Truncate Long Category Names' is enabled.