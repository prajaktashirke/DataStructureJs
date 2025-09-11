const flattenArrayElement = (arr) => {
    return arr.reduce((acc, curr) => {
        if(Array.isArray(curr)) {
            return acc.concat(flattenArrayElement(curr));
        } else {
            return acc.concat(curr);
        }
    }, [])
}

console.log(flattenArrayElement([1,2,3,[4,[5,6,7],8],9]))