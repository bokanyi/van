import {useRef} from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // text: string;
    children?: React.ReactNode;
    type: "submit" | "button" ;
    custom?: string;
    disabled?: boolean;
  }

export const CustomButton: React.FunctionComponent<ButtonProps> = ({children, type, custom,disabled, ...rest}) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div
    className='relative h-20'
    
    >

    <button ref={ref}
    {...rest}
    disabled={disabled}
    // style={{background: bgColor}} ${color}
    type={type}
    className={`
    flex border-2 border-b-4 rounded-md hover:translate-y-[-0.2rem] hover:border-b-8 absolute right-0 bottom-0
    transition-all  duration-700  
    px-4 py-2 
    ${custom}  
    `} 
    >
        {/* {text} */}
      {children}
    </button>
    </div>
  );
}
