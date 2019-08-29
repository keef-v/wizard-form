import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import WizardForm from "./components/wizardForm";
// import "./styles.css";

class App extends Component {

  showResults = values =>
    new Promise(resolve => {
      setTimeout(() => {
        // simulate server latency
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        resolve()
      }, 500)
    })
  render() {
    return (
      <Provider store={store}><WizardForm onSubmit={this.showResults}/></Provider>
    );
  }
}
export default App;
