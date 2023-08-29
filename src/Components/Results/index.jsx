
import './Results.scss';

const Results = ({ loading, responseData }) => {
  return (
    <div className="Results">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{responseData ? JSON.stringify(responseData, null, 2) : null}</pre>
      )}
    </div>
  );
};

export default Results;
