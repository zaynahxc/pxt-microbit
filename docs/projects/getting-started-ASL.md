# Getting Started in ASL

## 1. Introduction @unplugged

Learn how to use the @boardname@'s lights to make a flashing heart and send a secret message!
(Want to learn how lights work? [Watch this video](https://youtu.be/qqBmvHD5bCw)).

## 1. Understanding the workspace

📋 **Getting situated** 📋

Your MakeCode workspace has 3 main areas: your **@boardname@ simulator** on the left, the **toolbox** in the middle from which you can drag and drop blocks, and your **workspace** on the right that holds your code.

---

► Notice that your toolbox has various categories. From the ``||basic:Basic||`` category, grab the ``||basic:show leds||`` block and snap it into your ``||basic:forever||`` container. <br />
💡 We are using the ``Forever`` container because we want our code to run forever!

► Draw a heart!

![An animation that shows how to drag a block and paint a heart](/static/mb/projects/flashing-heart/showleds.gif)

## 2. Making the heart flash

✨ **Adding in some flash** ✨

In order to make the heart flash, let's have the @boardname@ switch between the heart you drew and an empty light setup.

---

► From the ``||basic:Basic||`` category in your toolbox, grab another ``||basic:show leds||`` block and snap it into the **bottom** of your ``||basic:Forever||`` container. <br />
💡 We chose to put the empty LED block below your filled LED block because your code runs from top to bottom. This means your heart will flash even if you add new code in your ``Forever`` container!

```blocks
basic.forever(function() {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .`);
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .`);
})
```

## 3. Looking at the simulator

👀 **Check your simulator!** 👀

On the left of your screen, there is a virtual @boardname@ that we call your **simulator**. Look at it right now - you should see the heart you drew blinking on the screen. <br />
💡 You can click on the light bulb button on this instruction panel to check and see if your code matches ours! We chose to fill in our flashing heart.

```blocks
basic.forever(function() {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .`);
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .`);
})
```

## 4. Adding a message

💬 **Shh, it's a secret message** 💬

Now that we have a flashing heart, let's add in a secret message to send whenever someone presses the A button.

---

► From the ``||input:Input||`` category in your toolbox, grab an ``||input:on button [A] pressed||`` container and drag it into an empty area in your workspace. <br />
💡 This container allows you to add code for what happens if someone presses the A button on the @boardname@!

```blocks
input.onButtonPressed(Button.A, function () {
})
```

## 5. Adding a message pt. 2

► From ``||basic:Basic||``, grab ``||basic:show string ["Hello!"]||`` and snap it into your empty ``||input:on button [A] pressed||`` container.

► Replace ``Hello!`` with a secret message!

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    basic.showString("secret message!")
})
```

## 6. Testing on the simulator

👀 **Remember to test!** 👀

On your simulator, press the A button (it's the black circle above the letter A on the @boardname@). You should see your message appear!

```blocks
basic.forever(function() {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .`);
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .`);
})
input.onButtonPressed(Button.A, function () {
    // @highlight
    basic.showString("secret message!")
})
```

## 7. Downloading onto a @boardname@

🎉 **You did it!** 🎉

If you have a physical @boardname@, use a micro-USB cable to connect it to your computer and click ``|Download|`` to transfer your code onto it.

Watch the hearts flash ✨. If you have anyone you want to send your secret message to, make sure they press the right button to see it!