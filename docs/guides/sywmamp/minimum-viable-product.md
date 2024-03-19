---
id: minimum-viable-product
title: Minimum Viable Product (MVP)
hide_table_of_contents: false
---

![SYWMAMP13.png](/img/pathing/guides/sywmamp/SYWMAMP13.png)

Note the 3 red lines, as well. This is how you ensure you have all your categories closed out correctly. VSCode and other IDEs, while arguably overkill for xml editing, can also let you collapse entire subtrees, like this:

![SYWMAMP14.png](/img/pathing/guides/sywmamp/SYWMAMP14.png)

Ok, category structure made, markers attached, so as noted above, we've officially reached the MVP (Minimum Viable Product) of a marker pack. But the markers are only going to display the default icons and give no extra information. So it's time to add the bells, whistles, ribbons, bows, fireworks, and all the other doodads that really set your pack apart!

So let's do the easy one and set them apart visually. These tokens don't really have a good icon aside from maybe the gold image in the wallet, so we're going to use a Casino Coin! https://wiki.guildwars2.com/images/5/51/Casino_Coin.png

The base of any marker pack is the xml itself (or many) and all your other resources, especially marker images. Now where you put those images and such is up to you, but I like to organize them in a Data folder and then an Icons and Trails subfolders. Just make sure you're listing the right path! So: Casino Coin image goes in the Data folder, and I note its relative path in the xml. image path is `Data/coin.png`.

![SYWMAMP15.png](/img/pathing/guides/sywmamp/SYWMAMP15.png)

Now here's where you make the hierarchy work for you. You could put `iconFile="Data/coin.png"` on every marker (40 on the real achievement) or put it at the Category and it gets applied to ALL markers of that category. Proof of concept: If you extract "Only Fish" and look at the xml, you'll only find a single instance of iconFile. At the Fishing Holes category level. All the individual hole types inherit the icon and all of their child markers do too! iconFile once, 2243 (at time of writing) markers changed. 💪

As with most programming and tech-related things, specific beats general. So if you had 39 markers that shared an icon but one that needed to be different (in the same category), define the shared icon on the category and the unique one on that specific marker. This applies to most attributes.

All markers now sharing an icon! (make sure this icon is the right place or you're going to have texture loading issues!)

![SYWMAMP16.png](/img/pathing/guides/sywmamp/SYWMAMP16.png)

