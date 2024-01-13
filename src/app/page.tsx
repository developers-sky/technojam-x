'use client'
import BigText from '/home/anuragisinsane/turbodevelopers/technojam-x/components/BigText'
import Container from '/home/anuragisinsane/turbodevelopers/technojam-x/components/Container'

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center inset-0'>
        <BigText slides={['Celestial', 'PharmaTech', 'BLOG']} />
      </div>
    </Container>
  )
}
