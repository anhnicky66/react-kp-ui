export const getAverage = (args: number[]): number => {
    const sum = getSum(args);
    return sum / args.length;
}

export const getSum  = (args: number[]): number => {
    const sum = args.reduce((acc, cur) => {
        acc += cur;
        return acc;
    }, 0);
    return sum;
}