---
id: markers-alone-a-pack-does-not-make
title: Markers alone, a pack does not make
hide_table_of_contents: false
---

So you've dropped a bunch of markers and you're ready to start [making a pack out of them](https://www.youtube.com/watch?v=TVcLIfSC4OE). What do? Time to customize and unify!

If you navigate to your TacO directory (probably something like `C:\Program Files\GW2TacO_062r`) you'll find a file called poidata.xml. This is where all those raw markers are stored and this is what it might look like if you assigned categories to markers. If no categories, Line 8 will probably be Line 1.

**BIG NOTE:** If you want, you can simply copy this poidata.xml file into your `%USERPROFILE%\Documents\Guild Wars 2\addons\blishhud\markers` directory and (theoretically) Blish will show it after a reload. If you added different icons, you may need to copy them to the relevant location in the Data directory within that one.

![SYWMAMP10.png](/img/pathing/guides/sywmamp/SYWMAMP10.png)

This is where you might get really friendly with Find and Replace (Ctrl+H in most editors)

NOTE: TacO will not display changes realtime. I recommend closing TacO ingame, then editing and re-saving this file, then reopening TacO to view your changes. If you use the trick above where you copy (or symlink for advanced users) the poidata.xml file into the Blish directory, it will show changes after "Reload Markers".

https://gw2pathing.com/docs/marker-dev/attributes/achievement/ is my best friend (not just achievement, all the attribute pages here) for understanding what all you can do with Markers, Categories, and Trails!

So now, let's say we're working with Average Joe's barely-a-pack, aka lines 8-21 in the above , without categories. Just your standard gold diamond marker. Looks something more like this.

![SYWMAMP11.png](/img/pathing/guides/sywmamp/SYWMAMP11.png)

Well you've got markers, now it's time to make them tell you (and others) what they're all about!

So first, they all need to be assigned a category. These are completely up to you!

Let's say these are all related to https://en.gw2treasures.com/achievement/3129, just for kicks.

Now this is an achievement that has a very complicated setup for markers, but it should give a full scope of what's possible.

Using the categories above, these would all be under "achievements.openworld.lws3.tokencollector", so we perform the following to slap it on everybody at once:

Ctrl+H (Activate Find and Replace)

Pick your spot, I prefer to have it between zpos and GUID in this instance, so my key would be `GUID=`

Replace with: `type="achievements.openworld.lws3.tokencollector" GUID=`

Result:

![SYWMAMP12.png](/img/pathing/guides/sywmamp/SYWMAMP12.png)

Now, if you're not using a separate marker category file (you can do that!), you'll also need to include the category structure in here too. So we have our structure already made, just a bit of "reverse engineering" now.

So inserting at line 2 (I believe categories need to be before markers in the file, but could be wrong), we're going to make 4 categories, each a child of the previous. This is done by indenting. And pay special attention to using `/>` to close inline vs an ending `</MarkerCategory>` line. You only want to use the former if that category has no children of its own. In this case, the tokencollector category gets that distinction.