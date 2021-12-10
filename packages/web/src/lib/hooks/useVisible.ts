import { useRef, useState, useEffect, useCallback } from 'react';

export const useVisible = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOpenClick = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const handleClickOutside = useCallback(
    (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsVisible(false);
      }
    },
    [ref]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  }, [handleClickOutside]);

  return { isVisible, ref, handleOpenClick };
};
