import Header from "./Header";
import Main from "./Main";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],

  // loading, error, ready
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, status: "ready", questions: action.payload };
    case "loading":
      return { ...state, status: "loading" };
    case "error":
      return { ...state, status: "error" };
    case "ready":
      return { ...state, status: "ready", questions: action.payload };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      return new Error("Invalid action type");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div>
      <Header />
      <Main>
        <p> 1/15 </p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
