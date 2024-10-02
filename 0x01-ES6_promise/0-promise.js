//promise.js
function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate an API call that is always successful
        const success = true;  // This can be any condition
        
        if (success) {
            resolve('API response received');
        } else {
            reject('Error occurred while fetching data');
        }
    });
}

export default getResponseFromAPI;
