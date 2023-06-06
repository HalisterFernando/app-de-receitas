import clipboardCopy from 'clipboard-copy';
import { useState } from 'react';

let URL;

export default function useShare() {
  URL = window.location.href;

  const [show, setShow] = useState(false);

  const timeOut = () => {
    const TWO_SECONDS = 2000;
    const FOUR_SECONDS = 4000;

    setTimeout(setShow(true), TWO_SECONDS);
    setTimeout(() => setShow(false), FOUR_SECONDS);
  };

  const handleShare = () => {
    clipboardCopy(URL);
    timeOut();
  };

  return { handleShare, show };
}
