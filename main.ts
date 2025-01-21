let action = [
"TD",
"GA",
"DR",
"TD",
"AR"
]
basic.forever(function () {
    if (Maqueen_V5.Ultrasonic() < 10) {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 255)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 0)
        basic.pause(900)
        if (Maqueen_V5.Ultrasonic() < 10) {
            Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 0)
            Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 255)
            basic.pause(900)
        }
    } else {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
    }
})
