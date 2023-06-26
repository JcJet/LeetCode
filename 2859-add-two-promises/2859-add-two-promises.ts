async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
    const values = await Promise.all([promise1,promise2]);

    return values.reduce((acc, curr) => acc + curr,0);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */