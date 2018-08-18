import React from 'react'
import Theme from '../../Theme'

import {
  TextBlock,
  // MediaBlock,
  // TextRow,
  // RectShape,
  RoundShape
} from 'react-placeholder/lib/placeholders'

const itemStyle = {
  color: Theme.palette.grey[100],
  display: 'flex',
  justifyContent: 'space-between',
  textDecoration: 'none',
  padding: Theme.spacing.double
}

const imageStyle = {
  height: Theme.spacing.big * 1.5,
  width: Theme.spacing.big * 1.5,
  marginRight: Theme.spacing.double
}

const textStyle = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const ArenasPlaceholder = (
  <div>
    {
      [...Array(10)].map((o, i) => (
        <div key={i} style={itemStyle}>
          <RoundShape color={itemStyle.color} style={imageStyle} />
          <div style={textStyle}>
            <TextBlock rows={2} color={itemStyle.color} style={{ width: 100 }} />
          </div>
        </div>
      ))
    }
  </div>
)

export default ArenasPlaceholder
