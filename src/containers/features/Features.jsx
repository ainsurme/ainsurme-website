import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'AI Powered Tool',
    text: '(Unveil Soon)',
  },
  {
    title: 'Personalized Experience',
    text: '(Unveil Soon)',
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