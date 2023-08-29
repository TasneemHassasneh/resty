import  { useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History/History.jsx';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [responseHeaders, setResponseHeaders] = useState({});
  const [responseData, setResponseData] = useState({});
  const [history, setHistory] = useState([]);

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

      const newApiCall = {
        url,
        method,
        requestBody,
        responseHeaders,
        responseData,
      };
      setHistory((prevHistory) => [...prevHistory, newApiCall]);
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
