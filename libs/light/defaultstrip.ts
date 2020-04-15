namespace light {
    let _defaultStrip: LightStrip;
    /**
     * Gets the default light strip
     */
    //% help=light/default-strip
    //% blockId="neopixel_default_strip" block="default strip"
    //% weight=110 blockGap=8
    //% advanced=true
    //% parts=pixels
    export function defaultStrip(): LightStrip {
        if (_defaultStrip) return _defaultStrip;

        return _defaultStrip = light.createStrip(DigitalPin.P1, 30);
    }
}