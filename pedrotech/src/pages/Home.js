import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AppContext } from "../App";
import axios from "axios";

function Home() {
  const { data, isLoading,refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => axios.get("https://catfact.ninja/fact").then((res) => res.data)
  });

  const { userName } = useContext(AppContext);

  if (isLoading) {
    return <h1>Data Is Loading</h1>;
  }

  return (
    <div>
      <h1>This is Home Page and user is {userName}</h1>
      <h1>This is the {data?.fact}</h1>
      <button onClick={refetch}>Update Data</button>
    </div>
  );
}

export default Home;
