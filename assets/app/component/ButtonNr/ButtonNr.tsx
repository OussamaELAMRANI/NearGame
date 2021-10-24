import { FC } from 'react'

interface ButtonProps {

}

const ButtonNr: FC<ButtonProps> = ({ children, ...props }) => {
  return (<button {...props}> {children} </button>)
}

export default ButtonNr
