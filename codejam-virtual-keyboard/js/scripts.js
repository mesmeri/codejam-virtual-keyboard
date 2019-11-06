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
});
