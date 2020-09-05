import React from "react";

const CalcBody = ({ displayText }) => {
  let answer = 0;
  const handleClear = () => {
    displayText.length = 0; //weird way of clearing the array but it works
    document.getElementById("result").innerHTML = displayText.join("");
  };
  const handleDisplay = (e) => {
    displayText.push(e.target.value);
    document.getElementById("result").innerHTML = displayText.join("");
  };
  const handleSolve = () => {
    answer = eval(displayText.join(""));
    document.getElementById("result").innerHTML =
      displayText.join("") + `= ${answer}`;
    displayText = [answer];
  };

  return (
    <table border="1">
      <tr>
        <td colSpan="3">
          <p id="result"></p>
        </td>

        <td>
          <input type="button" value="c" onClick={handleClear} />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="1" onClick={handleDisplay} />
        </td>
        <td>
          <input type="button" value="2" onClick={handleDisplay} />
        </td>
        <td>
          <input type="button" value="3" onClick={handleDisplay} />
        </td>
        <td>
          <input type="button" value="/" onClick={handleDisplay} />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="4" onClick={handleDisplay} />
        </td>
        <td>
          <input type="button" value="5" onClick={handleDisplay} />
        </td>
        <td>
          <input type="button" value="6" onClick={handleDisplay} />
        </td>
        <td>
          <input type="button" value="-" onClick={handleDisplay} />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="7" onClick={handleDisplay} />
        </td>
        <td>
          <input type="button" value="8" onClick={handleDisplay} />
        </td>
        <td>
          <input type="button" value="9" onClick={handleDisplay} />
        </td>
        <td>
          <input type="button" value="+" onClick={handleDisplay} />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" value="." onClick={handleDisplay} />
        </td>
        <td>
          <input type="button" value="0" onClick={handleDisplay} />
        </td>

        <td>
          <input type="button" value="=" onClick={handleSolve} />
        </td>
        <td>
          <input type="button" value="*" onClick={handleDisplay} />
        </td>
      </tr>
    </table>
  );
};

export default CalcBody;
