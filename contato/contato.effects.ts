import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, filter } from 'rxjs/operators';
import { of } from 'rxjs';

import * as contatoActions from './contato.actions';
import { ContatoService } from './contato.service';

@Injectable()
export class ContatoEffects {

    constructor(
        private actions$: Actions,
        private contatoService: ContatoService,
    ) { }

    @Effect()
    loadContatoAction$ = this.actions$.pipe(
        ofType<contatoActions.ListContatoAction>(contatoActions.ContatoActions.LIST_CONTATO),
        mergeMap(payload => {
            return this.contatoService.list().pipe(
                map((response: any) => {
                    return new contatoActions.ListContatoSuccessAction(response.data);
                }),
                catchError((err: any) => {
                    return of(new contatoActions.ListContatoErrorAction(response.data));
                })
            );
        })
    );
}