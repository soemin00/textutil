import React , {useState} from 'react'

export default function Form(props) {
  const handleUpClick = () =>{
    //console.log('Clicked Successful'); 
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) =>{
    //console.log('Changed Successful'); 
    setText(event.target.value);
  }
  const handleClear = () =>{
    let newText = '';
    setText(newText);
  }
  const [text,setText] = useState('Enter the text here ');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'black'}} id="textBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Click for Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters </p>
      <h2>Text Preview</h2>
      <p>{text.length>0?text:'Enter the text above to preview here'}</p>
    </div>
    </>
  )
}
