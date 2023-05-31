import { useState, useEffect } from "react";

// initial state outside of component for github profile values
const initProfile = {
  publicRepos: null,
  website: null,
};

const Fetch = () => {
// initialize state with initProfile so it's not undefined
const [ profile, setProfile ] = useState(initProfile);

// get data from github API
const getProfile = async () => {
  const response = await fetch("https://api.github.com/users/agorbacheva-y");
  const json = await response.json();

  // check field names on API
  // update state with response from API
  setProfile({
    publicRepos: json.public_repos,
    website: json.blog
  });
};

// load github profile from API when component mounts
// load only once when page first mounts
useEffect(() => {
  getProfile();
},[]);

  return (
    <div>
      <h1>fetch data with useEffect</h1>
      <h3>{`Public repositories: ${profile.publicRepos}`}</h3>
    </div>
  );
};

export default Fetch;

// fetch allows to make http request to backend
// can use GET POST PUT DELETE