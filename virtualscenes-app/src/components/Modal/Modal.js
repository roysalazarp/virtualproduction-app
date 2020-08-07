import React from 'react';

import './../../assets/styles/ModalStyle/Modal.sass';

const modal = props => (
  <div className="modal">
    <header className="modal__header">
      <h1>{props.title}</h1>
    </header>
    <section className="modal__content">{props.children}</section>
    <section className="modal__actions">
      {props.canConfirm ? props.canCancel && (
        <button className="btn" onClick={props.onCancel}>
          Cancel
        </button>
      ) : props.canCancel && (
        <button className="btn" onClick={props.onCancel}>
          Ok
        </button>
      )}
      {props.canConfirm && (
        <button className="btn" onClick={props.onConfirm}>
          {props.confirmText}
        </button>
      )}
    </section>
  </div>
);

export default modal;
