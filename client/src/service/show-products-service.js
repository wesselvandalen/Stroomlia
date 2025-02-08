export function changeShowState(category, newState) {
    sessionStorage.setItem(category.toUpperCase(), newState);
}

export function getShowState(category) {
    const state = sessionStorage.getItem(category.toUpperCase());

    if (!state) {
        sessionStorage.setItem(category.toUpperCase(), JSON.stringify(true));
        return true;
    }

    return JSON.parse(state) === true; 
}

export function selectOneCategory(category) {
    const categories = ['mobiltelefoner', 'laptoper', 'tvogskjermer', 'tilbehør', 'smartklokker', 'audio'];

    categories.forEach((cat) => {
        const newState = cat.toUpperCase() === category.toUpperCase();
        sessionStorage.setItem(cat.toUpperCase(), JSON.stringify(newState));
    });
}
