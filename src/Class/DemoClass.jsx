/* eslint-disable react/prop-types */
import { Component } from "react";
import { useNavigate, useLocation, Link } from "react-router";
// import { useMemo } from "react";
import { useImmer } from "use-immer";
export default class DemoClass extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center m-2">
        <Link to={"/demofunc"}>Login Here </Link>
        <br />
        <strong> Hello, I created A classs Based Component😘</strong>
      </div>
    );
  }
}

export class NotFound extends Component {
  render() {
    return (
      <div className="flex items-center justify-center m-2">
        <strong>
          Sorry, the page you are looking for does not exist, Go
          <Link to={"/"} className="underline">
            {" "}
            Home
          </Link>
        </strong>
      </div>
    );
  }
}

export function DemoFunc() {
  const navigate = useNavigate();
  const [loginD, setLoginD] = useImmer({
    name: "",
    password: "",
    gender: "",
  });
  throw new Error("error");

  const genderSelect = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Rather not say" },
  ];

  function onSelect(g) {
    console.log(g);
    setLoginD((draft) => {
      draft.gender = g;
    });
  }

  return (
    <div className="flex items-center flex-col  justify-between m-2">
      <input
        className=" p-2 "
        placeholder="Enter your name"
        autoComplete="name"
        onChange={(e) =>
          setLoginD((draft) => {
            draft.name = e.target.value;
          })
        }
        type="text"
      />
      <input className="p-2 m-2" type="password" />
      <DropDown options={genderSelect} onSelect={onSelect} />
      <div>
        <button
          className="bg-blue-600 py-2 px-4 rounded-sm"
          onClick={() =>
            navigate("/login", {
              replace: true,
              state: { name: loginD.name, gender: loginD.gender },
            })
          }
        >
          Login
        </button>
        <button></button>
      </div>
    </div>
  );
}
export function LoginRoute() {
  const location = useLocation();

  return (
    <div className="flex items-center flex-col  justify-between m-2">
      <h4>
        Welcome{" "}
        {location.state.gender == "Male" ? "Mr " + location.state.name : ""}
        {location.state.gender == "Female" ? "Mrs " + location.state.name : ""}
        {location.state.gender == "Rather not say" ? location.state.name : ""}
      </h4>
      <h4>Your Gender is {location && location.state.gender}</h4>
    </div>
  );
}

const DropDown = ({ options, onSelect }) => {
  return (
    <div>
      {options && (
        <select
          name="select"
          id="select"
          placeholder="select"
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value="">Select</option>
          {options &&
            options.map((option) => {
              return (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              );
            })}
        </select>
      )}
    </div>
  );
};
