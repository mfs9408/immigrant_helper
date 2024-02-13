import Navigator from "./src/components/Navigator";
import StoreProvider from "./src/components/StoreProvider";

export default function App() {
  return (
    <StoreProvider>
      <Navigator />
    </StoreProvider>
  );
}
