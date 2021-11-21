function 原地右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    -150
    )
}
function 原地左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    150
    )
}
function 右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    200,
    makerobo.Motors.Right,
    0
    )
}
function 左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    200
    )
}
function 后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -100,
    makerobo.Motors.Right,
    -100
    )
}
function 前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    100,
    makerobo.Motors.Right,
    100
    )
}
input.onButtonPressed(Button.B, function () {
    已开始 = !(已开始)
})
function 停止 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    0
    )
}
let 右侧避障模块 = 0
let 左侧避障模块 = 0
let 已开始 = false
basic.showIcon(IconNames.Happy)
已开始 = false
basic.forever(function () {
    while (!(已开始)) {
        basic.showString("Press B to start")
        停止()
        basic.pause(100)
    }
    左侧避障模块 = pins.digitalReadPin(DigitalPin.P5)
    右侧避障模块 = pins.digitalReadPin(DigitalPin.P11)
    if (左侧避障模块 == 0 && 右侧避障模块 == 0) {
        停止()
        basic.pause(500)
        后退()
        basic.pause(500)
        if (Math.randomBoolean()) {
            原地左转()
        } else {
            原地右转()
        }
        basic.pause(500)
    } else if (左侧避障模块 == 1 && 右侧避障模块 == 0) {
        后退()
        basic.pause(200)
        原地左转()
        basic.pause(300)
    } else if (左侧避障模块 == 0 && 右侧避障模块 == 1) {
        后退()
        basic.pause(200)
        原地右转()
        basic.pause(300)
    } else {
        前进()
    }
})
