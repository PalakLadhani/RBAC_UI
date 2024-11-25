export const mockUsers = [
  { id: 1, name: "John Doe", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", role: "User", status: "Inactive" },
];

export const mockRoles = [
  { id: 1, roleName: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, roleName: "User", permissions: ["Read"] },
];

export const mockPermissions = ["Read", "Write", "Delete"];
