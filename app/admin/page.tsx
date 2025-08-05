import AddProductForm from "./components/AddProductFrom";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard.</p>
      <AddProductForm />
      {/* Other admin components can be added here */}
    </div>
  );
};

export default AdminPage;