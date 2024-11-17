export const canReconfigure = (from, to) => {
    // if (from === undefined) throw new Error('from is required');
    if (typeof from !== 'string') throw new Error('from is not a string');
    if (typeof to !== 'string') throw new Error('to is not a string');
};