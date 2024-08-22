// set palette before creating screen, which initializes the display
screenhelpers.setPalette(hex`000000ffffffff2121ff93c4ff8135fff609249ca378dc52003fad87f2ff8e2ec4a4839f5c406ce5cdc491463d000000`)

//% whenUsed
const screen: ScreenBitmap = createScreen();

//% shim=pxt::updateScreen
export function updateScreen(img: Bitmap): void { }

export function createScreen() {
    const img = bitmap.create(
        screenhelpers.displayWidth(), // control.getConfigValue(DAL.CFG_DISPLAY_WIDTH, 160)
        screenhelpers.displayHeight() // control.getConfigValue(DAL.CFG_DISPLAY_HEIGHT, 128)
    )
    
    return img as ScreenBitmap;
}

screen.drawLine(0,0,100,100,5)
updateScreen(screen)