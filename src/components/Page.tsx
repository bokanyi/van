import { FC, ReactNode } from 'react'

type Props= {
    children: ReactNode;
    custom?: string;
    customInner?: string;
}

export const Page: FC<Props> = ({children, custom, customInner}) => {
  return (
    <div className={` transition-colors w-screen flex justify-center ${custom}`}> 
        <div className={`w-[300] md:max-w-3xl flex flex-col p-10 md:p-0 justify-center align-middle m-auto relative ${customInner}`}>
            {children}
        </div>
    </div>
  )
}
