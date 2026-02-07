---
id: festival
title: Festival
description: Hides the marker or trail if one of the specified festivals is not active.
hide_table_of_contents: true
---
| Applies To | | Pathing (Blish HUD) | TacO | TaimiHUD | Burrito |
|-|-|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>✔</center> | <center>✔</center> | <center>❌</center> |


:::warning TacO Support
TacO had preliminary support for this feature, but relies on an implementation which no longer works.  Users must manually override the active festival.
:::


## Description
Hides the marker or trail if one of the specified festivals is not active.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| festival | string array |  | superadventurefestival,wintersday | The festival(s) the marker or trail should be shown during. | 

## Supported values

- halloween
- wintersday
- superadventurefestival
- lunarnewyear
- festivalofthefourwinds
- dragonbash

This attribute supports providing an array of festivals (values separated by comma) meaning one or more values can be provided.  If any of the provided festivals are active, then the marker or trail is shown.
