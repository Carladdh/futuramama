import "./question.component.scss";

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
          Instagram
        </a>
        o en su
        <a href="https://www.isabelpuerta.es" target="_blank">
          Página Web.
        </a>
      </p>
    </div>
  );
};

export default QuestionComponent;
