import './App.css';


function App(data) {
  // code here
  let i_data = data.prop();

  console.log(i_data)
  return(
    <>
      <h2 className='heading'>Image Gallery</h2>
      <div className='body'>
      {i_data.map((obj)=>{
        return(
          <img src = {obj.img}></img>
        )
      })}
      </div> 
    </>
  )
}

export default App;
