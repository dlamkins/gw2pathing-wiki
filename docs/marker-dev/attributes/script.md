---
id: script
title: Script
description: Allows you to trigger Lua functions or determine if a marker is visible using a Lua function.
hide_table_of_contents: true
---
| Applies To | | Pathing (Blish HUD) | TacO | TaimiHUD | Burrito |
|-|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>❌</center> | <center>❌</center> | <center>❌</center> |


:::info 
For in-depth details about the Pathing module's support for Lua scripting, see the [Lua documentation](/docs/lua-scripting/lua-basics/intro).
:::


## Description
Allows you to trigger Lua functions or determine if a marker is visible using a Lua function.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| script-tick | string |  | UpdateHover() | Code that is executed in the same way that OnTick code is, but with the context of a specific marker. | 
| script-focus | string |  | Highlight(1) | Code that is executed when a marker is focused (player is within triggerRange). | 
| script-trigger | string |  | Buy(50, 1) | Code that is executed when a marker is triggered (player is within triggerRange and autoTrigger is on or the player has pressed their interact key). | 
| script-filter | string |  | ReadyCheck() | Code that is executed every frame which returns if the marker should be visible. | 
| script-once | string |  | Notify(\"New mission!\") | Code that is triggered once with the context of the specific marker. | 


