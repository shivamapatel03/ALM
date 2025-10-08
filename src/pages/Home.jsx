// import React from 'react'
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
function Home() {
  return (
    <div>
      <Nav />
    {/* Hero Section */}
    <section className="text-center py-5 bg-light container-fluid">
      <div className="container">
        {/* Heading */}
        <h1 className="fw-bold display-5">
          Seamless <span  style={{ color: "purple" }}>Audio-to-Text</span> Conversion
        </h1>
        <p className=" mt-3 mb-4">
          AI-powered speech-to-text that transforms podcasts, meetings, lectures,
          and everyday sounds into accurate, searchable text—fast and secure.
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 mb-5">
          <button className="btn btn-primary px-4 rounded-pill" style={{ background: "purple", border: "none" }}>
            Get Started
          </button>
          <button className="btn btn-outline-dark px-4 rounded-pill">
            Try It Free
          </button>
        </div>

        {/* Video Section */}
        <div className="position-relative rounded-4 shadow-lg overflow-hidden" style={{ maxWidth: "65vw", margin: "0 auto" }}>
          <video
            className="w-100"
            autoPlay
            loop
            muted
            playsInline
            poster="https://via.placeholder.com/700x400.png?text=Video+Thumbnail"
          >
            <source src="../src/video/slides.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
    <div class="text-left py-5 container">
  
      <h2 class="fw-bold mb-3">
        Who <span class="text-dark fw-bold">It’s For</span>
      </h2>
      <p class="fs-5 mb-5 text-secondary">
        Flexible AI transcription for all kinds of projects.
      </p>
      <div class="row justify-content-center align-items-center g-4 flex-column flex-md-row">

        <div class="col-6 col-sm-4 col-md-2 text-center w-sm-100">
          <img src="../src/images/creator.png" alt="Creator" class="rounded-circle mb-2 img-fluid" />
          <p class="fw-bold">Creator</p>
        </div>


        <div class="col-6 col-sm-4 col-md-2 text-center w-sm-100">
          <img src="../src/images/student.png" alt="Student" class="rounded-circle mb-2 img-fluid" height={50} />
          <p class="fw-bold">Student</p>
        </div>


        <div class="col-6 col-sm-8 col-md-2 text-center  w-sm-100">
          <img src="../src/images/businessman.png" alt="Businessman" class="rounded-circle mb-2 img-fluid" />
          <p class="fw-bold">Businessman</p>
        </div>


        <div class="col-6 col-sm-4 col-md-2 text-center w-sm-100">
          <img src="../src/images/developers.png" alt="Developers" class="rounded-circle mb-2 img-fluid" />
          <p class="fw-bold">Developers</p>
        </div>

      </div>
    </div>
    <div className='bg-light py-5 container-fluid'>
      <div className='container'>
        <h1>Features</h1>
        <div className='row'>
          <div className="col-md-6 d-flex flex-column justify-content-end align-items-center mt-5">
            <h2 className='text-center text-dark'>Audio into text</h2>
            <img src="../src/images/chat.png" alt="features" class="img-fluid mt-5" width={450} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-start align-items-center mt-5">
            <h2 className='text-center text-dark mb-3'>Multiple language support</h2>
            <div className='d-flex mt-5 align-items-center bg-dark rounded-pill p-2'>
              <button className='btn btn-dark'>Hindi</button>
              <button className='btn btn-dark'>Telugu</button>
              <button className='btn btn-dark'>Tamil</button>
            </div>
            <div className='mt-2'>And more...</div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5">
        {/* Heading */}
        <h1 className="fw-bold display-md-5 display-sm-1 text-start">Ready to turn on sound into text?</h1>
        <h1 className="fw-bold display-md-5 display-sm-1 text-end">Upload your first file free</h1>
        <div className="d-flex justify-content-end mt-5">
          <button className="btn btn-dark px-4 rounded-pill col-md-4 col-sm-7">Convert your audio into text</button>
        </div>
    </div>

    <Footer />
    </div>
  )
}

export default Home