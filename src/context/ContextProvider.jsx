
import { AuthProvider } from "./AuthContext"; // Adjust the path if necessary
import { DataProvider } from "./DataContext"; // Adjust the path if necessary

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <DataProvider>{children}</DataProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
