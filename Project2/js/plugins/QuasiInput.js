//============================================================================
// Quasi Input
// Version: 1.04
// Last Update: May 28, 2016
//============================================================================
// ** Terms of Use
// ** This does not follow my normal terms!!
//  * This is free to use for ALL projects, including commercial.
//    This does not mean you can use any of the plugins that require this
//    for free. You still have to follow the respective plugin's terms.
//  * You are free to modify this script or create your own based off this,
//    and distrubite it. I just ask you leave a special thanks to Quasi somewhere.
//============================================================================
// How to install:
//  - Save this file as "QuasiInput.js" in your js/plugins/ folder
//  - Add plugin through the plugin manager
//  - Configure as needed
//  - Open the Help menu for setup guide or visit one of the following:
//  - - http://forums.rpgmakerweb.com/index.php?/topic/51087-quasi-input/
//============================================================================

var Imported = Imported || {};
Imported.Quasi_Input = 1.04;

//=============================================================================
 /*:
 * @plugindesc Adds additional keys to Input class, and allows remapping keys.
 * Version 1.04
 * @author Quasi
 *
 * @param Ok
 * @desc Which buttons will trigger the ok input
 * MV Default: #enter, #space, #z
 * @default #enter, #space, #z
 *
 * @param Escape / Cancel
 * @desc Which buttons will trigger the escape / cancel input
 * MV Default: #esc, #insert, #x, #num0
 * @default #esc, #insert, #x, #num0
 *
 * @param Shift
 * @desc Which buttons will trigger the shift input
 * MV Default: #shift, #cancel
 * @default #shift, #cancel
 *
 * @param Control
 * @desc Which buttons will trigger the control input
 * MV Default: #ctrl, #alt
 * @default #ctrl, #alt
 *
 * @param Tab
 * @desc Which buttons will trigger the tab input
 * MV Default: #tab
 * @default #tab
 *
 * @param Pageup
 * @desc Which buttons will trigger the pageup input
 * MV Default: #pageup, #q
 * @default #pageup, #q
 *
 * @param Pagedown
 * @desc Which buttons will trigger the pagedown input
 * MV Default: #pagedown, #w
 * @default #pagedown, #w
 *
 * @param Left
 * @desc Which buttons will trigger the left input
 * MV Default: #left, #num4
 * @default #left, #num4
 *
 * @param Right
 * @desc Which buttons will trigger the right input
 * MV Default: #right, #num6
 * @default #right, #num6
 *
 * @param Up
 * @desc Which buttons will trigger the up input
 * MV Default: #up, #num8
 * @default #up, #num8
 *
 * @param Down
 * @desc Which buttons will trigger the down input
 * MV Default: #down, #num2
 * @default #down, #num2
 *
 * @param Debug
 * @desc Which buttons will trigger the debug input
 * MV Default: #f9
 * @default #f9
 *
 * @param ===========
 * @desc spacer
 * @default
 *
 * @param FPS
 * @desc Which button will open fps
 * MV Default: f2
 * @default f2
 *
 * @param Streched
 * @desc Which button will strech Screen
 * MV Default: f3
 * @default f3
 *
 * @param FullScreen
 * @desc Which button will trigger fullscreen
 * MV Default: f4
 * @default f4
 *
 * @param Restart
 * @desc Which button will restart the game
 * MV Default: f5
 * @default f5
 *
 * @param Console
 * @desc Which button will open console during testing
 * MV Default: f8
 * @default f8
 *
 * @help
 * =============================================================================
 * ** Remap Default Keys
 * =============================================================================
 * This allows you to change what keys input calls are related to.
 * You can set them to multiple keys by seperating each key with a comma.
 * You must use a Quasi Key ( Full available keys below)
 * Keys are case sensative!!! Means #C is not the same as #c !!IMPORTANT!!
 *
 *   Example of changing to wasd format:
 *     Set the parameter for left to:
 *         #a
 *     Set the parameter for right to:
 *         #d
 *     Set the parameter for up to:
 *         #w
 *     Set the parameter for down to:
 *         #s
 *     Set the parameter for pagedown to: (page down uses w, so we'll change to e)
 *         #pagedown, #e
 *     *Optional: Use f key instead of z in enter input
 *         #enter, #space, #f
 *
 * For FPS, Streched, FullScreen, Restart, Console you can only put 1 key!
 * Do not use the # idetifier.
 * If you want to disable one of those, set it to 0E, if you put in an
 * incorrect key, it will use default MV key
 * =============================================================================
 * ** Quasi Keys List
 * =============================================================================
 * #backspace    #tab      #enter      #shift      #ctrl
 * #alt          #esc      #space      #pageup     #pagedown
 * #left         #up       #right      #down       #escape
 *
 * Numbers: (Above letters:
 * #0   #1   #2   #3   #4   #5   #6   #7   #8   #9
 *
 * Numpad:
 * #num0    #num1      #num2     #num3      #num4
 * #num5    #num6      #num7     #num8      #num9
 *
 * Letters:
 * #a #b #c ... #z
 * (All letters between a-z US keyboard, just add a # infront)
 *
 * F keys:
 * #f1  #f2  #f3  #f4  #f5  #f6  #f7  #f8  #f9  #f10  #f11  #f12
 *
 * Special Characters:
 * #semicolon     #equal      #comma         #minus        #period
 * #slash         #grave      #openbracket   #backslash    #closedbracket
 * #singlequote
 * =============================================================================
 * ** Using Quasi Keys
 * =============================================================================
 * If you haven't noticed by now, Quasi keys have a # identifier. So if you want
 * to run a trigger check for left key you will run:
 *     Input.isTriggered("#left");
 *
 * If you didn't use the # and put
 *     Input.isTriggered("left");
 * This will check for the keys you set for parameter left, so by default this
 * will let numberpad 4 to trigger this as well.
 *
 * I also added an extra input check
 *     Input.anyTriggered(keylist);
 *   Keylist is a string with keys seperated by commas
 *   You can also set it to a-z, a-z0-9 or sym
 *   If keylist is left empty it will return true when any key is pressed
 * =============================================================================
 * ** Advanced Users: Using Window_TextInput
 * =============================================================================
 * This new window will allow for a keyboard input.
 * If you want to see how it is used please look at the code or look at
 * QuasiNameInput.js or QuasiEzJSON.js as they both use Window_TextInput
 * =============================================================================
 * Links
 *  - http://forums.rpgmakerweb.com/index.php?/topic/51087-quasi-input/
 */
