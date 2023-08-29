import './Form.scss';

const Form = ({ requestData, setRequestData, handleApiCall }) => {
  const { method, url, requestBody } = requestData;

  const handleMethodChange = (event) => {
    setRequestData({
      ...requestData,
      method: event.target.value,
    });
  };

  const handleUrlChange = (event) => {
    setRequestData({
      ...requestData,
      url: event.target.value,
    });
  };

  const handleRequestBodyChange = (event) => {
    setRequestData({
      ...requestData,
      requestBody: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiCall();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        URL:
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
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
      {method === 'POST' || method === 'PUT' ? (
        <label>
          Request Body (JSON):
          <textarea
            value={requestBody}
            onChange={handleRequestBodyChange}
          />
        </label>
      ) : null}
      <button type="submit">Go!</button>
    </form>
  );
};

export default Form;
