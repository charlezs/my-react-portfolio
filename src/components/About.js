import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let pageData = this.props.pageData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">
               
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 pageData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{pageData.name}</span>
                     <br></br>
       						   <span>
                     {pageData.address}
                    </span>
                    <br></br>
                    <span>{pageData.phone}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}