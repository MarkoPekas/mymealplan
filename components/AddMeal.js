import { SearchIcon } from "@heroicons/react/outline"
import axios from "axios"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

const AddMeal = ({session, setData}) => {
    const [loading, setLoading] = useState(false)
    const ref = useRef()
    const [meal, setMeal] = useState("")

    const loadingCircleVariants = {
    start: {
        y: "-50%",
    },
    end: {
        y: "50%",
    },
    }
    const loadingCircleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
    }
    const loadingContainerVariants = {
        start: {
          transition: {
            staggerChildren: 0.2,
          },
        },
        end: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }
    return (
        <div className='shadow-xl md:shadow-md rounded-xl flex items-center px-4 my-2'>
          <SearchIcon className='w-6 h-6 text-gray-500' />
          <input ref={ref} className='w-full px-4 py-3 text-gray-900 focus:outline-none placeholder-gray-500' type='text' placeholder='Quick Add' onChange={(e) => setMeal(e.target.value)} />
          <motion.button
          initial={{ width: '0px' }}
          animate={{ width: meal===''?'0px':'100px' }}
          className='rounded-md font-medium text-white bg-blue-500 whitespace-nowrap overflow-hidden flex-shrink-0 h-9 '
          onClick={() => {
            if(meal!==''){
                setLoading(true)
              console.log({
                meal: meal,
                user: session?.id
              })
              axios.post('/api/add/meal', {
                meal: meal,
                user: session?.id
              }).then(res => {
                setMeal('')
                ref.current.value = ''
                setLoading(false)
                console.log(res)
                setData(res.data.data)
              }).catch(err => {
                console.log(err)
                setLoading(false)
              })
            }
          }}
          >{loading?
            <motion.div
                className="gap-1 flex justify-center items-center"
                variants={loadingContainerVariants}
                initial="start"
                animate="end"
            >
                <motion.span
                    className="block w-1.5 h-1.5 rounded-full bg-white"
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
                <motion.span
                    className="block w-1.5 h-1.5 rounded-full bg-white"
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
                <motion.span
                    className="block w-1.5 h-1.5 rounded-full bg-white"
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
            </motion.div>
            :
            <p className=''>Add Meal</p>
            }</motion.button>
        </div>
    )
}

export default AddMeal;