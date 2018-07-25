import React from 'react'

class Logo extends React.PureComponent {
  render () {
    const {
      mainColor = '#2196f3',
      secondaryColor = '#fff',
      width = 28,
      height = 30,
      ...rest
    } = this.props
    return (
      <svg {...rest} width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 28 30`}>
        <g fill='none' fillRule='evenodd'>
          <circle fill={mainColor} cx='14' cy='14' r='14' />
          <path d='M0 30a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3H0z' fill={mainColor} />
          <path d='M24.395 20A11.945 11.945 0 0 0 26 14c0-5.71-3.988-10.489-9.331-11.702C21.009 4.404 24 8.853 24 14c0 2.164-.529 4.205-1.464 6h1.859zm-1.45 2a11.991 11.991 0 0 1-6.276 3.702A13.052 13.052 0 0 0 21.248 22h1.696z' fill={secondaryColor} />
        </g>
      </svg>
    )
  }
}

export default Logo
