export default function Home() {
  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        {/* Use exclamation mark when we want to override some other styles previously provided to this element */}
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
      </section>
    </>
  )
}
