import { Page } from "../components/Page";
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";
import { FacebookFilled, MailFilled } from "@ant-design/icons";

export const Contact = () => {
  const content = useGlobal($content);

  return (
    // <div>
    <Page custom={"min-h-screen py-40 bg-light-rose flex-col "}>
      <div className="
       w-screen px-10 lg:px-0 mb-10 
      max-w-4xl m-auto p-10 flex flex-col gap-10">
      <h1 className="">KAPCSOLAT</h1>
        <p>{content.contact.text}</p>
        <div className="flex gap-4 items-end">
          <a
            href="https://www.facebook.com/veszpremiekanagyvilagban/"
            target="blank"
          >
            <FacebookFilled className="text-3xl" />
          </a>
          <a
            className="flex gap-4 items-end"
            href="mailto:koncertvan@gmail.com"
          >
            <MailFilled className="text-3xl" />
            {content.contact.email}
          </a>
        </div>
        <p>{content.contact.info}</p>
      </div>
    </Page>
    // </div>
  );
};
