// src/services/api.js
export const fetchUsers = async () => {
  try {
    const response = await fetch("https://api.example.com/users");
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
