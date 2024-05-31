---
id: bounce
title: Bounce
description: Allows a marker to "bounce" or rise up out of the way when triggered.
hide_table_of_contents: true
---
| Applies To | | Blish HUD (Pathing) | TacO | Burrito |
|-|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>❌</center> | <center>❌</center> |


:::info 
Users have the option to disable animations within the module settings. If disabled, this attribute will not have any affect.
:::


## Description
Allows a marker to "bounce" or rise up out of the way when triggered.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| bounce | string |  | bounce | The bounce behavior mode. | 
| bounce-height | float | 2 | 2 | The height of the bounce. | 
| bounce-duration | float | 1 | 1.2 | The length of time taken to complete the bounce. | 
| bounce-delay | float | 0 | 0 | The amount of time (in seconds) after triggering the bounce that the bounce will begin. | 

## Bounce supported values

- bounce
- rise

The `bounce` attribute indicates the bounce behavior.  When set to `bounce`, the marker will continue to animate while triggered.  When set to `rise`, the marker will raise up until the player leaves the trigger zone.


:::tip 
You can keep a marker bouncing forever by enabling **AutoTrigger** and using a large **TriggerRange**.
:::


## Affected By
- [TriggerRange](/docs/marker-dev/attributes/triggerrange)
- [AutoTrigger](/docs/marker-dev/attributes/autotrigger)

