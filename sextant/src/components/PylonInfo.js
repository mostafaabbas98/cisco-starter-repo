import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:55455');

const PylonInfo = () => {
  const [timestamp, setTimeStamp] = useState();

  useEffect(() => {
    client.onerror = function () {
      console.log('Connection Error');
    };

    client.onopen = function () {
      console.log('WebSocket Client Connected');
    };

    client.onclose = function () {
      console.log('WebSocket Client Closed');
    };

    client.onmessage = function (e) {
      // console.log(e.timeStamp);
      // console.log(new Date().getTime() - new Date(e.timeStamp).getTime());
      const timesInMiliSecond =
        new Date().getTime() - new Date(e.timeStamp).getTime();
      setTimeStamp(new Date(timesInMiliSecond).getMilliseconds());
    };
  }, []);

  console.log(new Date().getTime());

  return (
    <div>
      <p>Your Network Latency</p>
      <p>{timestamp} ms</p>
    </div>
  );
};

export default PylonInfo;
