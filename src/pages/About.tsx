import { Page } from '../components/Page'
import useGlobal from "../hooks/useGlobal";
import { $content } from "../states/content";

export const About = () => {
  const content = useGlobal($content);

  return (
    <div>
    {/* <Page custom={"min-h-screen py-40 bg-light-rose"}>
      <h1 className='italic'>Hamarosan...</h1>
    </Page> */}
    
<Page custom="bg-orange pt-10 md:pt-40 h-auto">
<div className=" max-w m-auto p-10 flex md:flex-row flex-col gap-10">
  <div className="grow md:w-[50%] border:none; bg-contain">

<img    src="/hordos_johanna.jpg" alt="" />
  </div >
<div className="grow md:w-[50%] flex flex-col gap-10 justify-between">

  <p className="animate-lineUp">{content.story[2]}</p>
<h3 className="italic text-end">Hordós Johanna</h3>
  {/* <p >{content.story[3]}</p> */}
</div>
</div>
</Page>
<Page custom="bg-orange h-auto md:h-screen md:p-40 p-10">
{/* <div className="flex items-center  justify-center"> */}

<iframe className="border:none overflow-hidden
grow md:h-full
"  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FVeszpremBalaton2023%2Fvideos%2F1131369687497022%2F&show_text=false&width=560&t=0" width="560" height="314"   scrolling="no"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
{/* </div> */}



</Page>
<Page  custom="bg-orange h-auto px-10 md:px-40 pb-10 md:pb-40" >
     <p >{content.story[3]}</p>
</Page>

  </div>
  )
}
