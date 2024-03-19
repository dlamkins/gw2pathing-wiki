---
id: the-gravy-train
title: The Gravy Train (extra credit territory)
hide_table_of_contents: false
---

You've done everything that could be reasonably expected of a marker pack, especially a fresh one. (Just test it and make sure it's looking and working good!) For anyone who has reached this point and doesn't know, .taco files are just renamed .zip files. Windows comes with zip utilities pre-installed, anymore. Then you just Right-click -> Rename or hit F2 with the .zip selected and change the file extension. (You may need to enable View -> File name Extensions). Yes on the confirmation.

I'm gonna link back to https://gw2pathing.com/docs/marker-dev/attributes/achievement/ at this point and encourage you deeply to explore all your available options. There's an insane amount you can do with some clever thinking.

- Need to make your marker icons bigger than they are by default (or smaller)? iconSize is a multiplier value you can use.
- Markers covering the harvesting node you're making note of? Raise them off the ground a little more with heightOffset.
- Marker tied to an achievement but not a bit or you want to be able to toggle them off until reset? behavior's for you.
- Showing off skips in a jumping puzzle, but they can only be done if you have a shadowstep? profession or specialization restrict them from showing if you're not playing that class.
- Want markers to only show at night because you can't progress the achievement during the day? schedule them!
Every attribute page also tells you whether it works on TacO or just Blish HUD.

A final look in game at the new markers!

![SYWMAMP28.jpeg](/img/pathing/guides/sywmamp/SYWMAMP28.jpeg)