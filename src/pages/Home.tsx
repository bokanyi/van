import { Page } from '../components/Page'

export const Home = () => {
  return (
    <div>
      <Page custom={"min-h-screen py-40 bg-light-rose"}>
        <h1 className='bg-orange'>Rólunk rövid bemutatkozás a</h1>
      </Page>
      <Page custom={"min-h-screen py-40 bg-orange"}>
        <h1 className=''>Képgaléria</h1>
      </Page>
      <Page custom={"min-h-screen py-40 bg-blue-green"}>
        <h1 className=''>Eseménylista</h1>
      </Page>
    </div>
  )
}

