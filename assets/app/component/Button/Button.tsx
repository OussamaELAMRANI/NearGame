import { FC } from 'react'
import * as PropTypes from 'prop-types'
import './Button.css'
import { ButtonProps } from '@/module/types'
import { trimString } from '@/helper/stringFormatter'

const Button: FC<ButtonProps> = ({ children, variant = '', size = 'base', ...props }) => {
  const classes = trimString(`${variant} ${size}`)

  return (<button className={`button ${classes}`} {...props}> {children} </button>)
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary'])
}
export default Button
