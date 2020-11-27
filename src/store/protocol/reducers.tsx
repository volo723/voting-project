import {
    ProtocolState,
    ProtocolActionTypes,
    SELECTT_PROTOCOL
} from './types'

const initialState: ProtocolState = {
    currentProtocol: ''
}

export function protocolReducer(
    state = initialState,
    action: ProtocolActionTypes
): ProtocolState {
    switch (action.type) {
        case SELECTT_PROTOCOL:
            return {
                currentProtocol: action.payload
            }
        default:
            return state
    }
}