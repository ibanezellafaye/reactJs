import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
        <main className="flex-1 bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <h1 className="text-3xl font-bold mb-4">Welcome to USTP - CDO!</h1>
            <div>
              <img src="./images/cdo.jpg" alt="" className='photo'/>
            </div>
        </main>
    )
  }
}

export default Dashboard