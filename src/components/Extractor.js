import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

function Extractor({ url, keyId }) {
  const [details, setDetails] = useState('');
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const resp = await fetchData(url);
        console.log('resp: ', resp[keyId]);
        setDetails(resp[keyId]);

      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, []);

  return (
    <>
      <span>{details}</span><br />
    </>
  );
}

export default Extractor;