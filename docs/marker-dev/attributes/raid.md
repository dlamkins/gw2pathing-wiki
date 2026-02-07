---
id: raid
title: Raid
description: Hides markers and trails based on their associated raid completion status reported by the web API.
hide_table_of_contents: true
---
| Applies To | | Pathing (Blish HUD) | TacO | TaimiHUD | Burrito |
|-|-|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>❌</center> | <center>✔</center> | <center>❌</center> |


:::info 
For this feature to work, the user must have given Blish HUD and the Pathing module permission to access the `account` and `progression` items with an API key.

If the user does not provide an API key or the user has not consented to the `account` and `progression` items, then markers and trails marked with this attribute will not be automatically hidden.
:::


## Description
Hides markers and trails based on their associated raid completion status reported by the web API.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| raid | string array |  | twisted_castle,xera | The raid IDs this marker or trail will hide for when completed. | 

## Supported values
### raid

The `raid` must be a value which matches the ID from Guild Wars 2 Web API raids endpoint.
- API provided list of achievements: https://api.guildwars2.com/v2/raids?ids=all


You can check for completion of an account using the raid progression endpoint:
https://api.guildwars2.com/v2/account/raids?access_token=yourapitokenhere
