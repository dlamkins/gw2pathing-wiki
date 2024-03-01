/**
  All of this is subject to change ofc, just a starting point
 */


/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "usage-sidebar": {
    "User Guide": [
      "usage/markers",
      "usage/managingmarkers",
    ],
  },
  "marker-dev-sidebar": [
    {
      type: 'category',
      label: 'Marker Pack Development',
      items: [
        "marker-dev/development/mp_introduction",
        "marker-dev/development/dev-tools",
        "marker-dev/development/packformats",
        {
          type: 'category',
          label: 'Attributes',
          items: [
            "marker-dev/development/attributes",
            {
              type: 'category',
              label: 'Attributes',
              items: [
                "marker-dev/attributes/achievement",
                "marker-dev/attributes/alpha",
                "marker-dev/attributes/animspeed",
                "marker-dev/attributes/autotrigger",
                "marker-dev/attributes/behavior",
                "marker-dev/attributes/bounce",
                "marker-dev/attributes/canfade",
                "marker-dev/attributes/color",
                "marker-dev/attributes/copy",
                "marker-dev/attributes/cull",
                "marker-dev/attributes/defaulttoggle",
                "marker-dev/attributes/displayname",
                "marker-dev/attributes/fade",
                "marker-dev/attributes/festival",
                "marker-dev/attributes/guid",
                "marker-dev/attributes/heightoffset",
                "marker-dev/attributes/iconfile",
                "marker-dev/attributes/iconsize",
                "marker-dev/attributes/info",
                "marker-dev/attributes/invertbehavior",
                "marker-dev/attributes/isseparator",
                "marker-dev/attributes/iswall",
                "marker-dev/attributes/mapdisplaysize",
                "marker-dev/attributes/mapid",
                "marker-dev/attributes/maptype",
                "marker-dev/attributes/mount",
                "marker-dev/attributes/position",
                "marker-dev/attributes/profession",
                "marker-dev/attributes/race",
                "marker-dev/attributes/resetlength",
                "marker-dev/attributes/rotate",
                "marker-dev/attributes/scaleonmapwithzoom",
                "marker-dev/attributes/schedule",
                "marker-dev/attributes/showhide",
                "marker-dev/attributes/size",
                "marker-dev/attributes/specialization",
                "marker-dev/attributes/texture",
                "marker-dev/attributes/tip",
                "marker-dev/attributes/toggle",
                "marker-dev/attributes/trailscale",
                "marker-dev/attributes/triggerrange",
                "marker-dev/attributes/type",
                "marker-dev/attributes/visibility"
              ],
            },
            {
              type: 'category',
              label: 'Attribute Data Types',
              items: [
                "marker-dev/datatypes/bool",
                "marker-dev/datatypes/color",
                "marker-dev/datatypes/file",
                "marker-dev/datatypes/float",
                "marker-dev/datatypes/integer"
              ],
            }
    
          ]
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            "marker-dev/tutorials/getting-started",
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Lua Scripting',
      items: [
        {
          type: 'category',
          label: 'Lua Basics',
          items: [
            "lua-scripting/lua-basics/intro",
            "lua-scripting/lua-basics/lua",
          ],
        },
        {
          type: 'category',
          label: "Pathing API",
          items: [
            "lua-scripting/lua-lib/api_intro",
            {
              type: 'category',
              label: 'Script Attributes',
              items: [
                'lua-scripting/lua-script-attr/script-filter',
                'lua-scripting/lua-script-attr/script-focus',
                'lua-scripting/lua-script-attr/script-once',
                'lua-scripting/lua-script-attr/script-tick',
                'lua-scripting/lua-script-attr/script-trigger'
              ],
            },
            {
              type: 'category',
              label: 'Global Classes and Functions',
              items: [
                'lua-scripting/lua-lib/debug',
                'lua-scripting/lua-lib/event',
                'lua-scripting/lua-lib/instance',
                'lua-scripting/lua-lib/menu',
                'lua-scripting/lua-lib/mumble',
                'lua-scripting/lua-lib/pack',
                'lua-scripting/lua-lib/user',
                'lua-scripting/lua-lib/world',
              ],
            },
            {
              type: 'category',
              label: 'Types',
              items: [
                'lua-scripting/lua-lib/category',
                'lua-scripting/lua-lib/color',
                'lua-scripting/lua-lib/gametime',
                'lua-scripting/lua-lib/guid',
                'lua-scripting/lua-lib/ibehavior',
                'lua-scripting/lua-lib/ipathable',
                'lua-scripting/lua-lib/marker',
                'lua-scripting/lua-lib/texture',
                'lua-scripting/lua-lib/trail',
                'lua-scripting/lua-lib/vector3',
              ],
            }
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'lua-scripting/lua-tutorials/getting-started',
            'lua-scripting/lua-tutorials/hello-world',
            'lua-scripting/lua-tutorials/exploring-attributes',
            'lua-scripting/lua-tutorials/using-the-api',
            'lua-scripting/lua-tutorials/creating-a-marker',
            'lua-scripting/lua-tutorials/creating-a-script-menu',
          ],
        }
      ]
    }
  ],

};

export default sidebars;
