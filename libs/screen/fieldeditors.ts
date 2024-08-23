/**
 * Bitmap manipulation blocks
 */
//% weight=70 icon="\uf03e" color="#a5b1c2"
//% advanced=true
namespace bitmaps {
    //% blockId=screen_bitmap_picker block="%img"
    //% shim=TD_ID
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
    //% img.fieldOptions.decompileIndirectFixedInstances="true"
    //% img.fieldOptions.decompileArgumentAsString="true"
    //% img.fieldOptions.filter="!tile !dialog !background"
    //% weight=100 group="Create" duplicateShadowOnDrag
    //% help=bitmaps/sprite-bitmap
    export function _spriteBitmap(img: Bitmap) {
        return img
    }

    //% blockId=background_bitmap_picker block="%img"
    //% shim=TD_ID
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
    //% img.fieldOptions.decompileIndirectFixedInstances="true"
    //% img.fieldOptions.decompileArgumentAsString="true"
    //% img.fieldOptions.sizes="-1,-1"
    //% img.fieldOptions.filter="background"
    //% weight=100 group="Create"
    //% blockHidden=1 duplicateShadowOnDrag
    export function _screenBitmap(img: Bitmap) {
        return img
    }

    //% blockId=tilemap_bitmap_picker block="%img"
    //% shim=TD_ID
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
    //% img.fieldOptions.decompileIndirectFixedInstances="true"
    //% img.fieldOptions.sizes="10,8;16,16;32,32;48,48;64,64;16,32;32,48;32,8;64,8;20,15;40,15"
    //% weight=100 group="Create"
    //% blockHidden=1 duplicateShadowOnDrag
    export function _tileMapBitmap(img: Bitmap) {
        return img
    }

    //% blockId=tile_bitmap_picker block="%img"
    //% shim=TD_ID
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
    //% img.fieldOptions.decompileIndirectFixedInstances="true"
    //% img.fieldOptions.sizes="16,16;32,32;8,8"
    //% img.fieldOptions.filter="tile"
    //% weight=100 group="Create"
    //% blockHidden=1 duplicateShadowOnDrag
    export function _tileBitmap(img: Bitmap) {
        return img
    }

    //% blockId=tileset_tile_picker block="%tile"
    //% shim=TD_ID
    //% tile.fieldEditor="tileset"
    //% tile.fieldOptions.decompileIndirectFixedInstances="true"
    //% weight=10 blockNamespace="scene" group="Tiles"
    //% blockHidden=1 duplicateShadowOnDrag
    export function _tile(tile: Bitmap) {
        return tile
    }

    //% blockId=dialog_bitmap_picker block="%img"
    //% shim=TD_ID
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
    //% img.fieldOptions.decompileIndirectFixedInstances="true"
    //% img.fieldOptions.decompileArgumentAsString="true"
    //% img.fieldOptions.sizes="15,15;18,18;21,21;24,24;9,9;12,12"
    //% img.fieldOptions.filter="dialog"
    //% weight=100 group="Create"
    //% blockHidden=1 duplicateShadowOnDrag
    export function _dialogBitmap(img: Bitmap) {
        return img
    }

    /**
     * An bitmap
     * @param bitmap the bitmap
     */
    //% blockId=bitmap_picker block="$bitmap" shim=TD_ID
    //% bitmap.fieldEditor="sprite"
    //% bitmap.fieldOptions.taggedTemplate="img"
    //% bitmap.fieldOptions.decompileIndirectFixedInstances="true"
    //% bitmap.fieldOptions.decompileArgumentAsString="true"
    //% weight=0 group="Create"
    //% help=bitmaps/bitmap
    export function _bitmap(bitmap: Bitmap): Bitmap {
        return bitmap;
    }

    //% blockId=colorindexpicker block="%index" blockHidden=true shim=TD_ID
    //% index.fieldEditor="colornumber"
    //% index.fieldOptions.valueMode="index"
    //% index.fieldOptions.decompileLiterals="true"
    export function __colorIndexPicker(index: number) {
        return index;
    }

    /**
     * A position picker
     */
    //% blockId=positionPicker block="%index" blockHidden=true shim=TD_ID
    //% index.fieldEditor="position" color="#ffffff" colorSecondary="#ffffff"
    //% index.fieldOptions.decompileLiterals="true"
    export function __positionPicker(index: number) {
        return index;
    }
}
