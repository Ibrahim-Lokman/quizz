function StartScreen({ numberQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the QUIZ!</h2>
      <p>There are {numberQuestions} questions to answer.</p>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
