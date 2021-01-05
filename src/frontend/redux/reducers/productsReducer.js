import produce from 'immer'
import { arrToMap } from '../utils'
import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants'

const initialState = {
    loading: {},
    loaded: {},
    error: null,
    entities: {},
};

// { [productId]: product }
const productsReducer = (state = initialState, action) =>
    produce(state, (draft) => {
        const {type, response, error, categoryId} = action;

        switch (type) {
            case LOAD_PRODUCTS + REQUEST: {
                draft.loading[categoryId] = true;
                break;
            }
            case LOAD_PRODUCTS + SUCCESS: {
                draft.loading[categoryId] = false;
                draft.loaded[categoryId] = true;
                draft.error = null;
                draft.entities = { ...draft.entities, ...arrToMap(response) };
                break;
            }
            case LOAD_PRODUCTS + FAILURE: {
                draft.loading[categoryId] = false;
                draft.loaded[categoryId] = false;
                draft.error = error;
                break;
            }
            default:
                return;
        }
    })

export default productsReducer
