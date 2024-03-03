---
id: script-once
title: Script-Once
hide_table_of_contents: true
---

`script-once` is executed once when the pack loads the marker, providing the marker as context.

#### Default Parameters
| Parameter | Type | Description |
| :-------- | :--: | ----------- |
| `marker` | [`Marker`](/docs/lua-scripting/lua-lib/marker) | A reference to the marker firing the script. |  

#### Usage
```xml title="pack.xml"
<marker ... script-once="DoSomethingWhenMarkerIsLoaded(1)">
<marker ... script-once="DoSomethingWhenMarkerIsLoaded(2)">
```

```lua title="script.lua"
function DoSomethingWhenMarkerIsLoaded(marker, markerTriggerID)
    Debug:Print("Marker " .. markerTriggerID " was loaded")
    -- do something else here
end
```

```lua title="Example Output"
-- Once marker 2 is loaded:
"Marker 2 was loaded"
```