// @flow
import * as shared from './shared'
import CopyableText from '../../common-adapters/copyable-text'
import * as React from 'react'
import {Button, PlatformIcon, StandardScreen, Text} from '../../common-adapters'
import {globalStyles, globalColors, globalMargins} from '../../styles'
import type {Props} from '.'

const PostProof = (props: Props) => {
  const {
    allowProofCheck,
    platform,
    platformUserName,
    descriptionText,
    proofAction,
    onAllowProofCheck,
    onCancel,
    onComplete,
    isOnCompleteWaiting,
    errorMessage,
  } = props
  const {
    descriptionView,
    noteText,
    onCompleteText,
    proofText,
    platformSubtitle,
    proofActionText,
  } = shared.propsForPlatform(props)

  const notification = !errorMessage
    ? {}
    : {
        notification: {
          message: errorMessage,
          type: 'error',
        },
      }

  return (
    <StandardScreen {...notification} onCancel={onCancel}>
      <PlatformIcon
        style={stylePlatformIcon}
        platform={platform}
        overlay="icon-proof-unfinished"
        overlayColor={globalColors.grey}
        size={48}
      />
      <Text
        style={{
          ...stylePlatformUsername,
          ...(stylePlatformSubtitle ? {} : {marginBottom: globalMargins.tiny}),
        }}
        type="Header"
      >
        {platformUserName}
      </Text>
      {!!platformSubtitle && (
        <Text style={stylePlatformSubtitle} type="Body">
          {platformSubtitle}
        </Text>
      )}
      {descriptionView ||
        (descriptionText && (
          <Text style={styleDescriptionText} type="Body">
            {descriptionText}
          </Text>
        ))}
      {!!proofText && (
        <CopyableText style={styleProofContainer} value={proofText} textStyle={styleProofText} />
      )}
      {!!noteText && (
        <Text style={styleNoteText} type="BodySmall">
          {noteText}
        </Text>
      )}
      {!!proofAction && !allowProofCheck && (
        <Button
          style={styleContinueButton}
          fullWidth={true}
          type="Primary"
          onClick={() => {
            onAllowProofCheck(true)
            proofAction()
          }}
          label={proofActionText || ''}
        />
      )}
      {allowProofCheck && (
        <Button
          style={styleContinueButton}
          fullWidth={true}
          type="Primary"
          onClick={() => onComplete()}
          label={onCompleteText || ''}
          waiting={isOnCompleteWaiting}
        />
      )}
    </StandardScreen>
  )
}

const stylePlatformIcon = {
  alignSelf: 'center',
}

const stylePlatformUsername = {
  color: globalColors.blue,
  textAlign: 'center',
}

const stylePlatformSubtitle = {
  color: globalColors.black_20,
  marginBottom: globalMargins.small,
  textAlign: 'center',
}

const styleDescriptionText = {
  marginTop: globalMargins.tiny,
  textAlign: 'center',
}

const styleProofContainer = {
  marginTop: globalMargins.tiny,
}

const styleProofText = {
  maxHeight: 7 /* # lines */ * 20 /* line height */ + 2 * 10 /* padding */,
}

const styleNoteText = {
  marginTop: globalMargins.tiny,
  textAlign: 'center',
}

const styleContinueButton = {
  ...globalStyles.flexBoxRow,
  marginBottom: globalMargins.small,
  marginTop: globalMargins.small,
}

export default PostProof
