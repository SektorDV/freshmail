import React, {useState} from 'react';
import './App.css';
import FreshMail from './freshmail-js/FreshMail';
import  './constants';
import { APIKEY, APISECRET } from './constants';
import superagent from 'superagent';

const fm = new FreshMail(APIKEY, APISECRET);


const sendMail = (messageHtml) => {
   fm.ping();
  
  const jsonData = {
    subscriber: 'roman@sawblade.pl',
    html: messageHtml,
    subject: 'Test message'
  }

  // const APISIGN = sha1(APIKEY + '/rest/mail' + jsonData + APISECRET);
  // const headers = {
  //   'Content-type' : 'application/json',
  //   'X-Rest-ApiKey': APIKEY,
  //   'X-Rest-ApiSign': APISIGN
  // }
  // Axios.post('https://api.freshmail.com/rest/mail', jsonData, {headers : headers}).then(res => console.log('sent successfully. response: ', res)).catch(err => console.log('error: ', err))
  // Axios.get('https://api.freshmail.com/rest/ping', {headers: headers})
}

function App() {
  const [messageHtml, setMessageHtml] = useState('initial');
  return (
    <div className="App">
      <textarea rows="50" cols="100" onChange={(evt) => setMessageHtml(evt.target.value)} value={messageHtml}></textarea>
      <button onClick={() => sendMail(messageHtml)}>Send</button>
    </div>
  );
}

export default App;
