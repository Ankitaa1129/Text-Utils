import React,{useState} from 'react'

function Textform(props){
    const  handleUpclick=()=>{
let newText=text.toUpperCase();
setText(newText);
props.showalert("Converted to uppercase","success");
    }
    const  onchangetext=(event)=>{
        setText(event.target.value);
            }

            const  handlelowclick=()=>{
                //console.log("lowercase clicked");
                let newText=text.toLowerCase();
                setText(newText);
               props.showalert("Converted to lowercase","success");
                    }
                    const  handleclearclick=()=>{
                        //console.log("uppercase clicked");
                        let newText=(' ');
                        setText(newText);
                            }

                            const handlecopy=()=>{
                             var text=document.getElementById("text");
                             text.select();
                                navigator.clipboard.writeText(text.value);
                                document.getSelection().removeAllRanges();
                                props.showalert("Text copied to clipboard","success");

                            }

                            const handleextraspaces=()=>{
                                let newText=text.split(/[ ]+/);
                                setText(newText.join(" "));
                                props.showalert("Removed extra spaces","success");
                            }



    const [text , setText]=useState('Enter text here');
    return(
        <>
<div className='container'style={{color:props.mode==='light'?'black':'white'}}>
<h1 className='my-4'>{props.heading}</h1>
<div className="mb-3">
<label htmlFor="text" className="form-label">Word counter | Character counter | Upper case to lowercase | lowercase to uppercase</label>
<textarea className='form-control' value={text}  onChange={onchangetext} style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} id="text" rows="10"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleUpclick}>convert to uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handlelowclick}>convert to lowercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleclearclick}>clear text</button>
<button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handlecopy}>copy text</button>
<button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={handleextraspaces}>Remove extra spaces</button>
</div>
<div className='container  my-5' style={{color:props.mode==='light'?'black':'white'}}>
<h2>YOUR TEXT SUMMARY</h2>
<h5>  {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  words and {text.length} characters..</h5>
</div>
</>
    );
}

export default Textform;