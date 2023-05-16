import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'AI Powered Financial Education Tool',
    text: 'Backed by AI, we provide you with the best financial education tool to help you learn more about annuity.',
  },
  {
    title: 'Personalized Annuity Shop Experience',
    text: 'You will find the best fit annuity products for your needs and goals, seamlessly with our in-house recommendation engine.',
  },
  // {
  //   title: 'Talk To A Real Financial Advisor When You Need',
  //   text: 'Your conversation with our AI Assistant will be summarized and transferred to a real financial advisor when you need, to boost your experience between AI assistant and financial advisors.',
  // },
  // {
  //   title: 'Really boy law county',
  //   text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  // },
];

const Features = () => (
  <div className="ignitor__features section__padding" id="features">
    <div className="ignitor__features-heading">
      <h1 >Proud to Introduce You<br />IGNITOR</h1>
    </div>
    <div className="ignitor__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;