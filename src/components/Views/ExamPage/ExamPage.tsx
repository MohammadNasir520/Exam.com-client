import React, { useState } from "react";

import "./Quiz.css";

import "react-toastify/dist/ReactToastify.css";

import SingleQuiz from "./SingleQuiz/SingleQuiz";

const Quiz = () => {
  const [answered, setAnswered] = useState(0);
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [wrongAnsCount, setWrongAnsCount] = useState(0);

  const result = { answered, correctAnsCount, wrongAnsCount };

  // stored answered option for checking correct anser
  const [answeredQuestion, setAnsweredQuestion] = useState([]);
  console.log(answeredQuestion);

  let serial = 0;
  const quizDetails = useLoaderData();
  console.log("quizDeatails", quizDetails);

  const id = quizDetails[0].id;
  console.log(id);

  const { name } = quizDetails[0].name;

  return (
    <div>
      <h2>
        {" "}
        Take a Quiz about : <span className="text-success">{name}</span>{" "}
      </h2>

      <div>
        {
          // quizDetails.data.questions.map(question => {
          quizDetails[0].questions.map((question, index) => {
            serial++;
            return (
              <SingleQuiz
                key={index}
                serial={serial}
                question={question}
                setAnsweredQuestion={setAnsweredQuestion}
                answeredQuestion={answeredQuestion}
                answered={answered}
                setAnswered={setAnswered}
                correctAnsCount={correctAnsCount}
                setCorrectAnsCount={setCorrectAnsCount}
                wrongAnsCount={wrongAnsCount}
                setWrongAnsCount={setWrongAnsCount}
              ></SingleQuiz>
            );
          })
        }
      </div>
      <Link to="/result" state={{ id, answeredQuestion, result }}>
        <button className="btn btn-primary">Submit</button>
      </Link>
    </div>
  );
};

export default Quiz;
