import './App.scss';
import  { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {
  const [requestData, setRequestData] = useState({
    method: 'GET',
    url: '',
    requestBody: '',
  });
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async () => {
    setLoading(true);

    try {
      const requestOptions = {
        method: requestData.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestData.requestBody,
      };

      const response = await fetch(requestData.url, requestOptions);
      const responseData = await response.json();

      setResponseData(responseData);
    } catch (error) {
      console.error('API request error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <div>Request Method: {requestData.method}</div>
      <div>URL: {requestData.url}</div>
      <Form
        requestData={requestData}
        setRequestData={setRequestData}
        handleApiCall={handleApiCall}
      />
      <Results loading={loading} responseData={responseData} />
      <Footer />
    </div>
  );
};

export default App;
