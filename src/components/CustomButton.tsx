import {useRef} from 'react';




interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // text: string;
    children?: React.ReactNode;
    type: "submit" | "button" ;
    custom?: string;
  }

export const CustomButton: React.FunctionComponent<ButtonProps> = ({children, type, custom, ...rest}) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button ref={ref}
    {...rest}
    // style={{background: bgColor}} ${color}
    type={type}
    className={`
    transition-all  duration-700
    px-4 py-2 
    ${custom}  
    `} 
    >
        {/* {text} */}
      {children}
    </button>
  );
}
