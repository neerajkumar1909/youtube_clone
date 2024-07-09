export const API_KEY = 'AIzaSyCzuFehYwdWTf16KGdbZdAGxukLVV5gHb4';

// value converter for views in Feed.jsx file at line no.40
export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M"
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K"
    } else {
        return value;
    }
}
