import React, { useState } from 'react'
import styles from './Question.module.scss'

const Question = ({ question, index }) => {
  const { id, prologue, main, answers, qImgs, correctAnswer } = question
  const [isActive, toggleActive] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.title}>Question No. {index + 1}</div>
      <p className={styles.main}>{prologue}</p>
      {qImgs &&
        qImgs.map((img, index) => {
          return (
            <div key={img.id} className={styles.imageContainer}>
              <div className={styles.imageTitle}>Image No. {index + 1}</div>
              <p>{img.comment}</p>
            </div>
          )
        })}
      <div className={styles.main}>{main}</div>
      <ul className={styles.answersContainer}>
        {answers &&
          answers.map(answer => {
            return (
              <li
                className={isActive ? styles.active : styles.answerBody}
                onClick={() => toggleActive(!isActive)}
                key={answer.id}
              >
                {answer.body}
              </li>
            )
          })}
      </ul>
      <div className={styles.correctAnswer}>
        The Correct Answer Is: {correctAnswer.body}
      </div>
    </div>
  )
}

export default Question
