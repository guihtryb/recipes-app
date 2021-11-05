async function swapi() {
  const midpoint = await fetch('url');
  const endpoint = await midpoint.json();

  return endpoint;
}

export default swapi;
