# Measuring Distance

Now that we have identified the values needed to calibrate the shoe, we can create the final program that will be running on the runner watch.

When pressing A, the watch starts measuring. When pressing B, the watch displays the distance and time.


```blocks
let A = 0.135
let B = 1.2
let distance = 0
let duration = 0
let startTime = 0
let lastStepTime = 0
let now = 0
let stepDuration = 0
let recording = false
input.onButtonPressed(Button.A, function () {
    distance = 0
    startTime = input.runningTime()
    lastStepTime = startTime
    recording = true
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    recording = false
    basic.showString("DISTANCE")
    basic.showNumber(distance)
    basic.showString("DURATION")
    basic.showNumber(duration)
})

radio.onReceivedNumber(function (receivedNumber: number) {
    led.plot(0, 0)
    if (recording) {
        now = input.runningTime()
        duration = (now - startTime) / 1000
        stepDuration = (now - lastStepTime) / 1000
        distance += A / stepDuration + B
        lastStepTime = now
    }
})
basic.showString("RS-SHOE")
```