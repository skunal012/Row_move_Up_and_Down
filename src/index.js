import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    activeRowId: null
  };
  changeRow = (id) => {
    this.setState({ activeRowId: id });
  };

  render() {
    const arr = [
      { id: "row1", value: "value1" },
      { id: "row2", value: "value2" },
      { id: "row3", value: "value3" },
      { id: "row4", value: "value4" }
    ];
    const elements = arr
      .sort(
        (a, b) =>
          +(this.state.activeRowId === b.id) -
          +(this.state.activeRowId === a.id)
      )
      .map((elem) => (
        <tr id="row1">
          <td>
            <b>{elem.value}</b>
          </td>
          <td>{elem.value}</td>
          <td>
            <button onClick={() => this.changeRow(elem.id)}>Change Row</button>
          </td>
          <td>
            <button onClick={() => this.changeRow(elem.id)}>Change Row</button>
          </td>
        </tr>
      ));
    return (
      <div className="App">
        <table>
          <tbody>{elements}</tbody>
        </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
