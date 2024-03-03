---
id: script-trigger
title: Script-Trigger
hide_table_of_contents: true
---

`script-trigger` is executed when a marker is triggered (the player is within `triggerRange` and `autoTrigger` is on or the player has pressed their interact key).

:::note
Just being within the `triggerRange` is not enough to cause this to execute, it must be triggered either manually or by `autoTrigger`!
:::

#### Default Parameters
| Parameter | Type | Description |
| :-------- | :--: | ----------- |
| `marker` | [`Marker`](/docs/lua-scripting/lua-lib/marker) | A reference to the marker firing the script. |  
| `isAutoTrigger` | `boolean` | A reference to the current gameTime object. |

#### Usage
```xml title="pack.xml"
<marker ... script-tick="DoSomethingWhenTriggered(1)" autoTrigger="1">
<marker ... script-tick="DoSomethingWhenTriggered(2)" autoTrigger="0">
```

```lua title="script.lua"
function DoSomethingWhenTriggered(marker, isAutoTrigger, markerTriggerID)
    if isAutoTrigger then
        Debug:Print("Marker " .. markerTriggerID " triggered automatically")
        -- do something else here
    else
        Debug:Print("Marker " .. markerTriggerID " triggered manually")
        -- do something else here
    end
end
```

```lua title="Example Output"
-- If marker 1 is triggered by autotrigger
"Marker 1 triggered automatically"
-- If marker 2 is triggered manually
"Marker 2 triggered manually"
...
```