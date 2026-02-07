---
id: info
title: Info
description: Allows you to show text on screen while the user is in range of the marker.
hide_table_of_contents: true
---
| Applies To | | Pathing (Blish HUD) | TacO | TaimiHUD | Burrito |
|-|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>✔</center> | <center>❌</center> | <center>❌</center> |



## Description
Allows you to show text on screen while the user is in range of the marker.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| info | string |  | Collect trinkets to complete the heart.&#xA;Deliver trinkets: 30%&#xA;Rescue pirates: 17% | The text shown on screen when the character is in range. | 
| inforange | float | 2 | 14.7 | The distance away that the info text will begin showing on screen. | 

:::info Multi-line info
XML's escaped newline `&#xA;` is supported and will allow you to show messages which intentionally span multiple lines in the info.
:::




## Affected By
- [TriggerRange](/docs/marker-dev/attributes/triggerrange)

