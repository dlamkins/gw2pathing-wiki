import CollapsibleTable from "./CollapsibleTable";

const DebugFunctions = [
    { 
        name: "Debug:Print",
        description: "Writes a message out to the script console.",
        link: "/docs/lua-scripting/lua-lib/debug#debugprint"
    },
    { 
        name: "Debug:Warn",
        description: "Writes a warning out to the script console.",
        link: "/docs/lua-scripting/lua-lib/debug#debugwarn"
    },
    { 
        name: "Debug:Error",
        description: "Writes an error out to the script console.",
        link: "/docs/lua-scripting/lua-lib/debug#debugerror"
    },
    { 
        name: "Debug:Watch",
        description: "Adds a static value or a table to the watch panel in the script console.",
        link: "/docs/lua-scripting/lua-lib/debug#debugwatch"
    },
    { 
        name: "Debug:ClearWatch",
        description: "Stops watching a static value or table.",
        link: "/docs/lua-scripting/lua-lib/debug#debugclearwatch"
    }
];

const EventFunctions = [
    { 
        name: "Event:OnTick",
        description: "Registers the provided function with the tick handler. The provided function will be called every tick.",
        link: "/docs/lua-scripting/lua-lib/event"
    }
];

const InstanceFunctions = [
    {
        name: "Instance:Vector3",
        description: "Creates a new Vector3.",
        link: "/docs/lua-scripting/lua-lib/instance#ivector3"
    },
    {
        name: "Instance:Color",
        description: "Creates a new Color.",
        link: "/docs/lua-scripting/lua-lib/instance#icolor"
    },
    {
        name: "Instance:Marker",
        description: "Creates a new Marker.",
        link: "/docs/lua-scripting/lua-lib/instance#imarker"
    },
    {
        name: "Instance:Guid",
        description: "Creates a new Guid.",
        link: "/docs/lua-scripting/lua-lib/instance#iguid"
    },
    {
        name: "Instance:Texture",
        description: "Gets a Texture by Asset ID from the public CDN.",
        link: "/docs/lua-scripting/lua-lib/instance#itexture"
    },
    {
        name: "Instance:Texture",
        description: "Gets a Texture from a marker pack.",
        link: "/docs/lua-scripting/lua-lib/instance#itexture-1"
    }
];

const MenuFunctions = [
    {
        name: "Menu:Add",
        description: "Adds a new menu.",
        link: "/docs/lua-scripting/lua-lib/menu#menuadd"
    },
    {
        name: "Menu:Remove",
        description: "Removes the specified menu item.",
        link: "/docs/lua-scripting/lua-lib/menu#menuremove"
    }
];

const MumbleFunctions = [
    {
        name: "N/A",
        description: "The mumble class is used to access the mumble info and has no global functions.",
        link: "/docs/lua-scripting/lua-lib/mumble"
    }
];

const PackFunctions = [
    {
        name: "Pack:Require",
        description: "Executes a script in the marker pack.",
        link: "/docs/lua-scripting/lua-lib/pack#packrequire"
    },
    {
        name: "Pack:CreateMarker",
        description: "Creates a new marker within the marker pack.",
        link: "/docs/lua-scripting/lua-lib/pack#packcreatemarker"
    }
];

const UserFunctions = [
    {
        name: "SetClipboard",
        description: "Sets the user's clipboard to the provided value.",
        link: "/docs/lua-scripting/lua-lib/user"
    }
];

const WorldFunctions = [
    {
        name: "World:CategoryByType",
        description: "Finds and returns a category based on the provided type.",
        link: "/docs/lua-scripting/lua-lib/world#worldcategorybytype"
    },
    {
        name: "World:PathableByGuid",
        description: "Returns a pathable based on the provided guid.",
        link: "/docs/lua-scripting/lua-lib/world#worldpathablebyguid"
    },
    {
        name: "World:PathablesByGuid",
        description: "Returns a table of pathables based on the provided guid.",
        link: "/docs/lua-scripting/lua-lib/world#worldpathablesbyguid"
    },
    {
        name: "World:MarkerByGuid",
        description: "Returns a marker based on the provided guid.",
        link: "/docs/lua-scripting/lua-lib/world#worldmarkerbyguid"
    },
    {
        name: "World:GetClosestMarker",
        description: "Returns the closest marker.",
        link: "/docs/lua-scripting/lua-lib/world#worldgetclosestmarker"
    },
    {
        name: "World:GetClosestMarker(category)",
        description: "Returns the closest marker directly within the specified category.",
        link: "/docs/lua-scripting/lua-lib/world#worldgetclosestmarkercategory"
    },
    {
        name: "World:GetClosestMarkers",
        description: "Returns the specified number of the closest markers to the player.",
        link: "/docs/lua-scripting/lua-lib/world#worldgetclosestmarkers"
    },
    {
        name: "World:GetClosestMarkers(category, quantity)",
        description: "Returns the specified number of the closest markers to the player within the specified category.",
        link: "/docs/lua-scripting/lua-lib/world#worldgetclosestmarkerscategory-quantity"
    },
    {
        name: "World:TrailByGuid",
        description: "Returns a trail based on the provided guid.",
        link: "/docs/lua-scripting/lua-lib/world#worldtrailbyguid"
    }
];

const classes = [
    ["Debug", "/docs/lua-scripting/lua-lib/debug", "Provides access to various debugging functions which are useful for testing and debugging your scripts.", DebugFunctions],
    ["Event", "/docs/lua-scripting/lua-lib/event", "Provides the OnTick function used to call functions every tick.", EventFunctions],
    ["Instance", "/docs/lua-scripting/lua-lib/instance", "Provides the ability to create new instances of various pathing types, which can then be used in other functions.", InstanceFunctions],
    ["Menu", "/docs/lua-scripting/lua-lib/menu", "Provides the ability to create and remove menus for script functions in the Pathing UI.", MenuFunctions],
    ["Mumble", "/docs/lua-scripting/lua-lib/mumble", "Provides access to all mumble information, provided in the form of various classes, enums and fields.", MumbleFunctions],
    ["Pack", "/docs/lua-scripting/lua-lib/pack", "Provides the ability to execute scripts and create new markers.", PackFunctions],
    ["User", "/docs/lua-scripting/lua-lib/user", "Provides the ability to set the user's clipboard", UserFunctions],
    ["World", "/docs/lua-scripting/lua-lib/world", "Provides access to many utility functions used to access categories and pathables (markers/trails) within the world.", WorldFunctions]
];

function createData(className, classLink, description, functions) {
    return {
      class: className,
      classLink: classLink,
      description: description,
      functions: functions
    };
  }

const rows = classes.map((row) => createData(row[0], row[1], row[2], row[3]))

export default function GlobalClassesTable() {
    return (
        <CollapsibleTable rows={rows} />
    );
}