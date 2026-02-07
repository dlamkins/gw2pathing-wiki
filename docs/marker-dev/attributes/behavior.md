---
id: behavior
title: Behavior
description: Enables one of several predefined behaviors when triggered.
hide_table_of_contents: true
---
| Applies To | | Pathing (Blish HUD) | TacO | TaimiHUD | Burrito |
|-|-|-|-|-|
| <center>Markers</center> | | <center>✔</center> | <center>✔</center> | <center>❌</center> | <center>❌</center> |


:::info 
Behavior IDs of 100 and above are Blish HUD Pathing module specific and will do nothing in TacO.
:::


## Description
Enables one of several predefined behaviors when triggered.
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| behavior | integer | 0 | 3 | The behavior ID to use. | 

## Supported values

| Behavior ID | Name | Behavior Summary |
|-|-|-|
|<center>0</center>| Always visible | The default - the marker has no behavior. |
|<center>1</center>| Reappear on map change | The marker hides when triggered until the map is changed. |
|<center>2</center>| Reappear on daily reset | The marker hides when triggered until daily reset (UTC+0). |
|<center>3</center>| Only visible before activation | The marker hides when triggered permanently. |
|<center>4</center>| Reappear After Timer | The marker hides when triggered until the time specified by the [resetlength](/docs/marker-dev/attributes/resetlength) attribute. |
|<center>5</center>| Reappear on map reset | *Does nothing.  Not implemented by Blish HUD's Pathing module or TacO.* |
|<center>6</center>| Once per instance | The marker hides when triggered until the instance is changed (a combination of map ID + shard ID). |
|<center>7</center>| Once daily per character | The marker hides when triggered until the next day but will show for other characters which have not triggered it yet. |
| | |
|<center>101</center>| Reappear on weekly reset | Resets on the weekly reset (Monday 7:30 UTC). |

## Triggering

Behaviors activate when they are triggered.  Triggering a marker can be done by pressing the action key while in-range of the marker or by walking within the [TriggerRange](/docs/marker-dev/attributes/triggerrange) if [AutoTrigger](/docs/marker-dev/attributes/autotrigger) is enabled.

## Keeping states

Behavior states are tracked by a [GUID](/docs/marker-dev/attributes/guid).  Between launches, this information is saved to disk.

| Overlay | File |
|-|-|
| Pathing | Stored in `\Documents\Guild Wars 2\addons\blishhud\markers\data\states\timers.txt` as `guid,timestamp` pairs. |
| TacO | Stored in `activationdata.xml` as XML |

## Affected By
- [GUID](/docs/marker-dev/attributes/guid)
- [InvertBehavior](/docs/marker-dev/attributes/invertbehavior)
- [ResetLength](/docs/marker-dev/attributes/resetlength)
- [AutoTrigger](/docs/marker-dev/attributes/autotrigger)
- [TriggerRange](/docs/marker-dev/attributes/triggerrange)

