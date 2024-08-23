//% fixedInstances decompileIndirectFixedInstances
interface Bitmap {
    /**
     * Fill a rectangle
     */
    //% helper=bitmapFillRect blockNamespace="bitmaps" inlineInputMode="inline" group="Drawing"
    //% block="fill rectangle in %picture=variables_get at x %x y %y width %w height %h %c=colorindexpicker"
    //% help=bitmaps/bitmap/fill-rect
    fillRect(x: number, y: number, w: number, h: number, c: color): void;

    /**
     * Replace colors in a rectangle
     */
    //% helper=bitmapMapRect
    mapRect(x: number, y: number, w: number, h: number, colorMap: Buffer): void;

    /**
     * Draw a line
     */
    //% helper=bitmapDrawLine blockNamespace="bitmaps" inlineInputMode="inline" group="Drawing"
    //% block="draw line in %picture=variables_get from x %x0 y %y0 to x %x1 y %y1 %c=colorindexpicker"
    //% help=bitmaps/bitmap/draw-line
    drawLine(x0: number, y0: number, x1: number, y1: number, c: color): void;

    /**
     * Draw an empty rectangle
     */
    //% helper=bitmapDrawRect blockNamespace="bitmaps" inlineInputMode="inline" group="Drawing"
    //% block="draw rectangle in %picture=variables_get at x %x y %y width %w height %h %c=colorindexpicker"
    //% help=bitmaps/bitmap/draw-rect
    drawRect(x: number, y: number, w: number, h: number, c: color): void;

    /**
     * Set pixel color
     */
    //% shim=BitmapMethods::setPixel blockNamespace="bitmaps" group="Drawing"
    //% block="set %picture=variables_get color at x %x y %y to %c=colorindexpicker"
    //% help=bitmaps/bitmap/set-pixel
    setPixel(x: int32, y: int32, c: int32): void;

    /**
     * Get a pixel color
     */
    //% shim=BitmapMethods::getPixel blockNamespace="bitmaps" group="Drawing"
    //% block="%picture=variables_get color at x %x y %y"
    //% help=bitmaps/bitmap/get-pixel
    getPixel(x: int32, y: int32): int32;

    /**
     * Fill entire bitmap with a given color
     */
    //% shim=BitmapMethods::fill blockNamespace="bitmaps" group="Drawing"
    //% block="fill %picture=variables_get with %c=colorindexpicker"
    //% help=bitmaps/bitmap/fill
    fill(c: int32): void;

    /**
     * Return a copy of the current bitmap
     */
    //% shim=BitmapMethods::clone blockNamespace="bitmaps" group="Create"
    //% block="clone %picture=variables_get"
    //% help=bitmaps/bitmap/clone
    clone(): Bitmap;

    /**
     * Flips (mirrors) pixels horizontally in the current bitmap
     */
    //% shim=BitmapMethods::flipX blockNamespace="bitmaps" group="Transformations"
    //% block="flip %picture=variables_get horizontally"
    //% help=bitmaps/bitmap/flip-x
    flipX(): void;

    /**
     * Flips (mirrors) pixels vertically in the current bitmap
     */
    //% shim=BitmapMethods::flipY blockNamespace="bitmaps" group="Transformations"
    //% block="flip %picture=variables_get vertically"
    //% help=bitmaps/bitmap/flip-y
    flipY(): void;

    /**
     * Every pixel in bitmap is moved by (dx,dy)
     */
    //% shim=BitmapMethods::scroll blockNamespace="bitmaps" group="Transformations"
    //% help=bitmaps/bitmap/scroll
    scroll(dx: int32, dy: int32): void;

    /**
     * Replaces one color in an bitmap with another
     */
    //% shim=BitmapMethods::replace blockNamespace="bitmaps" group="Transformations"
    //% block="change color in %picture=variables_get from %from=colorindexpicker to %to=colorindexpicker"
    //% help=bitmaps/bitmap/replace
    replace(from: int32, to: int32): void;

    /**
     * Returns true if the provided bitmap is the same as this bitmap,
     * otherwise returns false.
     */
    //% shim=BitmapMethods::equals
    //% blockNamespace="bitmaps" group="Compare"
    //% block="$this is equal to bitmap $other"
    //% this.shadow=variables_get
    //% this.defl="picture"
    //% other.shadow=screen_bitmap_picker
    //% help=bitmaps/bitmap/equals
    equals(other: Bitmap): boolean;

    //% shim=BitmapMethods::isStatic
    isStatic(): boolean;

    //% shim=BitmapMethods::revision
    revision(): number;
}

declare namespace bitmap {
    //% blockNamespace="bitmaps"
    //% block="create bitmap width %width height %height" group="Create"
    //% help=bitmaps/create
    function create(width: number, height: number): Bitmap;
}