"use client"
import Link from "next/link";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
const Home = () => {
  const documents = useQuery(api.documents.get)

  if(documents===undefined){
    return(
      <p>Loading...</p>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 z-10 h-16 bg-white p-4 w-full">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        {documents?.map((documents) => (
          <span key={documents._id}>{documents.title}</span>
        ))}
      </div>
    </div>
  );
};

export default Home;
