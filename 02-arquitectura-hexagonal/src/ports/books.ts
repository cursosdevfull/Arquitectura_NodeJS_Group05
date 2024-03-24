export type Subject =
  | "Angular"
  | "React"
  | "Vue"
  | "Svelte"
  | "Ember"
  | "Backbone"
  | "Solid"
  | "Vanilla"
  | "NodeJS"
  | "NestJS";

export interface IBook {
  bookId: number;
  subject: Subject;
}
