import React from 'react';
import Extractor from './Extractor';

function Row({ name, films, vehicles }) {
  console.log('vehicles: ', vehicles);
  console.log('films: ', films);

  return (
    <tr>
      <td>{name}</td>
      <td>
        {films.length && films?.map((item) => {
          return <Extractor key={item} url={item} keyId={'title'} />;
        })}
      </td>
      <td>
        {vehicles.length && vehicles?.map((item) => {
          return <Extractor key={item} url={item} keyId={'name'} />;
        })}
      </td>
    </tr>
  );
}

export default Row;