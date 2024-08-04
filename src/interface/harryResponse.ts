export interface singlepersonal {
  name: string;
  image: string;
}

export interface HarryResponse {
  characters: Character[];
  staff: Character[];
  students: Character[];
}

export interface Character {
  name: string;
  species: Species;
  gender: Gender;
  house: House;
  dateOfBirth: string;
  yearOfBirth: number | string;
  ancestry: Ancestry;
  eyeColour: string;
  hairColour: HairColour;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alive: boolean;
  image: string;
  error?: string;
  id?: string;
}

export enum Ancestry {
  Empty = "",
  HalfBlood = "half-blood",
  Muggleborn = "muggleborn",
  PureBlood = "pure-blood",
  Squib = "squib",
}

export enum Gender {
  Female = "female",
  Male = "male",
}

export enum HairColour {
  Bald = "bald",
  Black = "black",
  Blonde = "blonde",
  Brown = "brown",
  Grey = "grey",
  Red = "red",
}

export enum House {
  Empty = "",
  Gryffindor = "Gryffindor",
  Hufflepuff = "Hufflepuff",
  Ravenclaw = "Ravenclaw",
  Slytherin = "Slytherin",
}

export enum Species {
  Cat = "cat",
  HalfGiant = "half-giant",
  Human = "human",
  Werewolf = "werewolf",
}

export interface Wand {
  wood: string;
  core: Core;
  length: number | string;
}

export enum Core {
  DragonHeartstring = "dragon heartstring",
  Empty = "",
  PhoenixFeather = "phoenix feather",
  UnicornHair = "unicorn hair",
  UnicornTailHair = "unicorn tail-hair",
}

export interface RootState {
  favorite: FavoriteCharacter;
}

export interface FavoriteCharacter {
  image: string;
  name: string;
}

export interface FavoriteState {
  [key: string]: FavoriteCharacter;
}

export interface CharacterModlAdd {
  name: string;
  dateOfBirth: string;
  eyeColour: string;
  hairColour: string;
  gender: "male" | "female";
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  image: string | File | undefined;
}
