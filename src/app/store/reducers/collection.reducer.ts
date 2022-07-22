import { createReducer, on } from '@ngrx/store';
import { addWord, removeWord } from '../actions/word.action';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
    initialState,
    on(addWord, (state, { wordId }) => state.indexOf(wordId) > -1 ? state : [...state, wordId]),
    on(removeWord, (state, { wordId }) => state.filter((id) => id !== wordId))
);