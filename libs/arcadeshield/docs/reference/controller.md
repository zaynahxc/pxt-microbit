# Controller

Respond to game controller buttons.

```cards
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})
controller.A.isPressed()
controller.dx(100)
controller.dy(100)
```

## Multiplayer

```cards
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {})
controller.player2.onEvent(ControllerEvent.Connected, function () {})
controller.player2.isPressed(ControllerButton.A)
```

## See also

[on event](/reference/controller/button/on-event),
[is pressed](/reference/controller/button/is-pressed),
[on button event](/reference/controller/button/on-buttonevent),
[set repeat default](/reference/controller/set-repeat-default)
