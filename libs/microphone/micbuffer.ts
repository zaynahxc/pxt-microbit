namespace input {
    //% shim=microphone::_readyEvent
    function _readyEvent(): number {
        return 0xffff
    }

    //% shim=microphone::_pull
    function _pull(): Buffer {
        return null
    }

    export function onSoundData(cb: (data: Buffer) => void) {
        control.onEvent(DAL.DEVICE_ID_NOTIFY, _readyEvent(), () => {
            const buf = _pull()
            if (buf)
                cb(buf)
        })
    }
}