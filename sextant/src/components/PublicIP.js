import React, { useEffect, useState } from 'react';

const PublicIP = ({ IPV }) => {
  // Store user's public ip
  const [ip, setIp] = useState();

  // Detremine Ip vesion ipv4 or ipv6
  const IP = IPV === 6 ? 'api64' : 'api';

  // Function to collect data
  const getApiData = async () => {
    await fetch(`https://${IP}.ipify.org?format=json`)
      .then((response) => response.json())
      .then((data) => setIp(data.ip));
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <p>Your Public IP ({IPV ? 'IPV6' : 'IPV4'})</p>
      <p>{ip}</p>
    </div>
  );
};

export default PublicIP;
