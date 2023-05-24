import { useState } from 'react';

export default function useTimeOut() {
  const [show, setShow] = useState(false);
  const timeOut = () => {
    const TWO_SECONDS = 2000;
    const FOUR_SECONDS = 4000;

    setTimeout(setShow(true), TWO_SECONDS);
    setTimeout(() => setShow(false), FOUR_SECONDS);
  };
  return { show, timeOut };
}
