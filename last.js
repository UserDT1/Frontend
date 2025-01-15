//slice

function mySlice(arr, start, end) {
    if (!Array.isArray(arr)) {
        throw new Error('Первый аргумент должен быть массивом');
    }

    if (typeof start !== 'number') {
        start = 0;
    }

    if (typeof end !== 'number' || end > arr.length) {
        end = arr.length;
    }

    if (start < 0) {
        start = Math.max(0, arr.length + start); // Преобразуем отрицательный индекс
    }

    if (end < 0) {
        end = Math.max(0, arr.length + end); // Преобразуем отрицательный индекс
    }

    const result = [];

    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }

    return result;
}


//myindex

function myIndexOf(arr, item, from) {
    if (!Array.isArray(arr)) {
        throw new Error('Первый аргумент должен быть массивом');
    }

    if (typeof from !== 'number') {
        from = 0;
    }

    if (from < 0) {
        from = Math.max(0, arr.length + from); // Преобразуем отрицательный индекс
    }

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
}

//myincludes


function myIncludes(arr, item, from) {
    if (!Array.isArray(arr)) {
        throw new Error('Первый аргумент должен быть массивом');
    }

    if (typeof from !== 'number') {
        from = 0;
    }

    if (from < 0) {
        from = Math.max(0, arr.length + from); // Преобразуем отрицательный индекс
    }

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }

    return false;
}