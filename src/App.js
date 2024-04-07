import { ErrorBoundary } from "./components/errorBoundary";
import { ErrorComponent } from "./components/errorComponent";
import { UserDetails } from "./components/userDetails";

function App() {
  return (
    <ErrorBoundary fallback={<ErrorComponent />}>
      <UserDetails />
    </ErrorBoundary>
  );
}

export default App;
