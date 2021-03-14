import Head from 'next/head'
import Image from 'next/image'

import s from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Qat | Authomat Your Workflow</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={s.main}>
        <Image src='/logo.svg' width={400} height={80} />
        <p className={s.intro}>
          One of problems developers facing everyday, is repeating the same workflow tasks. But what if you can
          automate your workflow in few minutes, with your own commands, and without reinventing another cli tool? Qat is here 😉
        </p>
        <div className={s.buttons}>
          <a
            className={s.button}
            href='https://github.com/mohamedsahel/qat#readme'
            target='_blank'>Read More</a>
          <a
            className={s.link}
            href='https://www.mohamedsahel.com'
            target='_blank'>About author</a>
        </div>
      </main>
    </div>
  )
}
