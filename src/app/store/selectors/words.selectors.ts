import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Word } from "../models/word.model";

export const selectWords = createFeatureSelector<ReadonlyArray<Word>>('words');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectWordCollection = createSelector(
    selectWords,
    selectCollectionState,
    (words, collection) => {
        return collection.map((id) => words.find((word) => word.id === id));
    }
);