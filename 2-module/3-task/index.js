let calculator = {
  one: 0,
  two: 0,
  read(a, b) {
    this.one = a;
    this.two = b;
  },
  sum() {
    return this.one + this.two;
  },
  mul() {
    return this.one * this.two;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
