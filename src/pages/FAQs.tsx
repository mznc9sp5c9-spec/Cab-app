import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I book a cab?",
    answer: "You can easily book a cab through our website by selecting your service type (Daily, Outstation, or Wedding), entering your pickup and drop locations, choosing your preferred vehicle, and clicking 'Book Now'.",
  },
  {
    question: "What are the payment options available?",
    answer: "We accept all major credit/debit cards, UPI, net banking, and cash payments directly to the driver at the end of your trip.",
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel your booking up to 2 hours before the scheduled pickup time without any cancellation fees. Cancellations made within 2 hours may incur a small fee.",
  },
  {
    question: "Are there any hidden charges?",
    answer: "No, we believe in transparent pricing. The estimated price shown during booking includes base fare and driver charges. Any applicable tolls or parking fees will be extra and clearly communicated.",
  },
  {
    question: "Do you provide outstation services?",
    answer: "Yes, we offer both one-way and round-trip outstation services. You can select the 'Outstation' tab on our booking widget to plan your trip.",
  },
  {
    question: "Are your drivers verified?",
    answer: "Absolutely. All our drivers undergo rigorous background checks, driving tests, and regular training to ensure your safety and comfort.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            Find answers to common questions about our services, booking process, and policies.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-yellow-50 p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900">Still have questions?</h3>
          <p className="mt-2 text-gray-600">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-yellow-500"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
