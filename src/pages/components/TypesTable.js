import CollapsibleTable from "./CollapsibleTable";

const CategoryFunctions = [
    { 
        name: "GetOrAddCategoryFromNamespace", 
        description: "Returns the requested category by namespace if one exists or creates one and returns it.", 
        link: "/docs/lua-scripting/lua-lib/category#categorygetoraddcategoryfromnamespace" 
    },
    {
        name: "IsVisible",
        description: "Indicates if the category is currently enabled by the user.",
        link: "/docs/lua-scripting/lua-lib/category#categoryisvisible"
    },
    {
        name: "Show",
        description: "Enables the category.",
        link: "/docs/lua-scripting/lua-lib/category#categoryshow"
    },
    {
        name: "Hide",
        description: "Disables the category.",
        link: "/docs/lua-scripting/lua-lib/category#categoryhide"
    },
    {
        name: "GetMarkers",
        description: "Returns all markers directly within the category.",
        link: "/docs/lua-scripting/lua-lib/category#categorygetmarkers"
    },
    {
        name: "GetTrails",
        description: "Returns all trails directly within the category.",
        link: "/docs/lua-scripting/lua-lib/category#categorygettrails"
    }
]

const ColorFunctions = [
    {
        name: "N/A",
        description: "Color has no helper functions. Creation is done using the Instance global class.",
        link: "/docs/lua-scripting/lua-lib/color"
    }
]

const GameTimeFunctions = [
    {
        name: "N/A",
        description: "GameTime has no helper functions.",
        link: "/docs/lua-scripting/lua-lib/gametime"
    }
]

const GuidFunctions = [
    {
        name: "ToBase64",
        description: "Returns a base64 string representation of a GUID.",
        link: "/docs/lua-scripting/lua-lib/guid#guidtobase64"
    }
]

const IBehaviorFunctions = [
    {
        name: "N/A",
        description: "IBehavior has no helper functions.",
        link: "/docs/lua-scripting/lua-lib/ibehavior"
    }
]


const IPathableFunctions = [
    {
        name: "Focus",
        description: "Focuses the pathable.",
        link: "/docs/lua-scripting/lua-lib/ipathable#ipathablefocus"
    },
    {
        name: "Unfocus",
        description: "Unfocuses the pathable.",
        link: "/docs/lua-scripting/lua-lib/ipathable#ipathableunfocus"
    },
    {
        name: "Interact",
        description: "Triggers the pathable.",
        link: "/docs/lua-scripting/lua-lib/ipathable#ipathableinteract"
    }
]

const MarkerFunctions = [
    {
        name: "Focus",
        description: "Focuses the marker.",
        link: "/docs/lua-scripting/lua-lib/marker#markerfocus"
    },
    {
        name: "Unfocus",
        description: "Unfocuses the marker.",
        link: "/docs/lua-scripting/lua-lib/marker#markerunfocus"
    },
    {
        name: "Interact",
        description: "Triggers the marker.",
        link: "/docs/lua-scripting/lua-lib/marker#markerinteract"
    },
    {
        name: "SetPos(x, y, z)",
        description: "Sets the x,y,z position of the marker.",
        link: "/docs/lua-scripting/lua-lib/marker#markersetpos"
    },
    {
        name: "SetPos(vector)",
        description: "Sets the x,y,z position of the marker.",
        link: "/docs/lua-scripting/lua-lib/marker#markersetpos-1"
    },
    {
        name: "SetPosX",
        description: "Set the X coordinate of the marker.",
        link: "/docs/lua-scripting/lua-lib/marker#markersetposx"
    },
    {
        name: "SetPosY",
        description: "Set the Y coordinate of the marker.",
        link: "/docs/lua-scripting/lua-lib/marker#markersetposy"
    },
    {
        name: "SetPosZ",
        description: "Set the Z coordinate of the marker.",
        link: "/docs/lua-scripting/lua-lib/marker#markersetposz"
    },
    {
        name: "SetRot(x, y, z)",
        description: "Set the rotation of the marker (in radians).",
        link: "/docs/lua-scripting/lua-lib/marker#markersetrot"
    },
    {
        name: "SetRot(vector)",
        description: "Set the rotation of the marker (in radians).",
        link: "/docs/lua-scripting/lua-lib/marker#markersetrot-1"
    },
    {
        name: "SetRotX",
        description: "Set the x rotation of the marker (in radians).",
        link: "/docs/lua-scripting/lua-lib/marker#markersetrotx"
    },
    {
        name: "SetRotY",
        description: "Set the y rotation of the marker (in radians).",
        link: "/docs/lua-scripting/lua-lib/marker#markersetroty"
    },
    {
        name: "SetRotZ",
        description: "Set the z rotation of the marker (in radians).",
        link: "/docs/lua-scripting/lua-lib/marker#markersetroty"
    },
    {
        name: "Remove",
        description: "Removes the marker.",
        link: "/docs/lua-scripting/lua-lib/marker#markerremove"
    },
    {
        name: "SetTexture(texturePath)",
        description: "Sets the texture of the marker.",
        link: "/docs/lua-scripting/lua-lib/marker#markersettexture"
    },
    {
        name: "SetTexture(textureId)",
        description: "Sets the texture of the marker using an asset from the public CDN.",
        link: "/docs/lua-scripting/lua-lib/marker#markersettexture-1"
    },
    {
        name: "GetBehavior",
        description: "Returns any matching behavior by its type name.",
        link: "/docs/lua-scripting/lua-lib/marker#markergetbehavior"
    }
]

