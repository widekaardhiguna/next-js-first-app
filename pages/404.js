import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className="not-found">
      <h1>Ooooops....</h1>
      <h2>That page cannot be found</h2>
      <p>You will be redirected to <Link href="/"><a>Homepage</a></Link> in 3 seconds &nbsp;</p>
    </div>
  );
}
 
export default NotFound;