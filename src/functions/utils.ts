export const createArray = (n: number): number[] => {
    let array: number[] = []

    for (let i = 1; i <= n; i++) {
        array = [...array, i]
    }

    return array
}