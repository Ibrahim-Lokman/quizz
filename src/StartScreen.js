function StartScreen({ numberQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the QUIZ!</h2>
      <p>There are {numberQuestions} questions to answer.</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
