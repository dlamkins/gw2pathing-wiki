---
id: mapid
title: MapID
description: Defines which map the marker should be displayed on.  A list of maps and their ID can be found via the Guild Wars 2 Web API - https://api.guildwars2.com/v2/maps?ids=all
hide_table_of_contents: true
---
| Applies To | | Pathing (Blish HUD) | TacO | TaimiHUD | Burrito |
|-|-|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>✔</center> | <center>✔</center> | <center>✔</center> |



## Description
Defines which map the marker should be displayed on.  A list of maps and their ID can be found via the Guild Wars 2 Web API - https://api.guildwars2.com/v2/maps?ids=all
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| MapId | integer |  | 19 | The map ID this marker should show on. | 

:::info 
By default, trails don't use mapid as the mapid is a value stored in the trl format.  Blish HUD's Pathing module does support specifying the mapid for trails to reduce loading times and is a requirement of the optimized marker pack format.
:::



