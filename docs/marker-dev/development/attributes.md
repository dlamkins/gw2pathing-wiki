---
id: attributes
title: Understanding Attributes
hide_table_of_contents: false
---

Attributes are used to modify the behavior, appearance, and functionality of markers, trails, and categories.

:::warning
    TacO attribute names are case-sensitive.  Our documentation reflects the attribute names exactly as TacO would expect for non-exclusive attributes.
:::


## Exclusive Attributes

Be mindful that there are some attributes exclusively supported by Blish HUD.

Blish HUD exclusive attributes will be silently ignored in TacO.  That means that any behaviors or other effects they would normally provide in Blish HUD will not occur at all in TacO.  Packs using Blish HUD exclusive attributes will still otherwise run in TacO without issue.

:::info Need help or feedback?

If you need assistance or would like to provide suggestions for future attributes in Blish HUD, join our [Discord channel](https://discord.gg/FYKN3qh)!

:::

| Attribute | Summary |
|-|-|
| [Bounce](/docs/marker-dev/attributes/bounce) | *Allows a marker to "bounce" or rise up out of the way when triggered.* |
| [CanFade](/docs/marker-dev/attributes/canfade) | *Allows a marker or trail to ignore fade features such as those which hide trails around the player or between the user and their camera.* |
| [Cull](/docs/marker-dev/attributes/cull) | *By default markers and trails are rendered without culling meaning that both sides are rendered at all times. Alternative culling settings allow you to enable culling for one side or the other. For example, a trail can be made to be visible when viewed from below.* |
| [Festival](/docs/marker-dev/attributes/festival) | *Hides the marker or trail if one of the specified festivals is not active.* |
| [InvertBehavior](/docs/marker-dev/attributes/invertbehavior) | *If enabled, the [behavior](/docs/marker-dev/attributes/behavior) filter is inverted.  By taking advantage of duplicate [GUIDs](/docs/marker-dev/attributes/guid) on a second marker you can have markers which are displayed only while the triggered marker is hidden.* |
| [IsHidden](/docs/marker-dev/attributes/ishidden) | *Prevents the category from being displayed in the category menu.* |
| [IsWall](/docs/marker-dev/attributes/iswall) | *If the trail should be displayed on its side as a wall instead of a flat trail. Good for indicating a boundary.* |
| [MapType](/docs/marker-dev/attributes/maptype) | *Hides the marker or trail if the current map is not one of the specified map types.* |
| [Mount](/docs/marker-dev/attributes/mount) | *Hides the marker or trail if the player is not currently riding one of the specified mounts.* |
| [Occlude](/docs/marker-dev/attributes/occlude) | *Allows a marker to occlude the 3D Pathing elements behind it.  If enabled, the marker does not require a texture.* |
| [Profession](/docs/marker-dev/attributes/profession) | *Hides the marker or trail if the player is not currently one of the specified professions.* |
| [Race](/docs/marker-dev/attributes/race) | *Hides the marker or trail if the player is not currently one of the specified races.* |
| [Raid](/docs/marker-dev/attributes/raid) | *Hides markers and trails based on their associated raid completion status reported by the web API.* |
| [ResetGUID](/docs/marker-dev/attributes/resetguid) | *Resets GUID(s) so that another behavior is no longer filtering them.* |
| [Rotate](/docs/marker-dev/attributes/rotate) | *Allows you to statically rotate a marker instead of it automatically facing the player. Value is in degrees. Rotation is applied first to the x axis, then to y, and finally to z.* |
| [Schedule](/docs/marker-dev/attributes/schedule) | *Hides the marker outside of the specified schedule. Good for showing markers only during their associated scheduled meta event, day of the week, etc. All scheduling is based on UTC.* |
| [Script](/docs/marker-dev/attributes/script) | *Allows you to trigger Lua functions or determine if a marker is visible using a Lua function.* |
| [ShowHide](/docs/marker-dev/attributes/showhide) | *Allows showing or hiding a specified category when triggered.  Similar in behavior to the [Toggle](/docs/marker-dev/attributes/toggle) attribute.* |
| [Specialization](/docs/marker-dev/attributes/specialization) | *Hides the marker or trail if the player is not currently one of the specified specializations.* |
| [Tip](/docs/marker-dev/attributes/tip) | *Allows you to display a tooltip on markers on the minimap or categories in the category dropdown.* |

## Attribute Prefixes

Blish HUD supports prefixed attributes.  This is to say that any attribute prefixed by `bh-` will be stripped of its prefix and used as a normal attribute.  This allows you to create markers, trails, and categories that differ in functionality depending on if the pack is loaded by Blish HUD or TacO.  This works because TacO will ignore these attributes entirely as they don't match any of its supported attributes.

**Example:**
```xml
<MarkerCategory name="overlay" displayname="You're using TacO!" bh-displayname="You're using Blish HUD!" />
```

:::caution

When using prefixed attributes, ensure they are specified after the attribute you wish you override.  Anything that inherits attributes can still override a prefixed attribute if it itself defines its own overriding attribute, *prefixed or not*.

:::

## Attribute Values

As the marker pack format is XML based, there are limitations to what characters can be used as an attribute value.  The table below indicates the values that must be escaped in order to be considered proper XML.  Both Blish HUD and TacO have forgiving XML parsers which will do their best to interpret the value, but not all libraries or overlays are capable of this.  For the best result, you the table below when using any of the specified characters.

| Character | Escaped Value |
|-|-|
|`<`|`&lt;`|
|`>`|`&gt;`|
|`&`|`&amp;`|
|`'`|`&apos;`|
|`"`|`&quot;`|
|New Line|`&#xA;`|