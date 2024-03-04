---
id: intro
title: Introduction
hide_table_of_contents: false
---

The Pathing module has an API that allows packs to implement their own lua scripts and call various functions by using script attributes on markers or creating `OnTick` events. 

While it doesn't require a _deep_ understanding of programming, it does require a slightly different set of skills than creating a marker pack, but can be an extremely powerful tool in your arsenal as a pack creator. 

:::info
Lua itself is fairly easy to learn, so don't let that hold you back from trying!
:::
<br/>
---

## Why scripting?
Pathing has a lot of great attributes that we can put on markers to modify their behavior, but the overall functionality is limited and can't be changed once the pack is loaded. With scripting, we can do all sorts of cool stuff during gameplay that we would never be able to do with marker attributes alone. Some examples:
- Having a marker follow the player around
- Spawning a marker at the players location
- Changing colors of a trail dynamically
- Creating unique marker interaction behaviors
- Changing a markers attributes during runtime
- And much more!
<br/>
---

## Before we get started...
While I will cover the basics that are important to know when working with the Pathing API, I won't be covering the basics of Lua programming itself. If you are new to Lua or programming in general, I would recommend checking out a tutorial or two on the basics of Lua before continuing. A quick 5-10 minute youtube video should be enough to get you on your feet, and then you can come back here and continue with the rest of the guide. Or, if you're feeling brave, you can just jump right in and learn as you go. Like I said, Lua is fairly easy to learn.
<br/>
---

## The Pathing API
The Pathing API is a set of functions and objects that are available to you when you are working on scripts. These functions and objects are what allow you to interact with the Pathing module and create your own custom behaviors. We will cover these in more detail later on, but for now, just know that these are the tools you will be using to create your custom behaviors.

You can find the full list of available functions and objects in the [Pathing API Reference](/docs/lua-scripting/lua-lib/api_intro). If you want, you can go take some time to read through the overview there, or you can head straight to the tutorials and read through the overview as it's mentioned.


