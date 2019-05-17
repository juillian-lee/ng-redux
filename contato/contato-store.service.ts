import { Injectable } from "@angular/core";

import { Store, createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../app.reducer';
import * as actions from './contato.actions';
import * as state from './contato.state';

@Injectable()
export class ContatoStoreService {

  constructor(private store: Store<AppState>) { }

  private contatoState = createFeatureSelector<state.ContatoState>(state.STATE_NAME);
  private isLoading = createSelector(this.contatoState, state.selectIsLoading);
  private contatos = createSelector(this.contatoState, state.selectContatos);


  getIsLoading() {
    return this.store.select(this.isLoading);
  }

  getContatos() {
    return this.store.select(this.contatos);
  }

  dispatchListContatoAction() {
    this.store.dispatch(new actions.ListContatoAction());
  }

}