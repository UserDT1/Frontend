function myProject() {
    const target = Math.floor(Math.random() * 100) + 1;
    console.log(`Компьютер 1 загадал число: ${target}.`);

    let min = 1;
    let max = 100;

    while (min <= max) {
        const currentProject = Math.floor((min + max) / 2);

        console.log(`Компьютер 2: Пробую число ${currentProject}.`);

        if (currentProject === target) {
            console.log("Компьютер 1: Угадал!");
            return;
        } else if (currentProject < target) {
            console.log("Компьютер 1: Больше");
            min = currentProject + 1;
        } else {
            console.log("Компьютер 1: Меньше");
            max = currentProject - 1;
        }
    }
}

myProject();