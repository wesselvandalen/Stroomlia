export function addToFavorites(product) {
    if (!product || !product.id || !product.name || !product.imagePaths || !product.price) {
        console.error("Invalid product data");
        return;
    }
    
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    // Sjekk om produktet allerede er lagt til
    if (!favorites.some(fav => fav.id === product.id)) {
        favorites.push({
            id: product.id,
            name: product.name,
            image: product.imagePaths[0], 
            price: product.price
        });
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
}

export function getAllFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function removeFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(product => product.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}