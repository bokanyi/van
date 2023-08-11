import { FC, ReactNode } from 'react'

type Props= {
    children: ReactNode;
    custom?: string;
    customInner?: string;
}

export const Page: FC<Props> = ({children, custom}) => {
  return (
    <div className={` transition-colors w-screen flex items-center justify-center ${custom}`}> 

            {children}
 
    </div>

  )
}
