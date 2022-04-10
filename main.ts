let 거리 = 0
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    거리 = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (true) {
    	
    }
})
