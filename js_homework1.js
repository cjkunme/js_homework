// 'number' + 3 + 3
// 'number' -> рядок. 3 -> число. При додаванні 3 перетворюється в тип рядок. В результаті додавання маємо рядок 'number3'.
// 'number3' -> рядок. 3 -> число. При додаванні 3 перетворюється в тип рядок. При додаванні маємо рядок 'number33'.
// Результат: number33.
console.log(
    "%cПеревірка прикладу %c'number' + 3 + 3%c --> %c" + ('number' + 3 + 3), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// null + 3
// null -> явно вказане відсутнє значення. 3 -> число. При додаванні null перетворюється в число 0. Виходить 0 + 3.
// Результат: 3.
console.log(
    "%cПеревірка прикладу %cnull + 3%c --> %c" + (null + 3), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// 5 && "qwerty"
// Оператор && (і) повертає перший "false" або останній "true";
// 5 -> тип число, отже true; "qwerty" -> непустий рядок, також true.
// Результат: qwerty.
console.log(
    '%cПеревірка прикладу %c5 && "qwerty"%c --> %c' + (5 && "qwerty"), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// +'40' + +'2' + "hillel";
// Операція + перед рядком '40' — це унарний плюс, який перетворює значення, що стоїть після нього, у число. Теж саме і з рядком '2'.
// Потім іде оперція додавання між числами 40 і 2. Результат 42.
// Потім йде додавання чисела 42 і рядка "hillel". При додаванні число 42 перетворюється у рядок, а потім йде операція конкатенації.
// Результат: 42hillel.
console.log(
    "%cПеревірка прикладу %c+'40' + +'2' + \"hillel\"%c --> %c" + (+'40' + +'2' + "hillel"), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// '10' - 5 === 6
// Рядок '10' перетворюється на число 10: 10 - 5 = 5.
// 5 === 6 -> 5 строго дорівнює 6.
// Результат: false.
console.log(
    "%cПеревірка прикладу %c'10' - 5 === 6%c --> %c" + ('10' - 5 === 6), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// true + false
// Буль true перетворюється на 1. Буль false перетворюється на 0. -> 1+0.
// Результат: 1.
console.log(
    "%cПеревірка прикладу %ctrue + false%c --> %c" + (true + false), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// '4px' - 3
// '4px' -> рядок. 3 -> число. При відніманні Java Script намагається перетворити '4px' на число.
// '4px' не можна перетворити на число.
// Результат: NaN.
console.log(
    "%cПеревірка прикладу %c'4px' - 3%c --> %c" + ('4px' - 3), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// '4' - 3
// '4' -> рядок. 3 -> число. При відніманні рядок '4' перетворюється на число 4.
// 4 - 3. 
// Результат: 1. 
console.log(
    "%cПеревірка прикладу %c'4' - 3%c --> %c" + ('4' - 3), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// '6' + 3 ** 0
// Спочатку виконується піднесення до степеня. Потім додавання.
// 3 ** 0 = 1. Виходить '6' + 1.
// Число 1 перетворюється в рядок '1'. -> '6' + '1' -> '61'
// Результат: 61.
console.log(
    "%cПеревірка прикладу %c'6' + 3 ** 0%c --> %c" + ('6' + 3 ** 0), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// 12 / '6'
// 12 -> число. '6' -> рядок.
// При діленні рядок '6' перетворюється на число 6. -> 12 / 6.
// Результат: 2.
console.log(
    "%cПеревірка прикладу %c12 / '6'%c --> %c" + (12 / '6'), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// '10' + (5 === 6)
// Спочатку виконується порівняння 5 === 6. Так як 5 строго не дорівнює 6, то результат false.
// Буль false перетворюється на рядок 'false'. Потім йде операція конкатенація.
// Результат: 10false.
console.log(
    "%cПеревірка прикладу %c'10' + (5 === 6)%c --> %c" + ('10' + (5 === 6)), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// null == ''
// null і undefined — це два спеціальні значення, які рівні тільки один одному і не рівні жодним іншим типам, а тому:
// null == '' повертає false.
// Результат: false.
console.log(
    "%cПеревірка прикладу %cnull == ''%c --> %c" + (null == ''), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// 3 ** (9 / 3)
// Арифметичні вичислення. Спочатку виконується дія в дужках:
// 9 / 3 = 3.  
// Потім число 3 піднесемо до результату дії в дужках 3. -> 3 ** 3.
// Результат: 27.
console.log(
    "%cПеревірка прикладу %c3 ** (9 / 3)%c --> %c" + (3 ** (9 / 3)), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// !!'false' == !!'true'
// Оператор !! є подвійним логічним оператором NOT (!). Він використовується для приведення будь-якого значення до булевого типу.
// Тому оператор !! перетвоюрює непустий рядок 'false' на буль true, те ж саме з непустим рядокм 'true'.
// true == true.
// Результат: true.
console.log(
    "%cПеревірка прикладу %c!!'false' == !!'true'%c --> %c" + (!!'false' == !!'true'), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// 0 || '0' && 1
// || (логічне АБО) повертає перше "true" значення, яке знайде, або останнє "false" значення, якщо всі операнди є "false".
// && (логічне І) повертає перше "false" значення, яке знайде, або останнє "true" значення, якщо всі операнди є "true".
// Оператор && має вищий пріоритет, ніж ||, тому він виконується першим.
// '0' -> непорожній рядок -> true. 1 число -> true. Отже, true && true = 1, так як && повертає останнє "true" значення.
// 0 || 1 --> false || true. Отже, виходить 1 так як || повертає перше "true" значення.
// Результат: 1.
console.log(
    "%cПеревірка прикладу %c0 || '0' && 1%c --> %c" + (0 || '0' && 1), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// (+null == false) < 1;
// Унарний плюс перед null виконує перетворення null на число. -> 0.
// 0 == false -> 0 == 0 -> true.
// true < 1 -> 1 < 1 -> false
// Результат: false.
console.log(
    "%cПеревірка прикладу %c(+null == false) < 1%c --> %c" + ((+null == false) < 1), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// false && true || true
// || (логічне АБО) повертає перше "true" значення, яке знайде, або останнє "false" значення, якщо всі операнди є "false".
// && (логічне І) повертає перше "false" значення, яке знайде, або останнє "true" значення, якщо всі операнди є "true".
// Оператор && має вищий пріоритет, ніж ||, тому він виконується першим.
// false && true -> false.
// false || true -> true
// Результат: true.
console.log(
    "%cПеревірка прикладу %cfalse && true || true%c --> %c" + (false && true || true), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// false && (false || true)
// || (логічне АБО) повертає перше "true" значення, яке знайде, або останнє "false" значення, якщо всі операнди є "false".
// && (логічне І) повертає перше "false" значення, яке знайде, або останнє "true" значення, якщо всі операнди є "true".
// Оператор && має вищий пріоритет, ніж ||, але спочатку ми виконужмо дію в дужках. 
// false || true -> true.
// false && true -> false.
// Результат: false.
console.log(
    "%cПеревірка прикладу %cfalse && (false || true)%c --> %c" + (false && (false || true)), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);


//------------------------------------------------------------------------------------------------------------------------------------
// (+null == false) < 1 ** 5
// Унарний плюс перед null виконує перетворення null на число. -> 0.
// 0 == false -> 0 == 0 -> true.
// Наступна дія це піднесення числа 1 до степеня 5 -> 1 ** 5 -> 1.
// true < 1 -> 1 < 1 -> false
// Результат: false.
console.log(
    "%cПеревірка прикладу %c(+null == false) < 1 ** 5%c --> %c" + ((+null == false) < 1 ** 5), 
    "color: midnightBlue;", 
    "color: yellow;", 
    "color: midnightBlue;", 
    "color: green;"
);