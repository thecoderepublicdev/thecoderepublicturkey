import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames';
import { Fragment, useState, createContext, createElement, useContext } from 'react'

const DialogContext = createContext(null);
const useModal = () => useContext(DialogContext);

function Button({children, ...props}) {
  const { setModalVisibility } = useModal();

  return createElement('button', {
      ...props,
      onClick: () => setModalVisibility(true),
  }, children);
}

const Content = ({children, className}) => {
    return createElement('div', {
      className: classNames('mt-2', className)
    }, children);
}

const Title = ({children, ...props}) => {
    return(
      <Dialog.Title as="label" className="block font-bold text-2xl">
        {children}
      </Dialog.Title>
    )
}
export default function Modal({children, ...props}) {
  let [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const toggle = () => setIsOpen(!isOpen);

  const ProviderValues = {
    toggle: toggle,
    setModalVisibility: setIsOpen,
    close,
    open,
    toggle
  }

  const Childrens = {
    Title: children.filter(c => c.type === Title),
    Button: children.filter(c => c.type === Button),
    Content: children.filter(c => c.type === Content),
  }

  return (
    <DialogContext.Provider value={ProviderValues}>
      {Childrens.Button}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button>
                    <span onClick={close} className='material-symbols-outlined text-gray-400 bg-gray-100 rounded-full p-2 mb-4'>close</span>
                  </button>
                  {Childrens.Title}
                  {Childrens.Content}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </DialogContext.Provider>
  )
}


Modal.Button = Button;
Modal.Content = Content;
Modal.Title = Title;