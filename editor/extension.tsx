/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtblocks.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtcompiler.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxteditor.d.ts" />
/// <reference path="dapjs.d.ts" />
import * as dialogs from "./dialogs";
import * as flash from "./flash";
import * as patch from "./patch";

function uwpDeployCoreAsync(resp: pxtc.CompileResult, d: pxt.commands.DeployOptions = {}): Promise<void> {
    // Go straight to flashing
    return flash.flashAsync(resp, d);
}

function deployCoreAsync(resp: pxtc.CompileResult, d: pxt.commands.DeployOptions = {}): Promise<void> {
    return pxt.usb.isPairedAsync()
        .then(isPaired => {
            if (isPaired) {
                // Already paired from earlier in the session or from previous session
                return flash.flashAsync(resp, d);
            }

            // try bluetooth if device is paired
            if (pxt.webBluetooth.isPaired())
                return pxt.webBluetooth.flashAsync(resp, d)
                    .catch(e => pxt.commands.saveOnlyAsync(resp));

            // No device paired, prompt user
            return pxt.commands.saveOnlyAsync(resp);
        });
}

pxt.editor.initExtensionsAsync = function (opts: pxt.editor.ExtensionOptions): Promise<pxt.editor.ExtensionResult> {
    pxt.debug('loading microbit target extensions...')

    const manyAny = Math as any;
    if (!manyAny.imul)
        manyAny.imul = function (a: number, b: number): number {
            const ah = (a >>> 16) & 0xffff;
            const al = a & 0xffff;
            const bh = (b >>> 16) & 0xffff;
            const bl = b & 0xffff;
            // the shift by 0 fixes the sign on the high part
            // the final |0 converts the unsigned value into a signed value
            return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
        };

    const res: pxt.editor.ExtensionResult = {
        hexFileImporters: [{
            id: "blockly",
            canImport: data => data.meta.cloudId == "microbit.co.uk" && data.meta.editor == "blockly",
            importAsync: (project, data) => {
                pxt.tickEvent('import.legacyblocks.redirect');
                return dialogs.cantImportAsync(project);
            }
        }, {
            id: "td",
            canImport: data => data.meta.cloudId == "microbit.co.uk" && data.meta.editor == "touchdevelop",
            importAsync: (project, data) => {
                pxt.tickEvent('import.legacytd.redirect');
                return dialogs.cantImportAsync(project);
            }
        }]
    };

    pxt.usb.setFilters([{
        vendorId: 0x0D28,
        productId: 0x0204,
        classCode: 0xff,
        subclassCode: 0x03
    }])

    const isUwp = !!(window as any).Windows;
    if (isUwp)
        pxt.commands.deployCoreAsync = uwpDeployCoreAsync;
    else if ((flash.canHID() || pxt.webBluetooth.hasPartialFlash()) && !pxt.BrowserUtils.isPxtElectron())
        pxt.commands.deployCoreAsync = deployCoreAsync;

    res.mkPacketIOWrapper = flash.mkPacketIOWrapper;
    res.blocklyPatch = patch.patchBlocks;
    res.showUploadInstructionsAsync = dialogs.showUploadInstructionsAsync;
    res.webUsbPairDialogAsync = dialogs.webUsbPairDialogAsync;
    return Promise.resolve<pxt.editor.ExtensionResult>(res);
}
