---
id: script-filter
title: Script-Filter
hide_table_of_contents: true
---

`script-filter` is executed every frame if it is determined that the attached marker should be visible.

:::warning
Because the function is executed every frame when the marker is visible, it can impact FPS significantly if you aren't careful with your logic!
:::

#### Default Parameters
| Parameter | Type | Description |
| :-------- | :--: | ----------- |
| `marker` | [`Marker`](/docs/lua-scripting/lua-lib/marker) | A reference to the marker firing the script. |  

#### Usage
```xml title="pack.xml"
<marker ... script-filter="DoSomethingWhenMarkerIsVisible(1)">
<marker ... script-filter="DoSomethingWhenMarkerIsVisible(2)">
```

```lua title="script.lua"
function DoSomethingWhenMarkerIsVisible(marker, markerTriggerID)
    Debug:Print("Marker " .. markerTriggerID " is currently visible")
    -- do something else here
end
```

```lua title="Example Output"
-- If marker 2 is visible:
"Marker 2 is currently visible"
"Marker 2 is currently visible"
"Marker 2 is currently visible"
...
```