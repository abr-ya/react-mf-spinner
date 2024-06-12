import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import Header from "./Header";
import { Footer } from "./components";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Footer />
  </div>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
