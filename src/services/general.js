const fetchApi = async ({ endpoint = '/', method = 'GET', payload }) => {
  const accessToken = localStorage.getItem('accessToken');

  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  if (payload) {
    config.body = JSON.stringify(payload);
  }

  const resp = await fetch(`http://localhost:8080${endpoint}`, config);

  if (!resp.ok) {
    const respPayload = await resp.json();
    throw new Error(respPayload.error);
  }

  try {
    return await resp.json();
  } catch (e) {
    return;
  }
};

export { fetchApi };
