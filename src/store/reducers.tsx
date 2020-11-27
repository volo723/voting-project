import {protocolReducer} from './protocol/reducers'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    protocol: protocolReducer
})

export type RootState = ReturnType<typeof rootReducer>
