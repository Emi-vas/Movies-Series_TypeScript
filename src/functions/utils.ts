export const createArray = (n: number): number[] => {
    let array: number[] = []

    for (let i = 1; i <= n; i++) {
        array = [...array, i]
    }

    return array
}

export const isSizeTel = (): boolean => {
    if (window.innerWidth < 500) {
        return true
    } else {
        return false
    }
}