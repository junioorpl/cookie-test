import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CapacitorCookies } from "@capacitor/core";

function App() {
  const setCookie = (key: string, value: string) => {
    void CapacitorCookies.setCookie({
      key,
      value,
      url: `.cookie.net`,
    });
  };

  const removeCookie = (key: string) => {
    void CapacitorCookies.deleteCookie({
      key,
      url: `.cookie.net`,
    });
  };

  const forceRemoveCookie = (key: string) => {
    document.cookie = `${key}=; Max-Age=0; domain=.cookie.net;`;
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCookie("test", "test")}>
          SET COOKIE W/ COOKIE MANAGER
        </button>
        <button onClick={() => removeCookie("test")}>
          REMOVE COOKIE W/ COOKIE MANAGER
        </button>
        <button onClick={() => forceRemoveCookie("test")}>
          DEFINETELY REMOVE COOKIE
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
