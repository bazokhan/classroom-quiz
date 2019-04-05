import React, { useState } from 'react'
import styles from './Question.module.scss'

const Question = ({
  id,
  prologue,
  main,
  answers,
  qImgs,
  correctAnswer,
  index
}) => {
  const [isActive, toggleActive] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.title}>Question No. {index}</div>
      <p className={styles.main}>{prologue}</p>
      {qImgs &&
        qImgs.map((img, index) => {
          return (
            <div key={img.id} className={styles.imageContainer}>
              <div className={styles.imageTitle}>Image No. {index}</div>
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
      <h2>The Correct Answer Is: {correctAnswer.body}</h2>
    </div>
  )
}

export default Question
