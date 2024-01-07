
import './AQuiz.css';
import React from 'react';
import { useState } from 'react';

const AQuiz = ({ question, serial, setAnsweredQuestion, answeredQuestion,
    answered, setAnswered,
    correctAnsCount, setCorrectAnsCount,
    wrongAnsCount, setWrongAnsCount,
}) => {

    const [disabled, setDisabled] = useState(false)
    const correctAnswer = question.correctAnswer;

    const handleOption = (anseredQestion) => {

        setAnsweredQuestion([...answeredQuestion, { question, anseredQestion }])

        setDisabled(true)

        if (anseredQestion) {
            setAnswered(answered + 1)
        }
        if (anseredQestion === correctAnswer) {
            return setCorrectAnsCount(correctAnsCount + 1)
        }
        else if (anseredQestion !== correctAnswer) {
            return setWrongAnsCount(wrongAnsCount + 1)
        }
    }

    return (
        <div className='my-5 '>
            <div className='questions '>
                {serial}.{question.question}
            </div>

            <div className="options-container">
                {
                    question?.options?.map((option, index) =>
                        <div
                            key={index}
                            className=' md:text-xl lg:text-base rounded'
                        >
                            <input type="radio" name={`question-${serial}`} id={`option-${serial}-${index}`} disabled={disabled ? true : false} onClick={() => { handleOption(option) }} />
                            <label htmlFor={`option-${serial}-${index}`}>{option} </label>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AQuiz;