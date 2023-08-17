import { FC, ReactNode } from 'react'

type Props = {
    custom?: string;
    children?: ReactNode;
    images: string[];
    artists: string[]
  }

export const Artists: FC<Props> = ({ custom, images, artists}) => {
  return (
    <div className={`flex overflow-scroll rounded-xl gap-4 p-2 md:p-8 ${custom}`}>
        {images.map((image, index) => {
            return (
                <div className="flex flex-col justify-center gap-4"  >
                <img className="h-80 max-w-xs object-cover" src={image} alt="" />
                <p>{artists[index]}</p>
                </div>
            )
        })}
        {/* {children} */}
    </div>
  )
}
