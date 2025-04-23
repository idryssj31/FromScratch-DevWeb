// var
let num1 = 24;
let tableau: number;

// interface
interface Player {
  age: number;
  id: number;
}

// class
class Singer {
  id: number;
  name: string;
  alive?: boolean;
  constructor(id: number, name: string, alive?: boolean) {
    this.id = id;
    this.name = name;
    this.alive = alive;
  }
}

// function
const sayMyName = (name: string) => {};
sayMyName("idryss");

// Enum & Tuple
enum Role {
  ADMIN,
  BASIC,
}

interface User {
  name: string;
  attributes: [number, string];
}

const user1: User = {
  name: "idryss",
  attributes: [10, "author"],
};
