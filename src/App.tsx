import React from "react";
import "./App.scss";
import ExpenseTrackerForm from "./components/ExpenseTrackerForm";
import Balance from "./components/Balance";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="has-background-info">
        <div style={{ height: "100vh" }} className="section container">
          <section className="columns">
            <div className="column">
              <ExpenseTrackerForm />
            </div>
            <div className="column">
              <Balance />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default App;
