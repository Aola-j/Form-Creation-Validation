// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch Data Using try-catch
        const response = await fetch(apiUrl);  // Fetch API data
        const users = await response.json();   // Convert to JSON

        // Clear the Loading Message
        dataContainer.innerHTML = '';

        // Create and Append User List
        const userList = document.createElement('ul'); // Create <ul>

        users.forEach(user => {
            const listItem = document.createElement('li'); // Create <li>
            listItem.textContent = user.name;             // Set user name
            userList.appendChild(listItem);               // Append to <ul>
        });

        dataContainer.appendChild(userList); // Add list to container

    } catch (error) {
        // Error Handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
