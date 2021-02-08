import ReactDOM from 'react-dom'
import cancel from './../assets/cancel.png'
// import soon from './../assets/coming-soon.png';
import hisom from './../assets/hisom.png'
import { CSSTransition } from 'react-transition-group'

const Modal = ({ show, onClose }) => {
  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className='modal' onClick={onClose}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          <div className='modal-header'>
            <div className='modal-title'>The Face of DSC</div>
            <button onClick={onClose}><img src={cancel} alt='X' /></button>
          </div>
          <div className='modal-body'>
            {/* <img src={soon} alt="Coming Soon"/> */}
            <img src={hisom} alt='Hisom' />
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('root')
  )
}

export default Modal
