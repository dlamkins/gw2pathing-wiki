---
id: script-focus
title: Script-Focus
hide_table_of_contents: true
---

`script-focus` is executed when a marker is focused (the player is within the marker's `triggerRange`).

#### Default Parameters 
| Parameter | Type | Description |
| :-------- | :--: | ----------- |
| `marker` | [`Marker`](/docs/lua-scripting/lua-lib/marker) | A reference to the marker firing the script. |  
| `isFocused` | `boolean` | Indicates if the marker was just focused (true) or unfocused (false). |

#### Usage
```xml title="pack.xml"
<marker ... script-focus="DoSomethingWhenMarkerIsFocused(1)">
<marker ... script-focus="DoSomethingWhenMarkerIsFocused(2)">
```

```lua title="script.lua"
function DoSomethingWhenMarkerIsFocused(marker, isFocused, markerTriggerID)
    if (isFocused) then
        Debug:Print("Marker " .. markerTriggerID " was focused")
        -- do something else here
    end
end
```

```lua title="Example Output"
-- If the player enters the marker 2's trigger range:
"Marker 2 was focused"
```