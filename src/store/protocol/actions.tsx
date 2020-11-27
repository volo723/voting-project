import { SELECTT_PROTOCOL, ProtocolActionTypes } from './types'

export function selectProtocol(protocol: string): ProtocolActionTypes {
    return {
        type: SELECTT_PROTOCOL,
        payload: protocol
    }
}