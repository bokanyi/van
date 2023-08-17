import { FC, useState } from "react";
import { CustomButton } from "./CustomButton";
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
// import { CloseOutlined } from '@ant-design/icons';

type Props = {
  question: string;
  answer: string;
};

export const Question: FC<Props> = ({ question, answer }) => {
  const [answerOpen, setAnswerOpen] = useState(false);

  return (
    <div
      className={` flex flex-col gap-10 md:p-10  cursor-pointer p-4 hover:bg-orange bg-cover`}
      onClick={() => setAnswerOpen(!answerOpen)}
      style={{
        color: "white",
        // backgroundImage: `url('${img}')`,
        height: `${answerOpen ? "auto" : "auto"}`,
        justifyContent: `${answerOpen ? "" : "center"}`,
      }}
    >
      <div className="md:flex justify-between items-center">
        <h3 
        className="z-10 "
        >{question}</h3>

        <CustomButton
          custom=""
          type="button"
          onClick={() => setAnswerOpen(!answerOpen)}
          // className=
        >
          {answerOpen?  <CloseOutlined 
          className="text-xl"
          /> : <PlusOutlined 
          className="text-xl"
          
          /> }
   
        </CustomButton>
      </div>
      {answerOpen && (
        <>
          <hr />
          <div>
            <p>{answer}</p>
          </div>
        </>
      )}
    </div>
  );
};
