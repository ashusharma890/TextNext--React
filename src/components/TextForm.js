import React,{useState} from 'react'



export default function TextForm(props) {
  const[text,setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase!","success");
  }

  const handleOnChange = (event) => {
    console.log("changed");
    setText(event.target.value)
  }

  const handleDwnClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase!","success");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!","success");
  }

  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
}

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Space Cleared!","success");
  }

  return (
    <>
<div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
    <div className="mb-3">
      <h1>{props.heading}</h1>
    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button disabled={text.length===0} className="btn btn-outline-primary mx-2" onClick={handleDwnClick}>Convert to LowerCase</button>
    <button disabled={text.length===0} className="btn btn-outline-primary mx-2"  onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-outline-primary mx-2" onClick={handleExtraSpaces}>Remove extra-space</button>
    <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
</div>

<div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read</p>
</div>

    <div className="container d-flex justify-content-center" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your text preview</h1>
    </div>
    <div className="card-group mx-3 my-3">
    <div className="card mx-2">
    <img src="https://swall.teahub.io/photos/small/63-631872_holy-dawn-4k-wallpaper-download-holy-dawn-4k.jpg" className="card-img-top" alt="..."/>
    <div className="card-body" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
      <h5 className="card-title text-center">Text Preview-Normal</h5>
      <p className="card-text text-center">{text.length>0?text:"Preview"}</p>
    </div>
    <div className="card-footer" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
      <small className="text-muted">{0.008 * text.split(" ").length} Minutes to read</small>
    </div>
   </div>
    <div className="card mx-2">
    <img src="https://swall.teahub.io/photos/small/28-285158_mac-ios-blue-ocean-background-uhd-4k-wallpaper.jpg" className="card-img-top" alt="..."/>
    <div className="card-body" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
      <h5 className="card-title text-center">Text Preview-UpperCase(Bold)</h5>
      <strong><p className="card-text text-center">{text.length>0?text.toUpperCase():"PREVIEW"}</p></strong>
    </div>
    <div className="card-footer" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
      <small className="text-muted">{0.008 * text.split(" ").length} Minutes to read</small>
    </div>
    </div>
    <div className="card mx-2">
    <img src="https://swall.teahub.io/photos/small/28-285011_4k-mountain-resolution-background-desktop-wallpapers-high-resolution.jpg" className="card-img-top" alt="..."/>
    <div className="card-body" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
      <h5 className="card-title text-center">Text Preview-LowerCase(Bold)</h5>
      <strong><p className="card-text text-center">{text.length>0?text.toLowerCase():"preview"}</p></strong>
    </div>
    <div className="card-footer" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
      <small className="text-muted">{0.008 * text.split(" ").length} Minutes to read</small>
    </div>
    </div>
    </div>
    
</>
  )
}
