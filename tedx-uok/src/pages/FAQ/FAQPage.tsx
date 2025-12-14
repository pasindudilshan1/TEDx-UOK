import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  title: string;
  items: FAQItem[];
};

const faqData: FAQCategory[] = [
  {
    title: "Registration",
    items: [
      {
        question: "How do I register for TEDxUoK?",
        answer:
          "Registration details will be announced on the official TEDxUoK website and social media channels."
      }
    ]
  },
  {
    title: "Tickets",
    items: [
      {
        question: "Are tickets refundable?",
        answer:
          "Tickets are non-refundable and non-transferable unless the event is cancelled."
      }
    ]
  },
  {
    title: "Event day",
    items: [
      {
        question: "When should attendees arrive?",
        answer:
          "Attendees are encouraged to arrive at least 30 minutes before the event start time."
      }
    ]
  },
  {
    title: "Speakers",
    items: [
      {
        question: "Can I interact with the speakers?",
        answer:
          "Opportunities to interact with speakers may be available during designated sessions."
      }
    ]
  },
  {
    title: "Venue",
    items: [
      {
        question: "Where is the event venue?",
        answer:
          "The venue details will be shared on the official TEDxUoK website prior to the event."
      }
    ]
  },
  {
    title: "Recording rules",
    items: [
      {
        question: "Is photography or video recording allowed?",
        answer:
          "Personal photography is allowed. Professional recording equipment is restricted."
      }
    ]
  },
  {
    title: "Accessibility",
    items: [
      {
        question: "Is the venue wheelchair accessible?",
        answer:
          "Yes, the venue is fully wheelchair accessible with reserved seating."
      }
    ]
  },
  {
    title: "Partnerships",
    items: [
      {
        question: "How can organizations partner with TEDxUoK?",
        answer:
          "Please visit the Partners page or contact the organizing team for partnership inquiries."
      }
    ]
  },
  {
    title: "Volunteering",
    items: [
      {
        question: "How can I volunteer for TEDxUoK?",
        answer:
          "Volunteer opportunities will be announced on the Volunteers page."
      }
    ]
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <main className="mx-auto max-w-4xl px-6 py-20 space-y-12">
      <h1 className="text-3xl font-bold text-white">
        Frequently Asked Questions
      </h1>

      {faqData.map((category, cIndex) => (
        <section key={cIndex} className="space-y-4">
          <h2 className="text-xl font-bold text-white">
            {category.title}
          </h2>

          {category.items.map((item, iIndex) => {
            const id = `${cIndex}-${iIndex}`;
            const isOpen = openId === id;

            return (
              <div
                key={id}
                className="rounded-xl border border-[#1F1F1F] bg-[#0E0E0E] px-5 py-4"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  className="w-full text-left font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EB0028]"
                >
                  {item.question}
                </button>

                {isOpen && (
                  <p className="mt-3 text-white leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </section>
      ))}
    </main>
  );
}
