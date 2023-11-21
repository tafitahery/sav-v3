import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [url]);

  return data;
};