const TextureFunctions = [
    {
        name: "N/A",
        description: "Texture has no helper functions. Creation is done using the Instance global class.",
        link: "/docs/lua-scripting/lua-lib/texture"
    }
]

const TrailFunctions = [
    {
        name: "Focus",
        description: "Focuses the trail.",
        link: "/docs/lua-scripting/lua-lib/trail#trailfocus"
    },
    {
        name: "Unfocus",
        description: "Unfocuses the trail.",
        link: "/docs/lua-scripting/lua-lib/trail#trailunfocus"
    },
    {
        name: "Interact",
        description: "Triggers the trail.",
        link: "/docs/lua-scripting/lua-lib/trail#trailinteract"
    },
    {
        name: "Remove",
        description: "Removes the trail.",
        link: "/docs/lua-scripting/lua-lib/trail#trailremove"
    },
    {
        name: "GetBehavior",
        description: "Returns any matching behavior by its type name.",
        link: "/docs/lua-scripting/lua-lib/trail#trailgetbehavior"
    }
]

const Vector3Functions = [
    {
        name: "Length",
        description: "Calculates the length of a vector.",
        link: "/docs/lua-scripting/lua-lib/vector3#vector3length"
    },
    {
        name: "Dot",
        description: "Returns the dot product of this vector and another.",
        link: "/docs/lua-scripting/lua-lib/vector3#vector3dot"
    },
    {
        name: "Normalize",
        description: "Normalizes the vector.",
        link: "/docs/lua-scripting/lua-lib/vector3#vector3normalize"
    },
    {
        name: "Cross",
        description: "Returns the cross product of this vector and another.",
        link: "/docs/lua-scripting/lua-lib/vector3#vector3cross"
    }
]

const Types = [
    ["Category", "/docs/lua-scripting/lua-lib/category", "A marker pack category.", CategoryFunctions],
    ["Color", "/docs/lua-scripting/lua-lib/color", "A color.", ColorFunctions],
    ["GameTime", "/docs/lua-scripting/lua-lib/gametime", "A table containing two timespans.", GameTimeFunctions],
    ["Guid", "/docs/lua-scripting/lua-lib/guid", "A unique identifier.", GuidFunctions],
    ["IBehavior", "/docs/lua-scripting/lua-lib/ibehavior", "A behavior.", IBehaviorFunctions],
    ["IPathable", "/docs/lua-scripting/lua-lib/ipathable", "A pathable.", IPathableFunctions],
    ["Marker", "/docs/lua-scripting/lua-lib/marker", "A marker pack marker.", MarkerFunctions],
    ["Texture", "/docs/lua-scripting/lua-lib/texture", "A marker pack texture.", TextureFunctions],
    ["Trail", "/docs/lua-scripting/lua-lib/trail", "A marker pack trail.", TrailFunctions],
    ["Vector3", "/docs/lua-scripting/lua-lib/vector3", "A 3D vector. Has built in functions for vector operations (addition, subtraction, multiplication, etc).", Vector3Functions]
]

function createData(className, classLink, description, functions) {
    return {
        class: className,
        classLink: classLink,
        description: description,
        functions: functions
    };
}

const rows = Types.map((row) => createData(row[0], row[1], row[2], row[3]))

export default function TypesTable() {
    return (
        <CollapsibleTable rows={rows} />
    );
}