let ok = true;

const getList = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ok) {
                resolve(task);
            } else {
                reject("Error in the getList :(");
            }
        }, time);
    });
}

export default getList;