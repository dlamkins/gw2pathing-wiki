---
id: toggle
title: Toggle
description: Toggles a category on or off.  Similar in behavior to the [Show & Hide](/docs/marker-dev/attributes/showhide) attributes.
hide_table_of_contents: true
---
| Applies To | | Pathing (Blish HUD) | TacO | TaimiHUD | Burrito |
|-|-|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>✔</center> | <center>❌</center> | <center>❌</center> |



## Description
Toggles a category on or off.  Similar in behavior to the [Show & Hide](/docs/marker-dev/attributes/showhide) attributes.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| toggle | string |  | mypack.adventures.tickletrahearne | A category to toggle when triggered. If the category is disabled, it will be enabled. If the category is enabled, it will be disabled. | 
| toggleCategory | string |  | mypack.adventures.tickletrahearne | Alias for `toggle` to allow for backward compatibility with TacO. | 

## Supported value

The value specified should be that of a category's full namespace (the same format used by the [type] attribute).  The category does not have to be from the same marker pack which does allow for packs to interact with each other.

## How it works

Unlike other behaviors/filters, this attribute, when triggered, update the user's category preferences.  That is to say that a category toggle can be seen reflected in the users category dropdowns and will persist between launches of the overlay.

## Affected By
- [AutoTrigger](/docs/marker-dev/attributes/autotrigger)
- [TriggerRange](/docs/marker-dev/attributes/triggerrange)

