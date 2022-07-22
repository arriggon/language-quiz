import { Word } from "./models/word.model";

export interface AppState {
    words: ReadonlyArray<Word>;
    collection: ReadonlyArray<string>;
}