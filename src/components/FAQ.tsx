import { useState } from 'react';
import { FAQSchema } from './SchemaMarkup';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-item__question"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <span
                className={`faq-item__icon ${openIndex === index ? 'open' : ''}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`faq-item__answer ${openIndex === index ? 'open' : ''}`}
              role="region"
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
