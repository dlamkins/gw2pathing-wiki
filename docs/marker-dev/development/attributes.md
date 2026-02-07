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

Be mindful that there are some attributes exclusively supported by Blish HUD's Pathing module.

Pathing exclusive attributes will be silently ignored in TacO and other overlays.  That means that any behaviors or other effects they would normally provide in Pathing will not occur at all in TacO.  Packs using Pathing exclusive attributes will still otherwise run in TacO without issue.

:::info Need help or feedback?

If you need assistance or would like to provide suggestions for future attributes, join the [Blish HUD Discord channel](https://discord.gg/FYKN3qh)!

:::

| Attribute | Summary |
|-|-|
| [Bounce](/docs/marker-dev/attributes/bounce) | *Allows a marker to "bounce" or rise up out of the way when triggered.* |
| [CanFade](/docs/marker-dev/attributes/canfade) | *Allows a marker or trail to ignore fade features such as those which hide trails around the player or between the user and their camera.* |
| [Cull](/docs/marker-dev/attributes/cull) | *By default markers and trails are rendered without culling meaning that both sides are rendered at all times. Alternative culling settings allow you to enable culling for one side or the other. For example, a trail can be made to be visible when viewed from below.* |
| [InvertBehavior](/docs/marker-dev/attributes/invertbehavior) | *If enabled, the [behavior](/docs/marker-dev/attributes/behavior) filter is inverted.  By taking advantage of duplicate [GUIDs](/docs/marker-dev/attributes/guid) on a second marker you can have markers which are displayed only while the triggered marker is hidden.* |
| [Occlude](/docs/marker-dev/attributes/occlude) | *Allows a marker to occlude the 3D Pathing elements behind it.  If enabled, the marker does not require a texture.* |
| [ResetGUID](/docs/marker-dev/attributes/resetguid) | *Resets GUID(s) so that another behavior is no longer filtering them.* |
| [Rotate](/docs/marker-dev/attributes/rotate) | *Allows you to statically rotate a marker instead of it automatically facing the player. Value is in degrees. Rotation is applied first to the x axis, then to y, and finally to z.* |
| [Script](/docs/marker-dev/attributes/script) | *Allows you to trigger Lua functions or determine if a marker is visible using a Lua function.* |
| [ShowHide](/docs/marker-dev/attributes/showhide) | *Allows showing or hiding a specified category when triggered.  Similar in behavior to the [Toggle](/docs/marker-dev/attributes/toggle) attribute.* |

## Attribute Prefixes

Pathing supports prefixed attributes.  This is to say that any attribute prefixed by `bh-` will be stripped of its prefix and used as a normal attribute.  This allows you to create markers, trails, and categories that differ in functionality depending on if the pack is loaded by Pathing or TacO.  This works because TacO will ignore these attributes entirely as they don't match any of its supported attributes.

**Example:**
```xml
<MarkerCategory name="overlay" displayname="You're using TacO!" bh-displayname="You're using Blish HUD's Pathing module!" />
```

:::caution

When using prefixed attributes, ensure they are specified after the attribute you wish you override.  Anything that inherits attributes can still override a prefixed attribute if it itself defines its own overriding attribute, *prefixed or not*.

:::

## Attribute Values

As the marker pack format is XML based, there are limitations to what characters can be used as an attribute value.  The table below indicates the values that must be escaped in order to be considered proper XML.  Both Pathing and TacO have forgiving XML parsers which will do their best to interpret the value, but not all libraries or overlays are capable of this.  For the best result, you the table below when using any of the specified characters.

| Character | Escaped Value |
|-|-|
|`<`|`&lt;`|
|`>`|`&gt;`|
|`&`|`&amp;`|
|`'`|`&apos;`|
|`"`|`&quot;`|
|New Line|`&#xA;`|