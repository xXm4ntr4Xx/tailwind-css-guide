import Image from 'next/image';
import cat1 from '../public/image/cat1.webp'
import cat2 from '../public/image/cat2.webp'
import cat3 from '../public/image/cat3.webp'
import {headstyle} from '../styles/theStyle.jsx'

export default function Home() {
  return (
    <div className={headstyle}>
      <h1 className='text-3xl'>The Cat App</h1>
      <div className='relative w-32 h-32 overflow-hidden  rounded-full ring-2 ring-black-300 ring-offset-4 mt-6'>
        <Image
          objectFit='cover'
          src={cat1}
          alt='Picture of Cat1'
          layout='fill'
          priority
        />
      </div>

      <div className='relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4 mt-6'>
        <Image
          objectFit='cover'
          src={cat2}
          alt='Picture of Cat1'
          layout='fill'
          priority
        />
      </div>

      <div className='relative  w-32 h-32 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4 mt-6'>
        <Image
          objectFit='cover'
          src={cat3}
          alt='Picture of Cat1'
          layout='fill'
          priority
        />
      </div>

      <div>
        <h2 className='text-3xl mt-3'>Hello</h2>
      </div>
    </div>
  )
}
