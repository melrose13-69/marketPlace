export const newIdForProduct = ( array ) => {
    const idArray = array.map(item => item.id);
    return Math.max(...idArray)
};