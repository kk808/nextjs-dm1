import Head from 'next/head'

// @ts-ignore
import Notification from '@webjet/react/components/notification' 


export default function Home () {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
          <Notification type='success' prominence='high'>
            <h3>This is the heading for the notification.</h3>
            This is the body text that is used within a notification.
          </Notification>
      </main>
    </>
  )
}