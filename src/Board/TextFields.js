import React from 'react'
import { styles } from 'refire-app'
import { FormField, FormInput } from 'elemental'

const TextFields = ({
  preview,
  inputRef,
  topic,
  text,
  updateTopic,
  updateText,
  styles,
}) => {
  if (preview) {
    return <div />
  } else {
    return (
      <div>
        <FormField>
          <FormInput
            ref={inputRef}
            placeholder="Nové téma"
            value={topic}
            onChange={updateTopic}
            className={styles.topic}
          />
        </FormField>
        <FormField>
          <FormInput
            placeholder="První příspěvek (lze použít markdown)"
            value={text}
            multiline
            onChange={updateText}
            className={styles.text}
          />
        </FormField>
      </div>
    )
  }
}

const css = {
  topic: {},
  text: {},
}

export default styles(css, TextFields)
