namespace pxsim {
    export function __startAudioStream(pull: RefAction, sampleRate: number, ) {
        let buff = new RefBuffer(new Uint8Array(512));

        async function audioLoop() {
            while (true) {
                await runtime.runFiberAsync(pull, buff);
            }
        }

        const arr = new Float32Array(buff.data.length);

        AudioContextManager.playPCMBufferStreamAsync(() => {
            for (let i = 0; i < buff.data.length; i++) {
                // Buffer is (0, 255) we need to map it to (-1, 1)
                arr[i] = ((buff.data[i] - 128) / 128);
            }
            return arr;
        }, sampleRate, 0.03, () => false)

        audioLoop();
    }
}