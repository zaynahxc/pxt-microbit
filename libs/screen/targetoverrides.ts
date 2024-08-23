// This file would be usually overridden by the target.
/*
const screen = bitmap.create(178, 128) as ScreenBitmap

namespace _screen_internal {
    //% shim=pxt::updateScreen
    function updateScreen(img: Bitmap): void {}
    //% shim=pxt::updateStats
    function updateStats(msg: string): void {}
    control.__screen.setupUpdate(() => updateScreen(screen))
    //control.EventContext.onStats = function(msg: string) { 
    //    updateStats(msg);
    //}
}
*/

/**
 * Tagged bitmap literal converter
 */
//% shim=@f4 helper=bitmap::ofBuffer blockIdentity="bitmaps._spriteBitmap"
//% groups=["0.","1#","2T","3t","4N","5n","6G","7g","8","9","aAR","bBP","cCp","dDO","eEY","fFW"]
function bmp(lits: any, ...args: any[]): Bitmap { return null }

// set palette before creating screen, so the JS version has the right BPP
bitmap.setPalette(hex`__palette`)
let screen = bitmap.create(_screen_internal.getScreenWidth(160), _screen_internal.getScreenHeight(120)) as ScreenBitmap

namespace bitmap {
    //% shim=pxt::setPalette
    export function setPalette(buf: Buffer) { }
}

namespace _screen_internal {
    //% shim=pxt::updateScreen
    function updateScreen(img: Bitmap): void { }
    //% shim=pxt::updateStats
    function updateStats(msg: string): void { }

    //% shim=TD_ID
    export function getScreenWidth(defl: number) {
        return 160 //return control.getConfigValue(DAL.CFG_ARCADE_SCREEN_WIDTH, defl)
    }

    //% shim=TD_ID
    export function getScreenHeight(defl: number) {
        return 128 //return control.getConfigValue(DAL.CFG_ARCADE_SCREEN_HEIGHT, defl)
    }

    control.__screen.setupUpdate(() => updateScreen(screen))
    //control.EventContext.onStats = function (msg: string) {
    //    updateStats(msg);
    //}
}
