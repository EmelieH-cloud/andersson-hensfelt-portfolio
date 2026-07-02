import './commonquestions.css'

import { useState } from 'react'

import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import AppText from '../../Font/AppText'

const CommonQuestionsSection = () => {

  const { t } = useTranslation("general")

  const questions = [

    {
      q: t("faq.question1"),

      a: t("faq.answer1")
    },

    {
      q: t("faq.question2"),

      a: t("faq.answer2")
    },

    {
      q: t("faq.question3"),

      a: (
        <>
          {t("faq.answer3_1")}{" "}

          <Link to="/integrity" className="faq-link">
            {t("faq.integrity")}
          </Link>{" "}

          {t("faq.answer3_2")}{" "}

          <Link to="/terms" className="faq-link">
            {t("faq.terms")}
          </Link>
        </>
      )
    },

    {
      q: t("faq.question4"),

      a: t("faq.answer4")
    },

    {
      q: t("faq.question5"),

      a: t("faq.answer5")
    }

  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (

    <section className="faq-section">

      <div className="faq-container">

        <div className="faq-header">

          <AppText as="h2" className="faq-title">
            {t("faq.title")}
          </AppText>

        </div>

        <div className="faq-list">

          {questions.map((item, index) => (

            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggle(index)}
            >

              <div className="faq-question">

                <p className="faq-question-text">
                  {item.q}
                </p>

                <div className="faq-icon">

                  <span />
                  <span />

                </div>

              </div>

              <div className="faq-answer">

                <AppText className="faq-answer-text">
                  {item.a}
                </AppText>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default CommonQuestionsSection