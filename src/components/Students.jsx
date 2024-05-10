import React, { Component } from 'react'

export class Students extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-4">Students</h2>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Students Information</h1>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">School ID</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Section</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Course</th>



            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">2022309999</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Ian Arceta</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">arceta_ian@email.com</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Archi 1</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">BS Archi</td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">2022308888</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Ella Faye Ibañez</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">ella.ibanez@email.com</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">2R2</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">BS IT</td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">2022307777</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Shean Catacutan</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">s.catacutan@email.com</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">ComSci 3</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">BS ComSci</td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">2022306666</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">JR Robles</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">jRobles@email.com</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">ComSci 3</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">BS ComSci</td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">2022305555</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Alex Johnson</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">johnson.alex@email.com</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Engi 4</td>
              <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">BS Civil Engi</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
  </main>
    )
  }
}



export default Students