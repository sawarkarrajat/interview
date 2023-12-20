import React from 'react';
import Row from './Row';

function Table({ selected }) {

  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            films
          </th>
          <th>
            vehicles
          </th>
        </tr>
      </thead>
      <tbody>
        {
          selected && (
            <Row name={selected.name} films={selected.films} vehicles={selected.vehicles} />
          )
        }
      </tbody>
    </table>
  );
}

export default Table;