import { useState, useEffect } from 'react';

const LOADING_TIME = 1500;

export default function useLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, LOADING_TIME);
  }, []);

  return { loading, setLoading };
}
