/** @format */

import { useReducer } from "react"

/** @format */
const initialFormDetails = { name: "", email: "", age: "" }

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      console.log(action)

      return {
        ...state,
        [action.value.name]: action.value.input,
      }
    case "RESET":
      return { initialFormDetails }
    default:
      throw new Error("Hello😂")
  }
}

export default function ControlledForm() {
  const [state, formDispatch] = useReducer(reducer, initialFormDetails)

  function handleForm(e) {
    e.preventDefault()
    // formDispatch({ type: "RESET" })
  }
  function formChange(e) {
    formDispatch({
      type: "CHANGE",
      value: { name: e.target.name, input: e.target.value },
    })
  }
  console.log(state)

  return (
    <div>
      <form
        onSubmit={handleForm}
        className=" m-2 flex flex-col w-60 rounded p-2"
        onChange={formChange}
      >
        <label htmlFor="fullName">Name :</label>
        <input
          type="text"
          id="fullName"
          autoComplete="name"
          name="name"
          placeholder="John Doe"
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          autoComplete="email"
          name="email"
          placeholder="example@example.com"
        />

        <label htmlFor="age">Age :</label>
        <input
          type="number"
          autoComplete="off"
          name="age"
          id="age"
          className="text-bkg"
          placeholder="34"
        />
        <button
          className="p-1 bg-minor my-2 font-medium text-content"
          type="submit"
        >
          {" "}
          Submit
        </button>
        <button
          className="p-1 bg-minor my-2 font-medium text-content"
          type="reset"
          onClick={() => {
            formDispatch({ type: "RESET" })
          }}
        >
          Reset{" "}
        </button>
      </form>
      {state.name && <h1>Hello {state.name}</h1>}
    </div>
  )
}
