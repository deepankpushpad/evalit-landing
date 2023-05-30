import React from 'react';

const FAQs = () => {
  const faqsData = [
    {
      id: 1,
      question: 'Are the tests in Evalit top-notch?',
      answer:
        'Well, absolutely! Our tests are created by professional developers from Amazon, DeShaw, Directi, Google and other top-notch companies. You can preview these tests before sharing it!',
    },
    {
      id: 2,
      question: 'Are you really free?',
      answer:
        'Yes, and unlikely many other sites giving a microscopic trial, we just want to see you use and fall in love with our product. Evalit is free for life unless you are assessing more than 30 candidates in a day. Before that, no charges, forever!',
    },
    {
      id: 3,
      question: 'Why such a generous free offer?',
      answer:
        'We know! We wanted to hire ourselves and saw ridiculously expensive platforms! Hence we thought of helping out smaller teams by giving a very generous free limit, unlike no one else in the world!',
    },
    {
      id: 4,
      question: 'Do you also source candidates?',
      answer:
        'Evalit is an assessment tool and it does not source candidates. We have partners who will do this for you for free. Reach us out if you need any help with that!',
    },
    {
      id: 5,
      question: 'What if I want to create my own test?',
      answer:
        'Why? Currently, we do not allow this since Evalit designed tests are very effective!',
    },
    {
      id: 6,
      question: 'Are there only coding tests?',
      answer:
        'We will be adding other options. Give us your feedback if you wish to see others on our platform!',
    },
  ];

  return (
    <div className="flex flex-col lg:mt-40">
      <div className="flex w-full lg:pl-32 pl-10">
        <h1
          className="lg:text-4xl text-3xl text-primary font-bold font-roboto lg:p-0 p-2 tracking-widest  "
          style={{
            textShadow: '0px 1px, 1px 0px, 1px 0px',
          }}
        >
          You might be thinking ...
        </h1>
      </div>
      <div className="lg:text-left p-10 lg:p-20 flex flex-col gap-8">
        {faqsData.map((faq, i) => (
          <div
            className="flex flex-col   lg:ml-10 p-2 gap-6     font-karma "
            key={i}
          >
            <h1 className="text-2xl text-secondary font-bold font-karma  ">
              {faq.question}
            </h1>
            <p className="text-lg  font-medium font-karma  tracking-widest block w-full ">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
