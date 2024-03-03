---
id: type
title: Type
description: Indicates which category a marker or trail belongs to. The type represents the tree of category name attributes delimited by periods. **All markers and trails should have a type.**
hide_table_of_contents: true
---
| Applies To | | Blish HUD (Pathing) | TacO | Burrito |
|-|-|-|-|-|
| <center>Markers, Trails</center> | | <center>✔</center> | <center>✔</center> | <center>❌</center> |


## Description
Indicates which category a marker or trail belongs to. The type represents the tree of category name attributes delimited by periods. **All markers and trails should have a type.**
| Attribute | Data Type | Default Value | Example | Description |
|-|-|-|-|-|
| type | string |  | mypack.adventures.tickletrahearne | The category that the marker or trail belongs to. | 
## Example

The above category example `mypack.adventures.tickletrahearne` represents the same `MarkerCategory` structure shown below.

```xml
<MarkerCategory name="mypack" displayname="My Marker Pack!">
    <MarkerCategory name="adventures">
        <MarkerCategory name="tickletrahearne" displayname="Tickle Trahearne" />
    </MarkerCategory>
</MarkerCategory>
```
