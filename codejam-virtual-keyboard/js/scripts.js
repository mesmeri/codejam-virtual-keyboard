window.addEventListener("load", function() {
  // Общий класс для всех кнопок
  class Key {
    constructor(arr) {
      this.type = arr[0];
    }
  }

  // Буквенные кнопки, но которых меняется значение
  class ChangeableKey extends Key {
    constructor(arr) {
      super(arr);

      [this.ruValue, this.enValue] = arr[2];
      this.currentValue =
        localStorage.getItem("lang") === "en" ? this.enValue : this.ruValue;
    }

    changeLanguage(language, isUpperCase) {
      switch (language) {
        case "ru":
          this.currentValue = this.ruValue;
          break;
        case "en":
          this.currentValue = this.enValue;
      }

      if (isUpperCase) {
        this.currentValue = this.currentValue.toUpperCase();
      }
    }

    changeRegistry(isUpperCase) {
      this.currentValue = isUpperCase
        ? this.currentValue.toUpperCase()
        : this.currentValue.toLowerCase();
      console.log(this.currentValue);
    }
  }

  // Кнопки с цифрами и знаками, текст на кнопках не изменяется
  class NumericKey extends Key {
    constructor(arr) {
      super(arr);

      [this.defaultValue, this.shiftedValue] = arr[2];
      this.currentValue = this.defaultValue;
    }

    changeValue() {
      this.currentValue =
        this.currentValue === this.defaultValue
          ? this.shiftedValue
          : this.defaultValue;
    }
  }

  // Служебные кнопки
  class ServiceKey extends Key {
    constructor(arr) {
      super(arr);

      this.currentValue = arr[2];
      this.sizeClass = arr[3];
    }
  }

  const field = document.createElement("textarea");

  const keyboard = {
    capsLock: false,
    shiftPressed: false,
    language: localStorage.getItem("lang") || "ru",
    data: [
      ["changeable", "Backquote", ["ё", "`"]],
      ["numeric", "Digit1", ["1", "!"]],
      ["numeric", "Digit2", ["2", "@"]],
      ["numeric", "Digit3", ["3", "#"]],
      ["numeric", "Digit4", ["4", "$"]],
      ["numeric", "Digit5", ["5", "%"]],
      ["numeric", "Digit6", ["6", "^"]],
      ["numeric", "Digit7", ["7", "&"]],
      ["numeric", "Digit8", ["8", "*"]],
      ["numeric", "Digit9", ["9", "("]],
      ["numeric", "Digit0", ["0", ")"]],
      ["numeric", "Minus", ["-", "_"]],
      ["numeric", "Equal", ["=", "+"]],
      ["service", "Backspace", "BACKSPACE", "key--lg"],
      ["service", "Tab", "TAB", "key--lg"],
      ["changeable", "KeyQ", ["й", "q"]],
      ["changeable", "KeyW", ["ц", "w"]],
      ["changeable", "KeyE", ["у", "e"]],
      ["changeable", "KeyR", ["к", "r"]],
      ["changeable", "KeyT", ["е", "t"]],
      ["changeable", "KeyY", ["н", "y"]],
      ["changeable", "KeyU", ["г", "u"]],
      ["changeable", "KeyI", ["ш", "i"]],
      ["changeable", "KeyO", ["щ", "o"]],
      ["changeable", "KeyP", ["з", "p"]],
      ["changeable", "BracketLeft", ["х", "["]],
      ["changeable", "BracketRight", ["ъ", "]"]],
      ["numeric", "Backslash", ["\\", "/"]],
      ["service", "CapsLock", "CAPS LOCK", "key--lg"],
      ["changeable", "KeyA", ["ф", "a"]],
      ["changeable", "KeyS", ["ы", "s"]],
      ["changeable", "KeyD", ["в", "d"]],
      ["changeable", "KeyF", ["а", "f"]],
      ["changeable", "KeyG", ["п", "g"]],
      ["changeable", "KeyH", ["р", "h"]],
      ["changeable", "KeyJ", ["о", "j"]],
      ["changeable", "KeyK", ["л", "k"]],
      ["changeable", "KeyL", ["д", "l"]],
      ["changeable", "Semicolon", ["ж", ";"]],
      ["changeable", "Quote", ["э", "'"]],
      ["service", "Enter", "ENTER", "key--lg"],
      ["service", "ShiftLeft", "SHIFT", "key--xlg"],
      ["changeable", "KeyZ", ["я", "z"]],
      ["changeable", "KeyX", ["ч", "x"]],
      ["changeable", "KeyC", ["с", "c"]],
      ["changeable", "KeyV", ["м", "v"]],
      ["changeable", "KeyB", ["и", "b"]],
      ["changeable", "KeyN", ["т", "n"]],
      ["changeable", "KeyM", ["ь", "m"]],
      ["changeable", "Comma", ["б", ","]],
      ["changeable", "Period", ["ю", "."]],
      ["changeable", "Slash", [".", "?"]],
      ["service", "ShiftRight", "SHIFT", "key--xlg"],
      ["service", "ControlLeft", "CTRL", "key--lg"],
      ["service", "AltLeft", "ALT", "key--lg"],
      ["service", "Space", "SPACE", "key--space"],
      ["service", "AltRight", "ALT", "key--lg"],
      ["service", "ControlRight", "CTRL", "key--lg"]
    ],
    output: "",
    keys: {},
    lettersCodes: [],
    target: null,
    targetCode: null,
    targetObject: null,

  };


});
