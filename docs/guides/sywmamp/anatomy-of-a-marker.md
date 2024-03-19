---
id: anatomy-of-a-marker
title: Anatomy of a Marker
hide_table_of_contents: false
---

`<POI` - Required, denotes to TacO and Blish that this is a marker!

`MapID="50"` - specifies which map a marker belongs to. Every map, including story instances, etc, have a unique ID. So this can be used to show achievement markers, etc only on the relevant story instance and not the overworld.

`xpos="-194.279" ypos="1.37639" zpos="-161.135"` - denotes the physical location of the marker so TacO and Blish can consistently display it, as the camera moves.

NOTE THE AXES MAY BE DIFFERENT THAN YOU'RE USED TO FROM GEOMETRY. Most of us (myself included) are used to the x-y plane being flat on the table and the z-axis being "altitude". This is still the case, but the x-y plane is now vertical, on your monitor, so the z-axis is "into or out of" the screen and the y-axis would be "altitude".

`type="fishing.fishingholes.desert"` - the category applied to this particular hole, this is what allows you to turn off (or apply behaviors, icons, etc to) a bunch of markers at once, and just generally helps the organizational structure of a pack. The marker editors will automatically generate relevant category structure based on the categories you assign to markers.

`GUID="xM5D+V2CUEGt0qIpbEik4g=="` - a Globally Unique IDentifier for each marker. This is to ensure that even if you place two markers in the exact same spot, TacO and Blish can tell them apart and properly display both.

`/>` - denotes the end of one marker's attributes.

Now because `Desert` is not the right category for this hole, I manually change it.

![SYWMAMP7.png](/img/pathing/guides/sywmamp/SYWMAMP7.png)

If you know you're going to be placing a bunch of the same category of marker, set it to one of your defaults!

![SYWMAMP8.png](/img/pathing/guides/sywmamp/SYWMAMP8.png)

Next time you place a marker using that hotkey (in this case NUM +), it will place a coastal-category marker for me, no tweaking needed.

Quick aside: "Why the huge ring? Can't you just watch for labels as you go?"

Yes, I can, but this way, I can easily determine how to make the fewest passes. Like here I know I'll only need 1 pass to check any holes in this outlet. Ring hits both coasts. And that means SWEET SWEET TIME SAVINGS, which you'll gladly pay a premium for if you're making anything more than a personal collection.

![SYWMAMP9.jpeg](/img/pathing/guides/sywmamp/SYWMAMP9.jpeg)

**HOT TIP:** The ring is also helpful when you're hunting for interactable stuff that's well hidden in game, too!