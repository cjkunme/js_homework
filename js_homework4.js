function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        //console.log(randomNumber)
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних до непарних: ${evenPercentage.toFixed(2)} % до ${oddPercentage.toFixed(2)} %`);
}
checkProbabilityTheory(3);

// З тестів видно що чим більш вказати кількість значення count тип більше відсткове співвідношення буде схоже на 50\50.
// І навпаки у випадку з малим значенням count. Чим меншше це значення тим більше видно різницю нерівності згенерованих
// парних і непарних чисел. Воно може бути як 50\50 так і 100\0, так і 30\70.

// Чому так далі взято з GPT ↓
// Це явище пояснюється законом великих чисел.

// Закон великих чисел
// Закон великих чисел стверджує, що якщо виконати експеримент (в даному випадку —
// генерацію випадкових чисел) багато разів, середнє значення результатів експерименту
// буде наближатися до очікуваного середнього значення (математичного сподівання) у 
// довгостроковій перспективі.