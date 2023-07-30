import React from "react";

function About(props)
{

let mystyle={
  color:props.mode==="dark"?"white":"black",
  backgroundColor:props.mode==="dark"?"black":"white"
}

    return(
<div className="container" style={mystyle}>
<h1 className="my-4">About us</h1>
<div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong> Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle} >
        textutils gives you a way to analyze your text uickly and efficiently.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle} >
      Text utils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and characters.Thus it is suitable to writing text with words and characters limits.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}  >
        This word counter software works in any web browser such as chrome,firefox, internet explorer,safari,opera.it suits to count character in facebook,blog,books,excel document,pdf document,essays,etc.
      </div>
    </div>
  </div>
</div>
<br></br><br></br>
<br></br><br></br>
<h3>This basic React app is Created by me (ANKITA)</h3>
Throughout this building/creating process i learned deeply about the concept of REACT.
</div>
    );
}


export default About;