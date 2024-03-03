---
id: achievement
title: Achievement
description: Hides markers and trails based on their associated completion status reported by the web API.
hide_table_of_contents: true
---
| Applies To | | Blish HUD (Pathing) | TacO | Burrito |
|-|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>✔</center> | <center>❌</center> |


:::info 
For this feature to work, the user must have given Blish HUD and the Pathing module permission to access the `account` and `progression` items with an API key.

If the user does not provide an API key or the user has not consented to the `account` and `progression` items, then markers and trails marked with this attribute will not be automatically hidden.
:::

## Description
Hides markers and trails based on their associated completion status reported by the web API.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| achievementid | integer |  | 4949 | The achievement this marker or trail will hide for when completed. | 
| achievementbit | integer |  | 3 | The id of the sub item within an achievement this marker or trail will hide for when completed. | 
## Supported values
### achievementid

The `achievementid` must be a value which matches the Guild Wars 2 Web API achievements endpoint.
- API provided list of achievements: https://api.guildwars2.com/v2/achievements
- Checking an explicit achievement: https://api.guildwars2.com/v2/achievements?id=4949

### achievementbit
Often the harder to find, the `achievementbit` will represent the index of the associated bit found in, for example, the above explicit achievement under the bits entry.

If an achievement requires you to find 4 items, typically each of those 4 items will receive a bit to indicate it's individual status.

The bits are 0 indexed meaning that they count from 0 onwards so if there are 4 bits in an achievement, they will range from 0 to 3.

`achievementbit` is not required and when not specified, the marker or trail will be toggled based exclusively on the status of the parent achievement, itself.

A great way to find achievement IDs and other details is via [gw2treasures.com's achievement search](https://en.gw2treasures.com/achievement). There you can enable the "Index" column for the objectives table on the achievements page to show the correct bit index to use as `achievementbit`.

:::warning 
**Do not** trust the order of the Wiki or the in-game achievement UI. This order does not necessarily represent the order provided by the API.
:::

## Affected By
- [AutoTrigger](/docs/marker-dev/attributes/autotrigger)
- [TriggerRange](/docs/marker-dev/attributes/triggerrange)

