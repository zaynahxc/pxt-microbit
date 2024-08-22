/**
 * Tagged bitmap literal converter
 */
//% shim=@f4 helper=bitmap::ofBuffer blockIdentity="bitmaps._spriteBitmap"
//% groups=["0.","1#","2T","3t","4N","5n","6G","7g","8","9","aAR","bBP","cCp","dDO","eEY","fFW"]
function bmp(lits: any, ...args: any[]): Bitmap { return null; }

declare const screen: ScreenBitmap;

namespace bitmap {
    /**
    * Get the screen image
    */
    //% blockNamespace="bitmaps" group="Create"
    //% blockId=imagescreen block="screen"
    //% help=bitmaps/screen-bitmap
    export function screenImage(): Bitmap {
        return screen;
    }
}