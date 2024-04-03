import React, {useState} from 'react'

export default function TextForms(props) {
    
  const handleUpClick = ()=>{
    //console.log("Upper Case was Clicked"+ text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper Case!","Success");
  }
  const handleLoClick = ()=>{
    //console.log("Lower Case was Clicked"+ text);
    let netext=text.toLowerCase();
    setText(netext);
    props.showAlert("Converted to Lower Case!","Success");
  }
  const handleOnChange = (event)=>{
    console.log("onChange was clicked");
    setText(event.target.value);

  }
  const handleCopy =()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
  }
  const handleExtraSpaces =()=>{
    let newtext= text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces was removed","success");
  }
  const [text,setText]=useState('');
  //setText("New Text");//correct way to change the state
  return (
    <>

    <div className="container my-3" style={{color:props.mode==='dark mode'?'white':'black'}}> 
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark mode'?'grey':'white',color:props.mode==='dark mode'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container" style={{color:props.mode==='dark mode'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter your text above to preview it here'}</p>
      </div>
      </>
  )
}
