namespace SpriteKind {
    export const Building = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sprites.destroy(mySprite2, effects.fire, 1)
    DuplicationIndex = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (DuplicationIndex == 0) {
        mySprite2 = sprites.create(assets.image`MainPlayer`, SpriteKind.Player)
        mySprite2.setStayInScreen(true)
        mySprite2.setPosition(150, 55)
        controller.moveSprite(mySprite2, -100, 100)
        DuplicationIndex = 1
    }
})
let DuplicationIndex = 0
let mySprite2: Sprite = null
let mySprite = sprites.create(assets.image`MainPlayer`, SpriteKind.Player)
let AlienSpawnPoint = sprites.create(assets.image`AlienSpawnPoint`, SpriteKind.Building)
let Mirror = sprites.create(assets.image`myImage`, SpriteKind.Building)
controller.moveSprite(mySprite, 100, 100)
AlienSpawnPoint.setPosition(150, 55)
mySprite.setPosition(10, 55)
mySprite.setStayInScreen(true)
Mirror.setScale(1, ScaleAnchor.Bottom)
