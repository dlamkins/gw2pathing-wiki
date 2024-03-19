---
id: pathing-settings
title: Pathing Settings
---

## Marker Options

| Option | Control Type | Description |
|----------------|------|------------------------|
| Show Markers in World | Toggle | Allows Markers and Trails to show dynamically over the game screen, rather than just the map/minimap |
| Max Opacity Override | Slider | This acts as an upper bound for marker and trail opacity. If an object has a lower _alpha_ value than this slider, it will be unaffected. |
| Max View Distance | Slider | This acts as an upper bound for marker and trail view distance. If an object has _fadenear and fadefar_ values defined lower than this slider, it will be unaffected. |
| Max Trail Animation Speed | Slider | This acts as an upper bound for the speed at which trails will animate. If a trail has an _animspeed_ value defined lower than this slider, it will be unaffected. |
| Marker Scale | Slider | This acts as a size _multiplier_ for all markers from their base defined size. |
| Fade Trails Around Character | Toggle | This creates a "bubble" around your character that makes it easier to see them |
| Fade Markers and Trails While in Combat | Toggle | This toggles the module's function to reduce opacity of all trails and markers while in combat, to improve visibility. |
| Fade Markers Between Character and Camera | Toggle | This fades markers that would be "in front" of your character so that you can still see them. |
| Allow Markers to Automatically Hide | Toggle | This toggles the ability of markers to disappear when interacted with or when their respective _achievement_ or _achievementbit_ values indicate that you've completed the relevant task, as reported by the GW2 API. |
| Allow Markers to Set Clipboard | Dropdown Menu | This modifies the ability of markers to copy content to your clipboard. This is most commonly used to provide you the next waypoint to jump to. It can be automatic when in range (if defined), on interact with the marker (default F), or not allowed at all. |
| Allow Markers to Show Info Text on Screen | Toggle | This toggles the ability of markers to display information on screen in a "window" of sorts, commonly used to display more complex ideas, ex: the most efficient way to complete hearts. |
| Allow Markers to Show Interact Gear On-Screen | Toggle | This toggles the function of the module to display an orange gear icon when you get in range of a marker, that displays some information on how it behaves by hovering. |
| Allow Markers to Animate | Toggle | This toggles the ability of markers to animate, such as bouncing or moving out of the way, if defined in the pack. |
| Enable Smart Categories | Toggle | This toggles the module's function of hiding categories that have no markers on your current map. |
| Indicate when categories are hidden | Toggle | This toggles the module's function of _announcing_ that there are categories hidden. |

## Map Options

| Option | Control Type | Description |
|----------------|------|------------------------|
| Show Markers on Maps | Toggle | Toggles whether markers and trails will show on both the fullscreen map and minimap. |
| Show Markers on Fullscreen Map | Dropdown Menu | Default is "as prescribed by the marker pack". |
| Show Trails on Fullscreen Map | Dropdown Menu | Default is "as prescribed by the marker pack". |
| Opacity on Fullscreen Map | Slider | Changes how visible the markers and trails are on the fullscreen map. Default is 100% solid. |
| Show Markers on the Minimap | Dropdown Menu | Default is "as prescribed by the marker pack". |
| Show Trails on the Minimap | Dropdown Menu | Default is "as prescribed by the marker pack". |
| Opacity on the Minimap | Slider | Changes how visible the markers and trails are on the minimap. Default is 100% solid. |
| Show Above/Below Indicators | Toggle | Toggle whether up or down arrows appear next to markers on the minimap, like for resource nodes' default behavior on the minimap. |
| Fade Trail Segments Which Are High Above or Below | Toggle | Helps declutter maps by hiding sections of trails that are not near your current height. Most noticeable on maps with lots of verticality like Verdant Brink. |
| Trail Width on Maps | Slider | Adjusts how wide the line that displays on maps is. Can be thought of as pencil vs paintbrush, from a single pixel to ~1mm. |

## Key Bindings

| Option | Default Keybind | Description |
|--------|------------------|------------------------|
| Toggle Markers | Alt+Shift+\ | Turn off markers and trails everywhere. This is equivalent to unchecking the "All Markers" toggle in the icon menu or using both of the other keybinds. |
| Toggle Markers in World | Alt+Shift+[ | Turns off markers and trails within the world, improving visibility. |
| Toggle Markers on Map | Alt+Shift+] | Turns off markers and trails overlaid on the minimap and fullscreen map only. |