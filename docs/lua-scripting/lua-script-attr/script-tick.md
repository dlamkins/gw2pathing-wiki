---
id: script-tick
title: Script-Tick
hide_table_of_contents: true
---

`script-tick` is executed once every in-game tick (typically every frame, but potentially less depending on configuration), providing the marker as context.

:::warning
Because this executes on every game tick, it can impact FPS significantly if you aren't careful with your logic!
:::

#### Default Parameters:  
| Parameter | Type | Description |
| :-------- | :--: | ----------- |
| `marker` | [`Marker`](/docs/lua-scripting/lua-lib/marker) | A reference to the marker firing the script. |  
| `gameTime` | [`GameTime`](/docs/lua-scripting/lua-lib/gametime) | A reference to the current gameTime object. |

#### Usage
```xml title="pack.xml"
<marker ... script-tick="DoSomethingEveryTick(1)">
```

```lua title="script.lua"
function DoSomethingEveryTick(marker, gameTime, markerTriggerID)
    Debug:Print("Marker " .. markerTriggerID " tick triggered")
    -- do something else here
end
```

```lua title="Example Output"
"Marker 1 tick triggered"
"Marker 1 tick triggered"
"Marker 1 tick triggered"
"Marker 1 tick triggered"
"Marker 1 tick triggered"
...
```