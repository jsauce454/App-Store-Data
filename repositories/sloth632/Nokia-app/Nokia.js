var keyboard = require("keyboard");
var audio = require("audio");
var display = require("display");

var sprite = display.createSprite();

var tones = [
  [659, 167],
  [587, 167],
  [370, 333],
  [415, 333],
  [554, 167],
  [494, 167],
  [294, 333],
  [330, 333],
  [494, 167],
  [440, 167],
  [277, 333],
  [330, 333],
  [440, 667]
];

while (true) {

    if (keyboard.getEscPress(true)) break;

    sprite.fill(0);
    sprite.setTextColor(255,255,255);
    sprite.setTextSize(2);
    sprite.setTextAlign(1);
    sprite.drawText("Nokia ringtone", display.width()/2, display.height()/2 - 10);
    sprite.setTextSize(1);
    sprite.drawText("Press SELECT to play", display.width()/2, display.height()/2 + 10);
    sprite.pushSprite();

    if (keyboard.getSelPress(true)) {
        for (var i = 0; i < tones.length; i++) {
            audio.tone(tones[i][0], tones[i][1]);
        }
    }
}
