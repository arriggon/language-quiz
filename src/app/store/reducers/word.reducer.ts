import { createReducer, on } from "@ngrx/store";
import { retrievedWordList } from "../actions/word.action";
import { Word } from "../models/word.model";

export const initialState: ReadonlyArray<Word> = [];

export const wordsReducer = createReducer(
    initialState,
    on(retrievedWordList, (state, { words }) => words)
);