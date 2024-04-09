---
id: mapdisplaysize
title: MapDisplaySize
description: The size, in pixels, that the marker should be shown on the minimap or fullscreen map.  Assuming [ScaleOnMapWithZoom](scaleonmapwithzoom) is enabled (it is by default), the measurement will be scaled as the user zooms further out.
hide_table_of_contents: true
---
| Applies To | | Blish HUD (Pathing) | TacO | Burrito |
|-|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>✔</center> | <center>❌</center> |


:::caution 
Please be considerate of your users and avoid specifying sizes larger than what is necessary for your markers. Large sizes can obstruct other markers and in-game icons such as waypoints, vistas, etc.
:::


## Description
The size, in pixels, that the marker should be shown on the minimap or fullscreen map.  Assuming [ScaleOnMapWithZoom](scaleonmapwithzoom) is enabled (it is by default), the measurement will be scaled as the user zooms further out.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| mapDisplaySize | float | 20 | 120 | The size of the marker in pixels when zoomed into the map exactly 1x. | 


