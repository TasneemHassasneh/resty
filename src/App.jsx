import  { useState, useReducer } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

// Define a reducer function to manage the history
const historyReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_API_CALL':
      return [...state, action.payload];
    default:
      return state;
  }
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [responseHeaders, setResponseHeaders] = useState({});
  const [responseData, setResponseData] = useState({});
  const [history, dispatch] = useReducer(historyReducer, []);

  const handleApiCall = async (url, method, requestBody) => {
    setLoading(true);

    try {
      const requestOptions = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      };

      const response = await fetch(url, requestOptions);
      const responseData = await response.json();

      const headers = {};
      response.headers.forEach((value, name) => {
        headers[name] = value;
      });
      setResponseHeaders(headers);
      setResponseData(responseData);

      // Dispatch an action to add the current API call to the history
      dispatch({
        type: 'ADD_API_CALL',
        payload: {
          url,
          method,
          requestBody,
          responseHeaders,
          responseData,
        },
      });
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form handleApiCall={handleApiCall} />
      <Results loading={loading} responseHeaders={responseHeaders} responseData={responseData} />
      <History history={history} />
      <Footer />
    </div>
  );
};

export default App;
