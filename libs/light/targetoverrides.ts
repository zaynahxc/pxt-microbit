namespace light {
    export function sendBuffer(data: DigitalInOutPin, clk: DigitalInOutPin, mode: number, buf: Buffer): void {
        const dataPin = data as MicrobitPin;
        sendBufferAsm(buf, dataPin.id);
    }

    //% shim=lightSendBufferAsm
    function sendBufferAsm(buf: Buffer, pin: DigitalPin) {

    }
}