"use strict";
// var
let num1 = 24;
let tableau;
// class
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
// function
const sayMyName = (name) => { };
sayMyName("idryss");
// Enum & Tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["BASIC"] = 1] = "BASIC";
})(Role || (Role = {}));
const user1 = {
    name: "idryss",
    attributes: [10, "author"],
};
