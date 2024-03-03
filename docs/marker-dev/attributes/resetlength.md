---
id: resetlength
title: ResetLength
description: When using behavior 4 (reappear after timer) this value defines, in seconds, the duration until the marker is reset after being activated.
hide_table_of_contents: true
---
| Applies To | | Blish HUD (Pathing) | TacO | Burrito |
|-|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>✔</center> | <center>❌</center> |


:::warning 
TacO only supports reset lengths as whole integer values whereas Blish HUD's Pathing module supports subsecond granularity as it accepts float values.
:::

## Description
When using behavior 4 (reappear after timer) this value defines, in seconds, the duration until the marker is reset after being activated.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| resetlength | float |  | 20.75 | The number of seconds until the marker should reappear. | 

## Used By
- [Behavior](/docs/marker-dev/attributes/behavior)

