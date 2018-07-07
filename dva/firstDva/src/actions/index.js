import { createAction } from 'redux-actions';
export const counterAdd = createAction('counterModel/add');    //记得加上 namespace
export const counterAsyncAdd = createAction('counterModel/asyncAdd'); 
export const asyncLink = createAction('counterModel/asyncLink');