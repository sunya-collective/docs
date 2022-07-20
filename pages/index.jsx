import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function HomePage() {
  const docsIndex = '/intro'
  const router = useRouter()

  useEffect(() => {
    router.push(docsIndex)
  }, [router])

  return (
    <div className='mx-auto max-w-md'>
      <div className='text-center mt-32 text-3xl font-bold'>
      </div>
      <div className='text-center'>
      </div>
    </div>
  )
}
