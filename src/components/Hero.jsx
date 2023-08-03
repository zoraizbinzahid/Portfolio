import { motion } from 'framer-motion'
import {styles} from '../styles'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7xl mx-auto flex flex-row items-start gap-5` }>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm 
          <span className='text-[#E03611]'> Zoraiz</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm a Full Stack Developer. <br className='sm:block hidden' /> MERN Stack Developer. 
          </p>
        </div>
      </div>
        <ComputersCanvas />
    </section>
  )
}

export default Hero