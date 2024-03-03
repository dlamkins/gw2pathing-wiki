---
id: tip
title: Tip
description: Allows you to display a tooltip on markers on the minimap or categories in the category dropdown.
hide_table_of_contents: true
---
| Applies To | | Blish HUD (Pathing) | TacO | Burrito |
|-|-|-|-|-|
| <center>Markers, Category</center> | | <center>✔</center> | <center>❌</center> | <center>❌</center> |


## Description
Allows you to display a tooltip on markers on the minimap or categories in the category dropdown.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| tip-name | string |  | Golden Coin | The text to show as the title of the tooltip. | 
| tip-description | string |  | Coin 7 - under the cove south of the waypoint. | The description text shown under the title. | 

:::info 
`tip-name` is implemented on the mini-map but not for categories as a name would be redundant.
:::

## Remarks

If `tip-name` is not provided, the [displayname](displayname) of the parent category is used instead.

If you would like no tooltip to be shown for a marker, set `tip-name=""`.  Note that this will also hide the distance indicator and any set `tip-description` will also be ignored.
