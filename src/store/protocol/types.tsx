export interface ProtocolState {
    currentProtocol: string
}

export const SELECTT_PROTOCOL = 'SELECTT_PROTOCOL'

interface SetProtocolAction {
    type: typeof SELECTT_PROTOCOL
    payload: string
}

export type ProtocolActionTypes = SetProtocolAction