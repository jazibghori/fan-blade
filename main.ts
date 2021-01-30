input.onButtonPressed(Button.A, function () {
    while (duty < 1023) {
        pins.analogWritePin(AnalogPin.P0, duty)
        duty = duty + 10
        basic.pause(10)
    }
    basic.showIcon(IconNames.Heart)
    pins.analogWritePin(AnalogPin.P2, 1023)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    pins.analogWritePin(AnalogPin.P2, 0)
    while (duty > 0) {
        duty = duty - 10
        pins.analogWritePin(AnalogPin.P0, duty)
        basic.pause(10)
    }
})
let duty = 0
duty = 0
