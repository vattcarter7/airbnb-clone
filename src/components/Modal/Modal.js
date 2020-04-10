import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Modal.css';
import openModal from '../../actions/openModal';

const Modal = ({ openModal, siteModal }) => {
  const closeModal = () => {
    openModal('close', '');
  };

  let modalInlineStyle;
  if (siteModal.openClose === 'open') {
    modalInlineStyle = { display: 'block' };
  } else {
    modalInlineStyle = { display: 'none' };
  }

  return (
    <div className='site-modal' style={modalInlineStyle}>
      <div className='modal-content'>
        <div className='col right'>
          <span onClick={closeModal} className='close'>
            &times;
          </span>
        </div>
        <div className=''>{siteModal.content}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    siteModal: state.siteModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
