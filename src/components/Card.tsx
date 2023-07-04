import { FC, ReactNode } from 'react'

type Props = {
    custom?: string;
    children: ReactNode;
  }

export const Card: FC<Props> = ({children, custom}) => {
  return (
    <div className={`bg-white rounded-xl p-2 md:p-8 ${custom}`}>
        {children}
    </div>
  )
}
