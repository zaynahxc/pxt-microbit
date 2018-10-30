# Head Band

## Introduction @unplugged

Learn sign language by playing a game of charage with the @boardname! In this game,
the @boardname@ is help on the forehead of the player and other players have to mimic the drawing displayed on the screen. Tilting forward (screen down) earns a point, tilting backward skips the letter, game ends after 30 seconds.

## Step 1 @fullscreen

Add the ``||input:on shake||`` block and change it to ``||input:logo up||``.

```blocks
input.onGesture(Gesture.LogoUp, function () {
})
```

## Step 2 @fullscreen

Make a new variable ``||variables:guess||`` and assign it to a ``||math:pick random||`` block to generate a number.

```blocks
let guess = 0
input.onGesture(Gesture.LogoUp, function () {
    guess = Math.randomRange(1, 3)
})
```

## Step 3 @fullscreen

Add ``||logic:if||`` blocks and ``||logic:=||`` blocks to run code for each value - just like in 
the rock paper scissors game. For each value, show a different icon.

```blocks
let guess = 0
input.onGesture(Gesture.LogoUp, function () {
    guess = Math.randomRange(1, 3)
    if (guess == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (guess == 2) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Ghost)
    }
})
```

## Step 4 @fullscreen

Add a ``||input:on shake||`` block and change it to ``||input:on screen down||`` and ``||input:on screen up||``. The screen down means success so ``||game:add score||`` 1, screen up means failure so ``||game:add score||`` **-1**.

```blocks
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
input.onGesture(Gesture.ScreenUp, function () {
    game.addScore(-1)
})
```

## Step 6 @fullscreen

Add a ``||game:start countdown||`` in ``||basic:on start||`` to limit the game time to 10 seconds (or more).

```blocks
game.startCountdown(10000)
```

## Step 7 @fullscreen

Include the range in random and keep add other drawings to your game!