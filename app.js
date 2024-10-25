// Import Axios via CDN if not using a module system
const axiosCDN = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
const script = document.createElement('script');
script.src = axiosCDN;
document.head.appendChild(script);

script.onload = () => {
  console.log('Axios loaded from CDN');

  // Function to fetch users from the API
  async function fetchUsers() {
    try {
      // Make GET request to JSONPlaceholder API
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      console.log('Fetched Users:', response.data); // Verify data in console

      // Select the list element
      const userList = document.getElementById('userList');

      // Display each user in the list
      response.data.forEach((user) => {
        const li = document.createElement('li');
        li.classList.add('user');
        li.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
        userList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  // Fetch users on page load
  fetchUsers();
};
