import  { useState } from 'react';
import './Form.scss';

const Form = ({ handleApiCall }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [requestBody, setRequestBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responseData = await handleApiCall(url, method, requestBody);
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
    setRequestBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </label>
      <label>
        Select Method:
        <select value={method} onChange={handleMethodChange}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
      {(method === 'POST' || method === 'PUT') && (
        <label>
          Request Body (JSON):
          <textarea
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
          />
        </label>
      )}
      <button type="submit">Go!</button>
    </form>
  );
};

export default Form;
