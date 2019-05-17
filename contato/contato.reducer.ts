import * as contatoState from './contato.state';
import * as actions from './contato.actions';

export function contatoReducer(
    state: contatoState.ContatoState = contatoState.initialState,
    action: actions.TypesActions
): contatoState.ContatoState {

    switch (action.type) {
        case actions.ContatoActions.LIST_CONTATO:
            return {
                ...state,
                isLoading: true,
                list: []
            }
        case actions.ContatoActions.LIST_CONTATO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.payload
            }
        case actions.ContatoActions.LIST_CONTATO_ERROR:
            return {
                ...state,
                isLoading: false,
                list: []
            }
        default:
            return state;
    }

}