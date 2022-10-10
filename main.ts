function meet_Afstand () {
    afstand = sonar.ping(
    DigitalPin.P4,
    DigitalPin.P11,
    PingUnit.MicroSeconds
    ) / 58
}
input.onGesture(Gesture.Shake, function () {
	
})
let afstand = 0
let afstand_voor_stoppen = 0
basic.forever(function () {
    meet_Afstand()
    if (afstand < afstand_voor_stoppen) {
        aiCaptainRobot.leftOneStep()
        aiCaptainRobot.leftOneStep()
    } else {
        aiCaptainRobot.forwardOneStep()
    }
})
