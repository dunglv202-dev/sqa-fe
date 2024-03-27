const trimParams = (params) => {
  Object.keys(params).forEach((k) => params[k] == null && delete params[k]);
  return Object.keys(params).length > 0;
};

const fetchApi = async ({ endpoint = '/', method = 'GET', params, payload }) => {
  const accessToken = localStorage.getItem('accessToken');

  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': true,
      Authorization: `Bearer ${accessToken}`,
    },
  };

  if (payload) {
    config.body = JSON.stringify(payload);
  }

  if (params && trimParams(params)) {
    endpoint = endpoint + '?' + new URLSearchParams(params);
  }

  const resp = await fetch(`http://localhost:8080${endpoint}`, config);

  if (!resp.ok) {
    const respPayload = await resp.json();
    alert(respPayload.error);
    throw new Error(respPayload.error);
  }

  try {
    return await resp.json();
  } catch (e) {
    return;
  }
};

export { fetchApi };
