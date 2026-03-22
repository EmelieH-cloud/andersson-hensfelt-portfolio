import './commonquestions.css'
import { useState } from 'react'
import AppText from '../../Font/AppText'

const questions = [
  {
    q: "Vad är mommi?",
    a: "mommi är en app för att hitta andra mammor, skapa gemenskap och delta i aktiviteter tillsammans."
  },
  {
    q: "Är appen gratis?",
    a: "Ja, appen är gratis att använda. Njut!"
  },
  {
    q: "Hur hanteras personuppgifter?",
    a: "Vi följer GDPR och delar aldrig dina personuppgifter med tredje part."
  },
  {
    q: "Kontakt & support",
    a: "Du når oss på info@anderssonhensfelt@gmail.se"
  }
]

const CommonQuestionsSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">

      <div className="faq-container">

        <div className="faq-header">
          <AppText as="h2" className="faq-title">
            Vanliga frågor
          </AppText>
        </div>

        <div className="faq-list">

          {questions.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggle(index)}
            >

              {/* 🔥 QUESTION (utan AppText) */}
              <div className="faq-question">

                <div className="faq-left">
                  <p className="faq-question-text">
                    {item.q}
                  </p>
                </div>

                <div className="faq-icon">
                  {openIndex === index ? '−' : '+'}
                </div>

              </div>

              {/* 🔥 ANSWER (AppText ok här) */}
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