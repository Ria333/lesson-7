// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі


/*function orderedMorning(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Прокинутись');
        }, 500);
    })
}

function orderedMorning2(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Застелити постіль');
        }, 200);
    })
}

function orderedMorning3(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Почистити зуби');
        }, 400);
    })
}

function orderedMorning4(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Зробити зарядку');
        }, 1300);
    })
}

function orderedMorning5(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Піти в душ');
        }, 300);
    })
}

function orderedMorning6(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Поснідати');
        }, 900);
    })
}

function orderedMorning7(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Зробити макіяж');
        }, 700);
    })
}

function orderedMorning8(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Вдягтися');
        }, 2000);
    })
}

function orderedMorning9(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Дочекатись автобус');
        }, 1500);
    })
}

function orderedMorning10(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Поїхати на роботу');
        }, 2000);
    })
}


orderedMorning()
    .then((value) => {
        console.log(value, 'value');
        orderedMorning2()
            .then((value) => {
                console.log(value, 'value');
                orderedMorning3()
                    .then((value) => {
                        console.log(value, 'value');
                        orderedMorning4()
                            .then((value) => {
                                console.log(value, 'value');
                                orderedMorning5()
                                    .then((value) => {
                                        console.log(value, 'value');
                                        orderedMorning6()
                                            .then((value) => {
                                                console.log(value, 'value');
                                                orderedMorning7()
                                                    .then((value) => {
                                                        console.log(value, 'value');
                                                        orderedMorning8()
                                                            .then((value) => {
                                                                console.log(value, 'value');
                                                                orderedMorning9()
                                                                    .then((value) => {
                                                                        console.log(value, 'value');
                                                                        orderedMorning10()
                                                                            .then((value) => {
                                                                                console.log(value, 'value');
                                                                            })
                                                                    })
                                                            })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    })*/










function orderedMorning1(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Прокинутись');
        }, 500);
    })
}

function orderedMorning2(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Застелити постіль');
        }, 200);
    })
}

function orderedMorning3(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Почистити зуби');
        }, 400);
    })
}

function orderedMorning4(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Зробити зарядку');
        }, 1300);
    })
}

function orderedMorning5(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Піти в душ');
        }, 300);
    })
}

function orderedMorning6(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Поснідати');
        }, 900);
    })
}

function orderedMorning7(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Зробити макіяж');
        }, 700);
    })
}

function orderedMorning8(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Вдягтися');
        }, 2000);
    })
}

function orderedMorning9(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Дочекатись автобус');
        }, 1500);
    })
}

function orderedMorning10(timeAllowed) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('Поїхати на роботу');
        }, 2000);
    })
}


async function order () {
    const morningPart1 = await orderedMorning1(500);
    console.log (morningPart1,'morningPart1')

    const morningPart2 = await orderedMorning2(200);
    console.log (morningPart2,'morningPart2')

    const morningPart3 = await orderedMorning3(400);
    console.log (morningPart3,'morningPart3');

    const morningPart4 = await orderedMorning4(1300);
    console.log (morningPart4,'morningPart4');

    const morningPart5 = await orderedMorning5(300);
    console.log (morningPart5,'morningPart5');

    const morningPart6 = await orderedMorning6(900);
    console.log (morningPart6,'morningPart6');

    const morningPart7 = await orderedMorning7(700);
    console.log (morningPart7,'morningPart7');

    const morningPart8 = await orderedMorning8(2000);
    console.log (morningPart8,'morningPart8');

    const morningPart9 = await orderedMorning9(1500);
    console.log (morningPart9,'morningPart9');

    const morningPart10 = await orderedMorning10(2000);
    console.log (morningPart10,'morningPart10');

}

order();


