import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import flyer from '/flyer.pdf'
import schedule from '/schedule.pdf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="wrapper"></div>
      <div class="light-container">
        <div class="light1">
          <div class="ray"></div>
        </div>

        <div class="light2"> 
          <div class="ray"></div>
        </div>

        <div class="light3">
          <div class="ray"></div>
        </div>

        <div class="light4"> 
          <div class="ray"></div>
        </div>
      </div>
      <div className="relative isolate py-12">
        <div className="py-8 sm:py-16 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <span className='font-moonrock'>JAM</span> with us.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-800 z-20">
                Get ready for a weekend of non-stop rock music at the biggest festival of the year! With three stages and over a dozen bands performing, you'll experience the best in classic rock, heavy metal, and more. Whether you're a fan of progressive rock, psychedelic rock, or electronic, there's something for everyone at this festival. Don't miss out on the chance to be a part of the ultimate rock experience, complete with food, drinks, and merchandise. Get ready to rock out at the festival of a lifetime!
              </p>
            </div>
            <div className="mt-8 flow-root sm:mt-16">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className='flex flex-col gap-4'>
                  <div className='rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4'>
                    <img
                      src="/flyer.png"
                      alt=""
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    />
                  </div>
                  <a download="" href={flyer} className="self-center">
                    <button
                      type="button"
                      className="rounded-md bg-gray-900/5 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900/10"
                    >
                      Download Flyer
                    </button>
                  </a>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4'>
                    <img
                      src="/schedule.png"
                      alt=""
                      className="h-full w-full object-cover object-center sm:h-full sm:w-full rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    />
                  </div>
                  <a download="" href={schedule} className="self-center">
                    <button
                      type="button"
                      className="rounded-md bg-gray-900/5 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900/10"
                    >
                      Download Schedule
                    </button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
