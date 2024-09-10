import "./question.component";

const QuestionComponent: React.FC = () => {
  return (
    <div className="question-container">
      <h3>
        Nuestra experta en fertilidad <span>Isabel Puerta</span>
      </h3>
      <p className="question-container__text">
        Te atenderá en su
        <a
          href="https://instagram.com/isabelpuertafertilidad?igsh=MmRiaGo5ZWF0bDA5"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
        o en su
        <a href="https://www.isabelpuerta.es" target="_blank">
          página web.
        </a>
      </p>
    </div>
  );
};

export default QuestionComponent;
