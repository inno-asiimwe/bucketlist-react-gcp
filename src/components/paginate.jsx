/**
 * The component facilitates pagination of items.
 * */
import React from 'react';

const Paginate = props => (
  <div>
    <ul className="pagination">
      <li className="page-item">
        <button className="page-link" onClick={() => props.onPrev()}>&laquo;previous</button>
      </li>
      <li className="page-item">
        {props.pages === 0 ?
          <p className="page-link">Displaying no page</p>
        :
          <p className="page-link">{`Page ${props.page} of ${props.pages}`}</p>}
      </li>
      <li className="page-item">
        <button className="page-link" onClick={() => props.onNext()}>Next&raquo;</button>
      </li>
    </ul>
  </div>
);
export default Paginate;
