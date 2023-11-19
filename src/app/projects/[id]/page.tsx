"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export const dynamic = "force-dynamic";

export default function Project() {
  const params = useParams();

  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/tiagofmuniz/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  console.log(repositories);
  return (
    <div>
      <h1></h1>
    </div>
  );
}
