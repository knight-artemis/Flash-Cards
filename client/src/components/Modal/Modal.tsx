import React from 'react'
import ModuleStyles from './Modal.module.css'

export default function Modal({ active, setActive, card }) {
  return (
    <div className={active ? ModuleStyles.modal && ModuleStyles.active: ModuleStyles.modal} onClick={() => setActive(true)}>
        <div className={ModuleStyles.modalContent} onClick={e => e.stopPropagation()}>
            {card && card.questions}
        </div>
        <input type="text" />
        <button type='button'>Ответить!</button>
    </div>
  )
}
