import { NgRxAction } from '../NgRxAction';

export enum ContatoActions {
    LIST_CONTATO = '[CONTATO] - List CONTATO - ',
    LIST_CONTATO_SUCCESS = '[CONTATO] - List CONTATO Success - ',
    LIST_CONTATO_ERROR = '[CONTATO] - Error List CONTATO - ',
}

export class ListContatoAction extends NgRxAction<any> {
    readonly type = ContatoActions.LIST_CONTATO;
}

export class ListContatoSuccessAction extends NgRxAction<any> {
    readonly type = ContatoActions.LIST_CONTATO_SUCCESS;
}

export class ListContatoErrorAction extends NgRxAction<any> {
    readonly type = ContatoActions.LIST_CONTATO_ERROR;
}


export type TypesActions =
    ListContatoAction
    | ListContatoSuccessAction
    | ListContatoErrorAction