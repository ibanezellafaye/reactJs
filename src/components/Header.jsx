import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold"><FontAwesomeIcon icon={faHippo} /> Header <FontAwesomeIcon icon={faHippo} /></h1>
        </div>
    </header>
  )
}
