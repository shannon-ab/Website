import React from 'react';

import UE from '../assets/images/UE.jpg';
import PE from '../assets/images/PE.jpg';

export default function Events() {
  return (
    <section id="events" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <iframe
              title="Calendar"
              src="https://calendar.google.com/calendar/embed?src=n8d6uleu3460ufpvl0ffad1mi0%40group.calendar.google.com&ctz=America%2FToronto"
              style={{ border: 'hidden' }}
              width="700"
              height="600"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Event Calendar</h4>
              <p className="text-black-50 mb-0">
                The calendar on the left shows our upcoming events for DS3!
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={PE} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Events</h4>
                  <p className="mb-0 text-white-50">
                    <ul>
                      <li>Event 1</li>
                      <li>Event 2</li>
                      <li>Event 3</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={UE} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Events</h4>
                  <p className="mb-0 text-white-50">
                    <div class="float-right">
                      <ul>
                        <li>Event 1</li>
                        <li>Event 2</li>
                        <li>Event 3</li>
                      </ul>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
