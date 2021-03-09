import Index from '../index'
import { useRouter } from 'next/router'

const Page = () => {
  const { query } = useRouter()
  const [channel] = Object.keys(query)
  return <Index channel={channel || null} />
}

export default Page
