// The fallback logic below still requires level detection.
// It's only kept with a view to syncing with the common-packages in future.

#include "pxt.h"

#if MICROBIT_CODAL

#include "LevelDetector.h"
#include "LevelDetectorSPL.h"
#include "DataStream.h"


namespace pxt {

class WMicrophone {
  public:
    NRF52ADCChannel *microphone;
    StreamNormalizer normalizer;
    LevelDetectorSPL level;
    WMicrophone()
        : microphone(uBit.adc.getChannel(uBit.io.microphone)),
          normalizer(microphone->output, 1.0f, true, DATASTREAM_FORMAT_UNKNOWN, 10),
          level(normalizer.output, 75.0, 60.0, 9, 52, DEVICE_ID_MICROPHONE) {
        uBit.io.runmic.setDigitalValue(1);
        uBit.io.runmic.setHighDrive(true);
        microphone->setGain(7, 0);
    }
};
SINGLETON(WMicrophone);

codal::LevelDetectorSPL *getMicrophoneLevel() {
    auto wmic = getWMicrophone();
    return wmic ? &(wmic->level) : NULL;
}

} // namespace pxt
#endif