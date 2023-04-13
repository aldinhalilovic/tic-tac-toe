import React, { useState } from 'react'
import InputModal from '../components/inputModal/InputModal'

export const useInputModal = ({
  label,
  defaultValue,
}: {
  label?: string
  defaultValue?: string
}) => {
  const [value, setValue] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const showModal = () => {
    setValue('')
    setIsVisible(true)
  }

  return {
    modal: (
      <InputModal
        label={label}
        value={defaultValue || ''}
        changeValue={(v) => {
          setValue(v)
        }}
        visible={isVisible}
        closeModal={() => {
          setIsVisible(false)
        }}
      />
    ),
    showModal,
    value,
  }
}
