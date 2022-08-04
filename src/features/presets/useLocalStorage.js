import { useEffect, useState } from 'react';

function getSavedValue(key) {
  const value = localStorage.getItem(key);

  return JSON.parse(value);
}

function useLocalStorage(key, initialValue = undefined) {
  const savedValue = getSavedValue(key);
  const [value, setValue] = useState(savedValue ?? initialValue);
  const saveToLocalStorage = () => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  useEffect(saveToLocalStorage, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
