import clipboardCopy from 'clipboard-copy';
import { useState } from 'react';

export default function useShare(url) {
  const [show, setShow] = useState(false);

  const timeOut = () => {
    const TWO_SECONDS = 2000;
    const FOUR_SECONDS = 4000;

    setTimeout(setShow(true), TWO_SECONDS);
    setTimeout(() => setShow(false), FOUR_SECONDS);
  };

  const handleShare = () => {
    clipboardCopy(url);
    timeOut();
  };

  return { handleShare, show };
}