//=============================================================================

var QuasiInput = {};
(function() {
  QuasiInput.proccessParameters = function() {
    var parameters   = PluginManager.parameters('QuasiInput');
    var remapped = {};
    remapped['ok']       = this.stringToAry(parameters['Ok']);
    remapped['escape']   = this.stringToAry(parameters['Escape / Cancel']);
    remapped['shift']    = this.stringToAry(parameters['Shift']);
    remapped['control']  = this.stringToAry(parameters['Control']);
    remapped['tab']      = this.stringToAry(parameters['Tab']);
    remapped['pageup']   = this.stringToAry(parameters['Pageup']);
    remapped['pagedown'] = this.stringToAry(parameters['Pagedown']);
    remapped['left']     = this.stringToAry(parameters['Left']);
    remapped['right']    = this.stringToAry(parameters['Right']);
    remapped['up']       = this.stringToAry(parameters['Up']);
    remapped['down']     = this.stringToAry(parameters['Down']);
    remapped['debug']    = this.stringToAry(parameters['Debug']);
    remapped['fps']        = parameters['FPS'];
    remapped['streched']   = parameters['Streched'];
    remapped['fullscreen'] = parameters['FullScreen'];
    remapped['restart']    = parameters['Restart'];
    remapped['console']    = parameters['Console'];
    this.remapped   = remapped;
  };

  QuasiInput.stringToAry = function(string) {
    var ary = string.split(',');
    ary = ary.map(function(s) {
      s = s.replace(/\s+/g, '');
      return s;
    });
    return ary;
  };

  QuasiInput.proccessParameters();

  // Key codes from
  // https://msdn.microsoft.com/en-us/library/dd375731(v=VS.85).aspx
  QuasiInput.keys =
  {
    14: "0E",
    8: "backspace", 9: "tab", 13: "enter", 16: "shift", 17: "ctrl", 18: "alt",
    27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 37: "left",
    38: "up",  39: "right", 40: "down", 45: "escape",
    48: "0",  49: "1",  50: "2",  51: "3",  52: "4",  53: "5",  54: "6",
    55: "7",  56: "8",  57: "9",
    96: "num0",   97: "num1",   98: "num2",   99: "num3",  100: "num4",
    101: "num5", 102: "num6",  103: "num7",  104: "num8",  105: "num9",
    65: "a",  66: "b",  67: "c",  68: "d",  69: "e",  70: "f",  71: "g",
    72: "h",  73: "i",  74: "j",  75: "k",  76: "l",  77: "m",  78: "n",
    79: "o",  80: "p",  81: "q",  82: "r",  83: "s",  84: "t",  85: "u",
    86: "v",  87: "w",  88: "x",  89: "y",  90: "z",
    112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6",
    118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12",
    186: "semicolon",  187: "equal", 188: "comma", 189: "minus", 190: "period",
    191: "slash", 192: "grave", 219: "openbracket", 220: "backslash",
    221: "closedbracket", 222: "singlequote"
  };

  // returns key code based off the key name
  QuasiInput.keyAt = function(keyName) {
    for (var key in this.keys) {
      if (!this.keys.hasOwnProperty(key)) continue;
      if (this.keys[key] === keyName) return key;
    }
  };

  // you can create custom remap keys by aliasing this function
  // using "QuasiInput.remap" without the public. Just add a similar if statement
  // or switch. You will need to initialize your custom key by doing something like:
  //   ConfigManager.keys["custom"] = "f1";
  //   QuasiInput.remapped["custom"] = "f1";
  //
  // ConfigManager.keys is real remap key while QuasiInput.remapped is the default
  // values, which is needed if you are using an in game key remapper so it knows
  // what value to set it when setting all the keys back to default.
  QuasiInput.remap = function(key) {
    switch(key) {
      case "tab":
        return ConfigManager.keys["tab"];
        break;
      case "ok":
        return ConfigManager.keys["ok"];
        break;
      case "shift":
        return ConfigManager.keys["shift"];
        break;
      case "control":
        return ConfigManager.keys["control"];
        break;
      case "escape":
      case "cancel":
        return ConfigManager.keys["escape"];
        break;
      case "pageup":
        return ConfigManager.keys["pageup"];
        break;
      case "pagedown":
        return ConfigManager.keys["pagedown"];
        break;
      case "left":
        return ConfigManager.keys["left"];
        break;
      case "right":
        return ConfigManager.keys["right"];
        break;
      case "up":
        return ConfigManager.keys["up"];
        break;
      case "down":
        return ConfigManager.keys["down"];
        break;
      case "debug":
        return ConfigManager.keys["debug"];
        break;
      case "fps":
        return Number(this.keyAt(ConfigManager.keys["fps"]) || 113);
        break;
      case "streched":
        return Number(this.keyAt(ConfigManager.keys["streched"]) || 114);
        break;
      case "fullscreen":
        return Number(this.keyAt(ConfigManager.keys["fullscreen"]) || 115);
        break;
      case "restart":
        return Number(this.keyAt(ConfigManager.keys["restart"]) || 116);
        break;
      case "console":
        return Number(this.keyAt(ConfigManager.keys["console"]) || 119);
        break;
    }
  };

  // This object is used for "hard" translation
  //  > This replaces the ENG key on the keyboard to the key on a different language
  //    * So it's actually remapping not translating
  //  > Ex: The location for A is next to caps lock in Eng, but at that location
  //        Rus is the Ф letter
  // Each key is the ENG representation of the key
  // The values are an array, each index is a different language
  // Right now 1st index is Russian and 2nd is Japanese (Kana Input)
  QuasiInput.translation = {
    "A": ["Ф", "ち"],  "a": ["ф", "ち"],
    "B": ["И", "こ"],  "b": ["и", "こ"],
    "C": ["С", "そ"],  "c": ["с", "そ"],
    "D": ["В", "し"],  "d": ["в", "し"],
    "E": ["У", "ぃ"],  "e": ["у", "い"],
    "F": ["А", "は"],  "f": ["а", "は"],
    "G": ["П", "き"],  "g": ["п", "き"],
    "H": ["Р", "く"],  "h": ["р", "く"],
    "I": ["Ш", "に"],  "i": ["ш", "に"],
    "J": ["О", "ま"],  "j": ["о", "ま"],
    "K": ["Л", "の"],  "k": ["л", "の"],
    "L": ["Д", "り"],  "l": ["д", "り"],
    "M": ["Ь", "も"],  "m": ["ь", "も"],
    "N": ["Т", "み"],  "n": ["т", "み"],
    "O": ["Щ", "ら"],  "o": ["щ", "ら"],
    "P": ["З", "せ"],  "p": ["з", "せ"],
    "Q": ["Й", "た"],  "q": ["й", "た"],
    "R": ["К", "す"],  "r": ["к", "す"],
    "S": ["Ы", "と"],  "s": ["ы", "と"],
    "T": ["Е", "か"],  "t": ["е", "か"],
    "U": ["Г", "な"],  "u": ["г", "な"],
    "V": ["М", "ひ"],  "v": ["м", "ひ"],
    "W": ["Ц", "て"],  "w": ["ц", "て"],
    "X": ["Ч", "さ"],  "x": ["ч", "さ"],
    "Y": ["Н", "ん"],  "y": ["н", "ん"],
    "Z": ["Я", "つ"],  "z": ["я", "つ"],
    "{": ["Х", "゛"],  "[": ["х", "゛"],
    "}": ["Ъ", "゜"],  "]": ["ъ", "゜"],
    "|": ["/", "む"],  "\\": ["\\", "む"],
    ":": ["Ж", "れ"],  ";": ["ж", "れ"],
    "\"": ["Э", "け"], "'": ["э", "け"],
    "<": ["Б", "ね"],  ",": ["б", "ね"],
    ">": ["Ю", "る"],  ".": ["ю", "る"],
    "?": [",", "め"],  "/": [".", "め"],
    "~": ["Ё", "ろ"],  "`": ["ё", "ろ"],
    "1": ["1", "ぬ"],  "!": ["!", "ぬ"],
    "2": ["2", "ふ"],  "@": ["\"", "ふ"],
    "3": ["3", "あ"],  "#": ["№", "あ"],
    "4": ["4", "う"],  "$": [";", "う"],
    "5": ["5", "え"],  "%": ["%", "え"],
    "6": ["6", "お"],  "^": [":", "お"],
    "7": ["7", "や"],  "&": ["?", "や"],
    "8": ["8", "ゆ"],  "*": ["*", "ゆ"],
    "9": ["9", "よ"],  "(": ["(", "よ"],
    "0": ["0", "わ"],  ")": [")", "わ"],
    "-": ["-", "ほ"],  "_": ["_", "ほ"],
    "=": ["=", "へ"],  "+": ["+", "へ"]
  };

  // To use, just call:
  // QuasiInput.translate("ENG Letter");
  // returns the translated letter based off your game System language
  // * Note this is not actually "translating" this is more like remapping
  //   but since I already have a remapping function I named this translate
  //   to avoid possible confusion
  QuasiInput.translate = function(letter) {
    if ($gameSystem.isRussian()) {
      return this.translation[letter] ? (this.translation[key][0] || letter) : letter;
    }
    if ($gameSystem.isJapanese()) {
      return this.translation[letter] ? (this.translation[key][1] || letter) : letter;
    }
    return key;
  };

  Input.gamepadMapper = {
    0: '$ok',        // A
    1: '$cancel',    // B
    2: '$shift',     // X
    3: '$menu',      // Y
    4: '$pageup',    // LB
    5: '$pagedown',  // RB
    12: '$up',       // D-pad up
    13: '$down',     // D-pad down
    14: '$left',     // D-pad left
    15: '$right',    // D-pad right
  };

  var Alias_Input_clear = Input.clear;
  Input.clear = function() {
    Alias_Input_clear.call(this);
    this._ranPress = false;
    this._lastPressed = null;
    this._lastTriggered = null;
  };

  // Checks if any press is pressed with .onkeydown()
  Input.anyTriggered = function(keys) {
    var any = [];
    var start, i, j;
    if (keys === "sym") {
      start = 186
      for (i = 0; i < 11; i++) {
        if (i > 6) {
          start = 212;
        }
        any.push(QuasiInput.keys[start + i]);
      }
    }
    if (keys === "0-9" || keys === "a-z0-9") {
      start = 48;
      for (i = 0; i < 20; i++) {
        if (i > 9) {
          start = 86; // 10 less then 96 since I will be at 10
        }
        any.push(QuasiInput.keys[start + i]);
      }
    }
    if (keys === "a-z" || keys === "a-z0-9") {
      start = 65;
      for (i = 0; i < 26; i++) {
        any.push(QuasiInput.keys[start + i]);
      }
    }
    if (!keys) {
      for (var key in QuasiInput.keys) {
        if (!QuasiInput.keys.hasOwnProperty(key)) continue;
        any.push(QuasiInput.keys[key]);
      }
    }
    if (any.length === 0) {
      any = keys.split(',');
      any = any.map(function(s) {
        s =  s.replace(/\s+|#/g, '');
        return s;
      });
    }
    for (i = 0, j = any.length; i < j; i++) {
      if (this.isTriggered('#' + any[i])) {
        this._lastTriggered = any[i];
        return true;
      }
    }
  };

  // Checks if any press is pressed with .onkeypress()
  Input.anyPressed = function(keys) {
    if (this._ranPress) {
      // should filter the input here based of the keys argument
      // the key that was pressed can be grabbed with this._lastPressed
      this._ranPress = false;
      return true;
    }
    return false;
  };

  Input.remap = function(keyName, alias) {
    if (/^\$/.test(this._latestButton)) {
      return alias.call(this, "$" + keyName);
    }
    var newKey = QuasiInput.remap(keyName);
    if (!newKey) return alias.call(this, keyName);
    keyName = newKey;
    if (keyName.constructor === Array) {
      var i, pressed;
      for (i = 0; i < keyName.length; i++) {
        if (alias.call(this, keyName[i])) {
          pressed = true;
          break;
        }
      }
      return pressed;
    }
    return alias.call(this, keyName);
  }

  var Alias_Input_isPressed = Input.isPressed;
  Input.isPressed = function(keyName) {
    if (!/^#/.test(keyName)) {
      return this.remap(keyName, Alias_Input_isPressed);
    }
    return Alias_Input_isPressed.call(this, keyName);
  };

  var Alias_Input_isTriggered = Input.isTriggered;
  Input.isTriggered = function(keyName) {
    if (!/^#/.test(keyName)) {
      return this.remap(keyName, Alias_Input_isTriggered);
    }
    return Alias_Input_isTriggered.call(this, keyName);
  };

  var Alias_Input_isRepeated = Input.isRepeated;
  Input.isRepeated = function(keyName) {
    if (!/^#/.test(keyName)) {
      return this.remap(keyName, Alias_Input_isRepeated);
    }
    return Alias_Input_isRepeated.call(this, keyName);
  };

  var Alias_Input_isLongPressed = Input.isLongPressed;
  Input.isLongPressed = function(keyName) {
    if (!/^#/.test(keyName)) {
      return this.remap(keyName, Alias_Input_isLongPressed);
    }
    return Alias_Input_isLongPressed.call(this, keyName);
  };

  // Added keypress listener to check for caps lock.
  Input._setupEventHandlers = function() {
    document.addEventListener('keypress', this._onKeyPress.bind(this));
    document.addEventListener('keydown', this._onKeyDown.bind(this));
    document.addEventListener('keyup', this._onKeyUp.bind(this));
    window.addEventListener('blur', this._onLostFocus.bind(this));
  };

  Input._onKeyDown = function(event) {
    if (this._shouldPreventDefault(event.keyCode)) {
      event.preventDefault();
    }
    if (event.keyCode === 144) {    // Numlock
      this.clear();
    }
    var buttonName = QuasiInput.keys[event.keyCode];
    this._lastTriggered = buttonName;
    if (buttonName) {
      this._currentState["#" + buttonName] = true;
    } else {
      buttonName = Input.keyMapper[event.keyCode];
      if (buttonName) {
        this._currentState[buttonName] = true;
      }
    }
  };

  Input._onKeyUp = function(event) {
    var buttonName = QuasiInput.keys[event.keyCode];
    if (buttonName) {
      this._currentState["#" + buttonName] = false;
    } else {
      buttonName = Input.keyMapper[event.keyCode];
      if (buttonName) {
        this._currentState[buttonName] = false;
      }
    }
    if (event.keyCode === 0) {  // For QtWebEngine on OS X
      this.clear();
    }
  };

  Input._onKeyPress = function(event) {
    this._lastPressed = String.fromCharCode(event.charCode);
    this._ranPress = true;
    this._setCapsLock(event);
  };

  // Based off
  // http://www.codeproject.com/Articles/17180/Detect-Caps-Lock-with-Javascript
  Input._setCapsLock = function(event) {
    var key   = event.keyCode;
    var shift = event.shiftKey ? event.shiftKey : key === 16;
    if ((key >= 65 && key <= 90 && !shift) || (key >= 97 && key <= 122 && shift)) {
      this.capsLock = true;
    } else {
      this.capsLock = false;
    }
  };

  Graphics._onKeyDown = function(event) {
    if (!event.ctrlKey && !event.altKey) {
      switch (event.keyCode) {
      case QuasiInput.remap("fps"):
        event.preventDefault();
        this._switchFPSMeter();
        break;
      case QuasiInput.remap("stretch"):
        event.preventDefault();
        this._switchStretchMode();
        break;
      case QuasiInput.remap("fullscreen"):
        event.preventDefault();
        this._switchFullScreen();
        break;
      }
    }
  };

  //-----------------------------------------------------------------------------
  // SceneManager
  //
  // The static class that manages scene transitions.

  SceneManager.onKeyDown = function(event) {
    if (!event.ctrlKey && !event.altKey) {
      switch (event.keyCode) {
      case QuasiInput.remap("restart"):
        if (Utils.isNwjs()) {
          location.reload();
        }
        break;
      case QuasiInput.remap("console"):
        if (Utils.isNwjs() && Utils.isOptionValid('test')) {
          require('nw.gui').Window.get().showDevTools();
        }
        break;
      }
    }
  };

  //-----------------------------------------------------------------------------
  // ConfigManager
  //
  // The static class that manages the configuration data.

  ConfigManager.keys = JSON.parse(JSON.stringify(QuasiInput.remapped));

  var Alias_ConfigManager_makeData = ConfigManager.makeData;
  ConfigManager.makeData = function() {
    var config = Alias_ConfigManager_makeData.call(this);
    config.keys = this.keys;
    return config;
  };

  var Alias_ConfigManager_applyData = ConfigManager.applyData;
  ConfigManager.applyData = function(config) {
    Alias_ConfigManager_applyData.call(this, config);
    this.keys = config.keys || this.keys;
  };
})();

//-----------------------------------------------------------------------------
// Window_TextInput
//
// The window for selecting text characters on the name input screen.

function Window_TextInput() {
  this.initialize.apply(this, arguments);
}

Window_TextInput.prototype = Object.create(Window_Base.prototype);
Window_TextInput.prototype.constructor = Window_TextInput;

Window_TextInput.prototype.initialize = function(x, y, width, height) {
  Window_Base.prototype.initialize.call(this, x || 0, y || 0, width || this.windowWidth(), height || this.windowHeight());
  this._text = "";
  this._title = "";
  this._index = 0;
  this._maxLength = 1;
  this._mode = "~a-z0-9"; // mode currently does nothing
  this._handlers = {};
  this._default = {name: "", mode: "~a-z0-9"};
  Input.clear();
  this.deactivate();
  this.refresh();
};

Window_TextInput.prototype.windowWidth = function() {
  return 480;
};

Window_TextInput.prototype.windowHeight = function() {
  return this.fittingHeight(2);
};

Window_TextInput.prototype.center = function() {
  this.x = (Graphics.boxWidth - this.width) / 2;
  this.y = (Graphics.boxHeight - this.height) / 2;
};

Window_TextInput.prototype.update = function() {
  Window_Base.prototype.update.call(this);
  this.processHandling();
};

Window_TextInput.prototype.processHandling = function() {
  if (this.isOpenAndActive()) {
    for (var handler in this._handlers) {
      if (!this._handlers.hasOwnProperty(handler)) continue;
      if (Input.isTriggered(handler)) {
        this.callHandler(handler);
        return;
      }
    }
    if (Input.isRepeated("#backspace")) {
      if (this.back()) {
        SoundManager.playCancel();
        return;
      }
    }
    if (Input.isTriggered("#esc")) {
      return this.callHandler("#esc");
    }
    if (Input.anyPressed(this._mode)) {
      this.add(Input._lastPressed);
    }
  }
};

Window_TextInput.prototype.isOpenAndActive = function() {
  return this.isOpen() && this.active;
};

Window_TextInput.prototype.setHandler = function(symbol, method) {
  this._handlers[symbol] = method;
};

Window_TextInput.prototype.isHandled = function(symbol) {
  return !!this._handlers[symbol];
};

Window_TextInput.prototype.callHandler = function(symbol) {
  if (this.isHandled(symbol)) {
    this._handlers[symbol]();
  }
};

Window_TextInput.prototype.setTitle = function(title) {
  this._title = title;
  this.refresh();
};

Window_TextInput.prototype.text = function() {
  return this._text;
};

Window_TextInput.prototype.setHandler = function(symbol, method) {
  this._handlers[symbol] = method;
};

Window_TextInput.prototype.setDefault = function(name, max, mode) {
  this._default.name = String(name || "");
  this._default.max = max;
  this._default.mode = mode || "~a-z0-9";
  return this.restoreDefault();
};

Window_TextInput.prototype.restoreDefault = function() {
  this._text      = this._default.name;
  this._index     = this._default.name.length;
  this._mode      = this._default.mode;
  this._maxLength = this._default.max;
  this.refresh();
  return this._text.length > 0;
};

Window_TextInput.prototype.add = function(ch) {
  if (this._index < this._maxLength) {
    this._text += ch;
    this._index++;
    this.refresh();
    return true;
  } else {
    return false;
  }
};

Window_TextInput.prototype.back = function() {
  if (this._index > 0) {
    this._index--;
    this._text = this._text.slice(0, this._index);
    this.refresh();
    return true;
  } else {
    return false;
  }
};

Window_TextInput.prototype.charWidth = function() {
  var text = $gameSystem.isJapanese() ? '\uff21' : 'A';
  return this.textWidth(text);
};

Window_TextInput.prototype.left = function() {
  var nameCenter = this.contentsWidth() / 2;
  var nameWidth = (this._maxLength + 1) * this.charWidth();
  return Math.min(nameCenter - nameWidth / 2, this.contentsWidth() - nameWidth);
};

Window_TextInput.prototype.itemRect = function(index) {
  return {
    x: this.left() + index * this.charWidth(),
    y: this.lineHeight(),
    width: this.charWidth(),
    height: this.lineHeight()
  };
};

Window_TextInput.prototype.underlineRect = function(index) {
  var rect = this.itemRect(index);
  rect.x++;
  rect.y += rect.height - 4;
  rect.width -= 2;
  rect.height = 2;
  return rect;
};

Window_TextInput.prototype.underlineColor = function() {
  return this.normalColor();
};

Window_TextInput.prototype.drawUnderline = function(index) {
  var rect = this.underlineRect(index);
  var color = this.underlineColor();
  this.contents.paintOpacity = 48;
  this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
  this.contents.paintOpacity = 255;
};

Window_TextInput.prototype.drawChar = function(index) {
  var rect = this.itemRect(index);
  this.resetTextColor();
  this.drawText(this._text[index] || '', rect.x, rect.y);
};

Window_TextInput.prototype.refresh = function() {
  this.contents.clear();
  for (var i = 0; i < this._maxLength; i++) {
    this.drawUnderline(i);
  }
  for (var j = 0; j < this._text.length; j++) {
    this.drawChar(j);
  }
  var rect = this.itemRect(this._index);
  this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
};
