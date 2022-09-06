import React from 'react'

export default function About() {
  return (
      <div className="accordion" id="accordionExample">
              <h1>About us</h1>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne"/>
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </div>
      </div>
  )
}
