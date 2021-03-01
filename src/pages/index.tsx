import Head from 'next/head'

import PageContent from 'components/PageContent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <PageContent>
        <h1>
          Vitor
        </h1>
        <a target="_bank" href="https://github.com/Redfox">Github</a>
      </PageContent>
    </div>
  )
}
