import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BeakerIcon, CheckCircleIcon, SearchIcon, XCircleIcon } from '@heroicons/react/outline'
import NavBar from '../components/NavBar/mobile'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import MealCard from '../components/MealCard'
import MealCategory from '../components/MealCategory'
import MealCardHorizontal from '../components/MealCardHorizontal'
import LoginButton from '../components/next-auth/LoginButton'
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion'
import AddMeal from '../components/AddMeal'


export default function Home(props) {
  const [todaysMeals, setTodaysMeals] = useState([])
  const { data: session } = useSession()
  const ref = useRef()

  useEffect(() => {
    if(session?.id)
    axios.get(`/api/get/meals/today`, {
      params: {
        user: session?.id
      }
    }).then(res => {
      setTodaysMeals(res.data.data)
    })
  }, [session])
  console.log(todaysMeals)
  return (
    <div className='bg-[url("/backdrop.svg")] bg-[length:100%]'>
      <Head>
        <title>My Meal Plan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-7xl mx-auto p-4 pt-16'>
        <p className='text-gray-200'>Delicious</p>
        <p className='text-white text-2xl md:text-4xl font-bold'>Hey There, {session?.user?.name}</p>
        <AddMeal session={session} setData={(data) => {
          setTodaysMeals([
            ...todaysMeals,
            ...data])
        }} />
        <p className='font-bold text-white text-lg pt-2'>Today{"'"}s meal plan</p>
        <MealCategory />
        <div className='flex md:grid md:grid-cols-3 xl:grid-cols-4 gap-3 overflow-x-auto overflow-y-visible p-4 -mx-4'>
          <MealCard />
          <MealCard />
          <MealCard />
          <MealCard />
        </div>
        <p className='font-bold text-lg pt-4 pb-2'>Today I ate</p>
        <div className='max-w-md space-y-3 flex flex-col-reverse'>
          {todaysMeals.map((meal, index) => {
            return (
              <MealCardHorizontal meal={meal} key={index} />
            )
          })}
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
