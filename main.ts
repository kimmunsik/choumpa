let 거리 = 0
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    거리 = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (거리 < 10 && 거리 != 0) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(1000)
        if (randint(1, 2) == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        }
        basic.pause(500)
    }
})
