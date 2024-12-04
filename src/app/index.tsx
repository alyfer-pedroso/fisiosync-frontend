import { MainProvider } from "@/data/contexts";
import App from "./app";

export default function Root() {
  return (
    <MainProvider>
      <App />
    </MainProvider>
  );
}
