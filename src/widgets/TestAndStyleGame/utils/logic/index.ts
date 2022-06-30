export const _sum = (x: number, y: number) => x + y;
export const _toLowwerCase = (str: string) => str.toLocaleLowerCase(); 
export const _reduceToSum = (arr: number[]) => {
    if(!arr) return;
    return arr.reduce((acc: number, item: number) => {
        return acc += item;
    }, 0);
};

export const _sumWithInitial = (initialValue: number, arr: number[]) => arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);