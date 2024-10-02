function handleResponseFromAPI(promise) {
    // Attach handlers to the given promise
    return promise
        .then(() => {
            // Log a message when the promise resolves
            console.log('Got a response from the API');
            
            // Return an object with status and body attributes
            return {
                status: 200,
                body: 'success',
            };
        })
        .catch(() => {
            // Return an empty Error object when the promise rejects
            return new Error();
        });
}

// Export the function
export default handleResponseFromAPI;
