import  { useState } from 'react';
import './Form.scss';

const Form = ({ onSubmit }) => {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestParams = {
      method: method,
      url: url,
    };
    onSubmit(requestParams); // Call the onSubmit function passed as a prop
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            name="url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">GO!</button>
        </label>
       
        <label className="methods">
          <span
            id="get"
            onClick={() => setMethod('GET')}
            className={method === 'GET' ? 'selected' : ''}
          >
            GET
          </span>
          <span
            id="post"
            onClick={() => setMethod('POST')}
            className={method === 'POST' ? 'selected' : ''}
          >
            POST
          </span>
          <span
            id="put"
            onClick={() => setMethod('PUT')}
            className={method === 'PUT' ? 'selected' : ''}
          >
            PUT
          </span>
          <span
            id="delete"
            onClick={() => setMethod('DELETE')}
            className={method === 'DELETE' ? 'selected' : ''}
          >
            DELETE
          </span>
        </label>
      </form>
    </>
  );
};

export default Form;
