function ProgressBar({ index, numberQuestions, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numberQuestions}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numberQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default ProgressBar;
