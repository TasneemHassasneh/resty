
import './History.scss';

const History = ({ history }) => {
  return (
    <div className="History">
      <h2>Previous API Calls</h2>
      <ul>
        {history.map((apiCall, index) => (
          <li key={index}>
            <strong>URL:</strong> {apiCall.url}<br />
            <strong>Method:</strong> {apiCall.method}<br />
            <strong>Request Body:</strong> {apiCall.requestBody}<br />
            <strong>Response Headers:</strong> {JSON.stringify(apiCall.responseHeaders)}<br />
            <strong>Response Data:</strong> {JSON.stringify(apiCall.responseData)}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
