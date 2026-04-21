async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(425);
        }, 1000);
    });
}

(async function main() {
    let a = await sleep();
    console.log(a)
})()