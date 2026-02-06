const URL="https://cat-fact.herokuapp.com"
const getFacts=(async () => {
    let response=await fetch(URL);
    let data=await response.json();
    console.log(data);
});