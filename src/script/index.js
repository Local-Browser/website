// Function to get query parameters as an object
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const userParam = params.get('user');
    return userParam ? { [userParam]: decodeJWT(userParam) } : {};
}

function decodeJWT(token) {
    // Split the token into header, payload, and signature
    const [, payloadBase64] = token.split('.');
    // Decode the Base64Url encoded payload
    const payload = JSON.parse(atob(payloadBase64.replace(/-/g, '+').replace(/_/g, '/')));
    return payload;
}

// Function to update local storage
function updateLocalStorage(queryParams) {
    // Retrieve the existing object from local storage or create a new one
    let storedObject = JSON.parse(localStorage.getItem('storedObject')) || {};

    // Append query parameters to the object
    Object.assign(storedObject, queryParams);

    // Store the updated object back in local storage
    localStorage.setItem('storedObject', JSON.stringify(storedObject));

    // Log the updated object to the console
    console.log('Updated Local Storage Object:', storedObject);
}

// Get query parameters and update local storage
const queryParams = getQueryParams();
updateLocalStorage(queryParams);

const storedObject = JSON.parse(localStorage.getItem('storedObject'));

const participantsContainer = document.createElement('div');
document.body.append(participantsContainer);
participantsContainer.innerHTML = JSON.stringify(storedObject)

