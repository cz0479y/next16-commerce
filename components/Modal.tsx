'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

type Props = {
  openModal: boolean;
  goBackOnClose?: boolean;
  children: React.ReactNode;
};

export default function Modal({ openModal, children, goBackOnClose = false }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  const handleClose = () => {
    ref.current?.close();
    if (goBackOnClose) {
      router.back();
    }
  };

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={handleClose}>
      {children}
      <button onClick={handleClose}>Close</button>
    </dialog>
  );
}
