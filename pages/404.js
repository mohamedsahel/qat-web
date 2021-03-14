import Image from 'next/image'
import Link from 'next/link'

import s from '../styles/404.module.css'


export default function NotFound() {
  return (
    <div className={s.container} >
      <Head>
        <title>404 | unfound</title>
      </Head>
      <Image src='/404.png' width={300} height={300} />
      <p className={s.oops}>Oooops ... I think you are lost!</p>
      <Link href='/' passHref>
        <a className={s.button} >Go back home</a>
      </Link>
    </div>
  )
}
