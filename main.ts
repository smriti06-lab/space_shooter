// When you press button A, your spaceship moves to the left (IF it can)
input.onButtonPressed(Button.A, function () {
    if (px > 0) {
        led.unplot(px, py)
        px += -1
    }
})
// When you press button A+B, then you reload your spaceship with 
input.onButtonPressed(Button.AB, function () {
    shoot = 1
})
// When you press button B, your spaceship moves to the right (IF it can)
input.onButtonPressed(Button.B, function () {
    if (px < 4) {
        led.unplot(px, py)
        px += 1
    }
})
let killed: number[] = []
let enemyY: number[] = []
let enemyX: number[] = []
let shoot = 0
let py = 0
let px = 0
px = 2
py = 4
let my = 3
shoot = 0
let ex = 0
let time = 0
let speed = 51
let acc = 0
for (let index = 0; index <= 4; index++) {
    enemyX[index] = randint(0, 4)
    enemyY[index] = index * -1
    killed[index] = 0
}
basic.forever(function () {
    led.plotBrightness(px, py, 255)
    for (let index = 0; index <= 4; index++) {
        if (killed[index] == 0) {
            led.unplot(enemyX[index], enemyY[index] - 1)
            led.plotBrightness(enemyX[index], enemyY[index], 255)
        }
    }
    if (shoot == 1) {
        led.plotBrightness(px, my, 55)
        for (let index = 0; index <= 4; index++) {
            if (killed[index] == 0 && (px == enemyX[index] && py == enemyY[index])) {
                killed[index] = 1
            }
        }
        basic.pause(25)
        led.unplot(px, my)
        my += -1
    }
    if (time > speed) {
        time = 0
        acc += 1
    }
})
