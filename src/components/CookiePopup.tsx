import { confirm } from "../states/content";

export const CookiePopup = () => {

  return (
    <div className="fixed bottom-0 h-screen w-screen z-10 flex justify-center">
        <div className='
        bg-white p-2 px-4 rounded-md
         absolute bottom-4
          flex justify-center
          gap-4
          '>
            
              <p>
                
              Ez az oldal sütiekt használ
              </p>
              <button
              className='bg-orange/40 rounded-md px-4'
              onClick={confirm}
              >
                <p>Ok</p>
              </button>
        </div>
    </div>
  )
}
