
/**
 * Tagged bitmap literal converter
 */
//% shim=@f4 helper=bitmap::ofBuffer blockIdentity="sprites._createBitmapShim"
//% groups=["0.","1#","2T","3t","4N","5n","6G","7g","8","9","aAR","bBP","cCp","dDO","eEY","fFW"]
//function bmp(lits: any, ...args: any[]): Bitmap { return null }

/*
// set palette before creating screen, so the JS version has the right BPP
bitmap.setPalette(hex`__palette`)
//% whenUsed
const screen = _screen_internal.createScreen();

namespace bitmap {
    //% shim=pxt::setPalette
    export function setPalette(buf: Buffer) { }
}

namespace _screen_internal {
    //% shim=pxt::updateScreen
    function updateScreen(img: Bitmap): void { }
    //% shim=pxt::updateStats
    function updateStats(msg: string): void { }

    //% parts="screen"
    export function createScreen() {
        const img = bitmap.create(
            160, //control.getConfigValue(DAL.CFG_DISPLAY_WIDTH, 160),
            128) //control.getConfigValue(DAL.CFG_DISPLAY_HEIGHT, 128))

        control.__screen.setupUpdate(() => updateScreen(img))
        //control.EventContext.onStats = function (msg: string) {
        //    updateStats(msg);
        //}

        return img as ScreenBitmap;
    }
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
//% whenUsed
const screen = _screen_internal.createScreen();

namespace bitmap {
    //% shim=pxt::setPalette
    export function setPalette(buf: Buffer) { }
}

namespace _screen_internal {
    //% shim=pxt::updateScreen
    function updateScreen(img: Bitmap): void { }
    //% shim=pxt::updateStats
    function updateStats(msg: string): void { }

    //% shim=pxt::updateScreenStatusBar
    function updateScreenStatusBar(img: Bitmap): void { return }
    //% shim=pxt::setupScreenStatusBar
    function setupScreenStatusBar(barHeight: number): void { return }

    //% shim=TD_ID
    function getScreenWidth(defl: number) {
        return defl //return control.getConfigValue(DAL.CFG_ARCADE_SCREEN_WIDTH, defl)
    }

    //% shim=TD_ID
    function getScreenHeight(defl: number) {
        return defl //return control.getConfigValue(DAL.CFG_ARCADE_SCREEN_HEIGHT, defl)
    }

    export function createScreen() {
        const img = bitmap.create(getScreenWidth(160), getScreenHeight(120));
        setupScreenStatusBar(8);

        const status = bitmap.create(160, 8)
        updateScreenStatusBar(status) // clear the status area

        control.__screen.setupUpdate(() => updateScreen(img))
        //control.EventContext.onStats = function (msg: string) {
        //    status.fill(0)
        //    status.print(msg, 2, 2, 1, bitmap.font5)
        //    updateScreenStatusBar(status)
        //    updateStats(msg);
        //}

        return img as ScreenBitmap;
    }

}
