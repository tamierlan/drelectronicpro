import React from 'react'
import './home.css'
// import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>

      <img width='100%' alt='image' src='https://images.pexels.com/photos/196653/pexels-photo-196653.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
      <h1>cellphone repair we come to you</h1>

        <button>start repair</button>
        <button>call</button>


      <div className='how-it-works'>
        <div>
          <h2>Book</h2>
          <p>Select Start Repair Service to begin your service request. A Care Pro will contact you to schedule an appointment.</p>
        </div>
        <div>
          <h2>Repair</h2>
          <p>At your scheduled time, our uBreakiFix partners will come to you and perform the repair from our mobile workshop van.</p>
        </div>
        <div>
          <h2>Complete</h2>
          <p>Repairs are usually completed within 1 hour, using genuine Samsung parts. Payment will be processed upon completion.</p>
        </div>

      </div>

      <div className='our-technician'>
        <h3>
          Our technicians are highly skilled and mobile, they travel to you at your preferred time, location and without any added cost! Our prices are
          all inclusive with all parts, labor and our (ONE YEAR) warranty!
        </h3>
      </div>


      <div className='two-image'>
        <img width='30%' height='200px' alt='img' src='https://miro.medium.com/max/700/0*hQIEakYjMZ71XSmI.jpg' />
        <img width='30%' height='230px' alt='img' src='https://cellularnerd.com/assets/images/cellnerd-van-mobile.png' />
      </div>

      <div className='our-technician'>
        <h3>
          We can fix--Iphone, Samsung, Macbook,
          Iphone issues, broken screen, power button, side buttons, water damage,
          headphone plug, faulty battery, wifi, bluetooth, charging port,  speakers, home button, cameras!
          DRELECTRONICPRO--Starts with free diagnostic exam, to find the root of the problem and allow the technician to determine the right cell phone repair path.
          Diagnostic exams are especially helpful if the problem with the device is unclear. Once the diagnostic exam is complete, the technician can explain all of your repair option and get started if you want to proceed!
        </h3>
      </div>
      <footer>
        <div className='first'>
          <h2>TESTIMONIAL</h2>
          <p>Such a fantastic service experiance.
            Cracked my phone screen at night and i had to use my phone for my job
            I called to the service and someone came to my job at middle of night and he fixed my phone within 15 min
            Very very delighted. i guess you guys have one more loyal customer now smile
            ADAM
          </p>
        </div>

        <div className='second'>
          <form>
            <input type='text' name='name' />
            <input type='text' name='email' />
            <input type='text' name='subject' />
            <input type='text' name='message' />
          </form>
        </div>

        <div className='third'>
          <h2>CONTACT INFORMATION</h2>
          <p>2297 coney island ave,
            Brooklyn,NY 11223
            Phone:757 275 5420</p>
        </div>
      </footer>
    </div>
  )
}
