import useGlobal from "../hooks/useGlobal";
import { $faqs } from "../states/content";

import { Question } from "../components/Question";

export const Faq = () => {
  const faqs = useGlobal($faqs);
  

    return (
      <div>
      {/* <Page custom={""}> */}
        <div className="min-h-screen w-screen relative md:pt-40 pt-20 flex flex-col bg-dark-blue ">
          <div className="md:p-10 p-4 text-white">

          <h3>Gyakran ismételt kérdések</h3>
          </div>

        {faqs.map((faq, index)=> {
          return (
            <>
            <Question
            key={index}
            question={faq.question}
            answer={faq.answer}
            />
            {index < 3 && <hr className="border-t-2 border-blue-green" />}
            </>
          )
        })}
        </div>
      {/* </Page> */}
    </div>
    )
  }