---
id: copy
title: Copy
description: Allows you to set a value to the users clipboard. Good for providing waypoints, build templates, and more.
hide_table_of_contents: true
---
| Applies To | | Pathing (Blish HUD) | TacO | TaimiHUD | Burrito |
|-|-|-|-|-|-|
| <center>Category, Markers</center> | | <center>✔</center> | <center>✔</center> | <center>✔</center> | <center>❌</center> |


:::warning 
TacO does not support the copy attribute on category separators like Pathing does.
:::


## Description
Allows you to set a value to the users clipboard. Good for providing waypoints, build templates, and more.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| copy | string |  | [&BOAHAAA=] | The text assigned to the clipboard. | 
| copy-message | string | '{0}' copied to clipboard. | Jaka Itzel waypoint copied! | The message shown on screen when the copy is activated. | 

## Triggering a copy

When interacted with (typically the F key), a marker with the `copy` attribute will activate.

When applied to a [separator category](isseparator), clicking on the separator will activate the copy and display the copy message.

## User Configuration

Users may limit what automatic behaviors they consent to.  Regarding the copy attribute, users can select one of three behavior consent levels.

| Allow markers to set clipboard... | Description |
|-|-|
| Always (Default) | Markers can set the clipboard automatically when in range or when interacted without limitation. |
| Only When Interacted With | Copy auto trigger is disabled.  The copy attribute will only be activated when manually interacted with by the player. |
| Never | Markers will be entirely unable to set the clipboard. |


## Affected By
- [AutoTrigger](/docs/marker-dev/attributes/autotrigger)
- [TriggerRange](/docs/marker-dev/attributes/triggerrange)

