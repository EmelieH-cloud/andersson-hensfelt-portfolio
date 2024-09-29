import React, { useRef } from 'react';
import './supportstyle.css';

const Supportpage = () => {
  const faqRef = useRef(null);
  const contactRef = useRef(null);
  const guidesRef = useRef(null);
  const troubleshootingRef = useRef(null);
  const feedbackRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="support-container">
      <h1 className="support-header">Support</h1>
      <p className="support-text">
        Welcome to the support page for <strong>One More Date</strong>! Below you’ll find information about common issues, how to contact us, and more.
      </p>

      <ul className="support-list">
        <li><button onClick={() => scrollToSection(faqRef)} className="support-link ">Frequently Asked Questions (FAQ)</button></li>
        <li><button onClick={() => scrollToSection(contactRef)} className="support-link ">Contact Us</button></li>
        <li><button onClick={() => scrollToSection(guidesRef)} className="support-link ">How to Play Guide</button></li>
        <li><button onClick={() => scrollToSection(troubleshootingRef)} className="support-link ">Troubleshooting</button></li>
        <li><button onClick={() => scrollToSection(feedbackRef)} className="feedback-link ">Feedback or Suggestions?</button></li>
      </ul>

      {/* FAQ Section */}
      <section ref={faqRef} className="support-section">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <p><strong>What is the goal of the game?</strong></p>
        <p>In "One More Date," players encounter fictional characters who seem perfect, but each time, a potential "dealbreaker" is revealed. The game is about deciding whether you can live with that dealbreaker or if it's a no-go.</p>
        
        <p><strong>How do I add players?</strong></p>
        <p>You can add players by clicking on the "+" icon on the home screen and entering their names. All added players will be able to participate when you start a new round.</p>

        <p><strong>How do I purchase new decks?</strong></p>
        <p>To buy new decks, head to the "select deck" page. You can preview and purchase decks with various themes. Once bought, the deck will automatically be added to your collection.</p>

        <p><strong>What is a dealbreaker?</strong></p>
        <p>A dealbreaker is a potential issue revealed during gameplay about the fictional date. It’s up to the players to decide if they can accept the dealbreaker or if it’s a red flag that can not be overlooked.</p>

        <p><strong>I purchased a deck, but it’s not showing up. What do I do?</strong></p>
        <p>If a purchased deck doesn’t appear, try closing and reopening the app. If the issue persists, contact us using the support form below.</p>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="support-section">
        <h2>Contact Us</h2>
        <p>If you're having trouble or have questions not answered on this page, feel free to contact us directly! You can reach our support team via email at <a href="mailto:support@onemoredate.com">info@anderssonhensfelt.se</a>. We typically respond within 24 hours.</p>
      </section>

      {/* How to Play Guide Section */}
      <section ref={guidesRef} className="support-section">
        <h2>How to Play Guide</h2>
        <p><strong>How do I play "One More Date"?</strong></p>
        <p>1. <strong>Start a Game</strong>: Select "New Game" from the main menu and add players.</p>
        <p>2. <strong>Choose a Deck</strong>: Select a deck from the available options or purchase new ones from the store.</p>
        <p>3. <strong>Read the Cards</strong>: Each card introduces a new scenario with your fictional date and reveals a potential dealbreaker. Debate with other players and decide whether to accept the dealbreaker.</p>
        <p>4. <strong>Compare standpoints</strong>: Optional! At the end of the round, assess how many "dates" each player would continue with based on the dealbreakers.</p>
      </section>

      {/* Troubleshooting Section */}
      <section ref={troubleshootingRef} className="support-section">
        <h2>Troubleshooting</h2>
        <p><strong>The app is crashing or freezing. What should I do?</strong></p>
        <p>1. Make sure you have the latest version of the app installed.</p>
        <p>2. Restart the app or, if the issue persists, reboot your device.</p>
        <p>3. Try clearing the app's cache via your device settings if the problem continues.</p>

        <p><strong>In-app purchases not working</strong></p>
        <p>1. Ensure you’re logged into the correct account.</p>
        <p>2. Double-check if the purchase went through by reviewing your transaction history.</p>
        <p>3. If you're still having trouble, contact us with details of the issue and purchase.</p>
      </section>

      {/* Feedback and Suggestions Section */}
      <section ref={feedbackRef} className="support-section">
        <h2>Feedback and Suggestions</h2>
        <p>We love hearing from our players! If you have suggestions for new features, card decks, or improvements, please don’t hesitate to send us your ideas. Email us at <a href="mailto:info@anderssonhensfelt.se">info@anderssonhensfelt.se</a>.</p>
      </section>
    </div>
  );
};

export default Supportpage;
