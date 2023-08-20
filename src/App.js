import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import rootRouter from "./router";
import Layout from "./layout";

function App() {

  const layout = (route) => (
    <Layout>
      <route.component/>
    </Layout>
  )

  return (
    <Router>
      <Routes>
        {rootRouter.map((route) => (
          <Route
            element={layout(route)}
            key={route.path}
            path={route.path}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
