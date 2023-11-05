export default function FetchAPI() {
  const apiGet = () => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=de6cc8c`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      My API
      <button onClick={apiGet}>Fetch API</button>
    </div>
  );
}
