import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BeakerIcon, CheckCircleIcon, SearchIcon, XCircleIcon } from '@heroicons/react/outline'
import NavBar from '../components/NavBar/mobile'
import { useState } from 'react'
import axios from 'axios'
import MealCard from '../components/MealCard'
import MealCategory from '../components/MealCategory'
import MealCardHorizontal from '../components/MealCardHorizontal'




export default function Home() {
  const [meal, setMeal] = useState("")
  console.log(meal)
  return (
    <div>
      <Head>
        <title>My Meal Plan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-7xl mx-auto p-4 pt-16'>
        <p className='text-gray-500'>Delicious</p>
        <p className='text-gray-900 text-2xl md:text-4xl font-bold'>Easy to cook menu</p>
        <div className='shadow-xl md:shadow-md rounded-xl flex items-center px-4 my-2'>
          <SearchIcon className='w-6 h-6 text-gray-500' />
          <input className='w-full px-4 py-3 text-gray-900 focus:outline-none placeholder-gray-500' type='text' placeholder='Quick Add' onChange={(e) => setMeal(e.target.value)} />
        </div>
        <p className='font-bold text-lg pt-2'>Today{"'"}s meal plan</p>
        <MealCategory />
        <div className='flex md:grid md:grid-cols-3 xl:grid-cols-4 gap-3 overflow-x-auto overflow-y-visible p-4 -mx-4'>
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
        </div>
        <p className='font-bold text-lg pt-4 pb-2'>Today I ate</p>
        <div className='max-w-md space-y-3'>
          <MealCardHorizontal />
          <MealCardHorizontal />
          <MealCardHorizontal />
          <MealCardHorizontal />
          <MealCardHorizontal />
          <MealCardHorizontal />
        </div>

        {/* <h1 className='font-black text-3xl'>Hey there, Marko</h1> */}
        {/* <input type='text' placeholder='Add a meal' onChange={(e) => setMeal(e.target.value)} />
        <button
        onClick={() => {
          console.log(meal, ' requested')
          axios.get('/api/hello', {
            params: {
              meal: meal
            }
          }).then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err)
          })
          setMeal("")
        }}
        >Add</button> */}
      </div>
      <NavBar id='home' />
    </div>
  )
}
