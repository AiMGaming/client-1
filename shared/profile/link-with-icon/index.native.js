// @flow
import * as React from 'react'
import {Box, ClickableBox, Icon, Text} from '../../common-adapters'
import {globalStyles, globalMargins} from '../../styles'
import type {Props} from '.'

const LinkWithIcon = ({label, icon, color, onClick, style}: Props) => (
  <ClickableBox style={style} onClick={onClick}>
    <Box style={styleContainer}>
      <Icon style={styleIcon} type={icon} color={color} />
      <Text style={{...styleLabel, color}} type="BodyPrimaryLink">
        {label}
      </Text>
    </Box>
  </ClickableBox>
)

const styleContainer = {
  ...globalStyles.flexBoxRow,
  alignItems: 'center',
  justifyContent: 'center',
}

const styleIcon = {
  marginRight: globalMargins.tiny,
}

const styleLabel = {
  flex: -1,
  textAlign: 'center',
}

export default LinkWithIcon
