---
id: showhide
title: ShowHide
description: Allows showing or hiding a specified category when triggered.  Similar in behavior to the [Toggle](/docs/marker-dev/attributes/toggle) attribute.
hide_table_of_contents: true
---
| Applies To | | Blish HUD (Pathing) | TacO | Burrito |
|-|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>❌</center> | <center>❌</center> |


## Description
Allows showing or hiding a specified category when triggered.  Similar in behavior to the [Toggle](/docs/marker-dev/attributes/toggle) attribute.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| show | string |  | mypack.adventures.tickletrahearne | A category to show when triggered. If the category is already showing, then nothing will happen. | 
| hide | string |  | mypack.adventures.tickletrahearne | A category to hide when triggered. If the category is already disabled, then nothing will happen. | 
## Supported values

The value specified should be that of a category's full namespace (the same format used by the [type](/docs/marker-dev/attributes/type) attribute).  The category does not have to be from the same marker pack which does allow for packs to interact with each other.

## How it works

Unlike other behaviors/filters, these attributes, when triggered, update the user's category preferences.  That is to say that a category hidden or shown can be seen reflected in the users category dropdowns and will persist between launches of the overlay.
## Affected By
- [AutoTrigger](/docs/marker-dev/attributes/autotrigger)
- [TriggerRange](/docs/marker-dev/attributes/triggerrange)

