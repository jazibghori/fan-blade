let duty = 0
basic.forever(function () {
    while (duty < 1023) {
        pins.analogWritePin(AnalogPin.P0, duty)
        duty = duty + 100
        basic.pause(10)
    }
    while (duty > 0) {
        pins.analogWritePin(AnalogPin.P0, duty)
        duty = duty - 1
        basic.pause(10)
    }
    basic.pause(2000)
})
