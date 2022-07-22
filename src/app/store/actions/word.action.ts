import { createAction, props } from "@ngrx/store";
import { Word } from "../models/word.model";

export const addWord = createAction(
    '[Word List] Add Word',
    props<{ wordId: string }>()
);

export const removeWord = createAction(
    '[Word List] Remove Word',
    props<{ wordId: string }>()
);

export const retrievedWordList = createAction(
    '[Word List]  Retrieve Words Success',
    props<{ words: ReadonlyArray<Word> }>()
);