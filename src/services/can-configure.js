export const canReconfigure = (from, to) => {
    // if (from === undefined) throw new Error('from is required');
    if (typeof from !== 'string') throw new Error('from is not a string');
    if (typeof to !== 'string') throw new Error('to is not a string');
    if (!(from.length === to.length)) return false;
    
    const hasSameUniqueLetters = new Set(from).size === new Set(to).size;
    if (!hasSameUniqueLetters) return false;

    const transformations = {};
    for (let i = 0; i < from.length; i++) {
        const fromLetter = from[i];
        const toLetter = to[i];
        
        const storeLetter = transformations[fromLetter];
        if (storeLetter && storeLetter !== toLetter) return false;

        transformations[fromLetter] = toLetter;
    }

    return true;
};