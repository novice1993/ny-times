import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./store/config.ts";
import { REACTQUERY_STALETIME } from "./constants/etcConstatns.ts";
import "./index.css";

const persistor = persistStore(store);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: REACTQUERY_STALETIME,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </QueryClientProvider>
);
