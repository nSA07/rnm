import { useState } from 'react';
import { Filter } from '../components/FIlter/Filter';
import { Layout } from '../components/Layout/Layout';
export const Page = () => {

  const [data, setData] = useState()
  const handleDataUrl = (url) => {
    setData(url)
  }
  return (
    <div className="main">
      <Filter handleDataUrl={handleDataUrl} />
      <Layout data={data} />
    </div>
  )
}
