---
id: faq
title: FAQ
hide_table_of_contents: false
---

You can actually edit markers directly in your `/markers` directory of Blish to make testing changes very easy! The only requirement is that all icons/trails need to be copied into `/markers/data`, not just your pack subdirectory. This is because (for now) Blish doesn't distinguish where the actual root dir for an xml is if it's not packed in a `.zip` or `.taco` and so it just assumes the `/markers` dir is the root directory. Ex: My `/markers` directory looks like so. All the Icons and Trails from the MMM/Data and OnlyFish/Data directories get copied into the respective directories under the default data. markers

- data (default, part of Blish install)
  - Icons
  - states (default, part of Blish install)
  - Trails
  - user (default, part of Blish install)
- Metal Marker Myriad
  - Data
    - Icons
    - Trails
  - xml files
- Only Fish
  - Data
    - Icons
    - Trails
  - xml files