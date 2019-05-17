export const STATE_NAME = 'contato';

export interface ContatoState {
    isLoading: boolean;
    list: any[];
    contato: any;

}

export const initialState: ContatoState = {
    isLoading: false,
    list: [],
    contato: null
}

export const selectIsLoading = (state: ContatoState) => state.isLoading;
export const selectContato = (state: ContatoState) => state.contato;
export const selectListContato = (state: ContatoState) => state.list;
