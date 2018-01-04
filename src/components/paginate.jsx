/**
 * The component facilitates pagination of items.
 * */
import React from 'react';

/**
 * Function laysout the Pagination component
 * @param {object} props - props passed on to the component
 */
const Paginate = props => (

  <div>
    <ul className="pagination">
      {/* Button to navigate to previous page */}
      {props.hasPrev ?
        <li className="page-item">
          <button className="page-link" onClick={() => props.onPrev()}>&laquo;previous</button>
        </li>
      :
        <li className="page-item disabled">
          <button className="page-link" onClick={() => props.onPrev()}>&laquo;previous</button>
        </li>
      }
      <li className="page-item">
        {/* Show Displaying no pages incase of zero results */}
        {props.pages === 0 ?
          <p className="page-link">Displaying no page</p>
        :
          <p className="page-link">{`Page ${props.page} of ${props.pages}`}</p>}
      </li>
      {/* Button to navigate to next page */}
      {props.hasNext ?
        <li className="page-item">
          <button className="page-link" onClick={() => props.onNext()}>Next&raquo;</button>
        </li>
      :
        <li className="page-item disabled">
          <button className="page-link" onClick={() => props.onNext()}>Next&raquo;</button>
        </li>
      }
    </ul>
  </div>
);
// export component as default
export default Paginate;
