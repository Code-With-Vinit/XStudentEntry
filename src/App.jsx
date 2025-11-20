import React,{useState} from "react"
import "./App.css"

function App() {

  const [rows,setRows]=useState([]);
  const [formData,setFormData]=useState({
    name:"",
    age:"",
    grade:""
  })

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData((prev)=>(
      {
        ...prev,
        [name]:value
      }
    ))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    setRows(prev=>[...prev,{...formData,id:Date.now()}]);
    console.log(formData);
    setFormData({
    name:"",
    age:"",
    grade:""
  })
  }

  const handleDelete=(id)=>{
   setRows(prev=>prev.filter(row=>row.id!==id))
  }
  const handleClear=()=>{
   setRows([]);
  }

  return (
    <div className="container">
      <h1 style={{marginBottom:0}}> Student Entry Form</h1>
      <p style={{marginTop:0}}>Add students and review the list below.</p>

      <div>
        <form onSubmit={handleSubmit}>

          <div className="Form">
              <div>
                  <label htmlFor="">Name</label>
                  <br />
                  <input 
                  className="input" 
                  type="text"
                  name="name"
                  placeholder="e.g. MS Dhoni"
                  value={formData.name}
                  onChange={handleChange} />
              </div>

              <div>
                  <label htmlFor="">Age</label>
                  <br />
                  <input 
                  className="input" 
                  type="text"
                  name="age"
                  placeholder="e.g. 14"
                  value={formData.age}
                 onChange={handleChange} />
              </div>
              
              <div>
                  <label htmlFor="">Grade</label>
                  <br />
                  <select 
                  className="select"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  >
                    <option default value="Select grade">Select grade</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>                 
                  </select>
              </div>
          </div>

          <div className="buttons">
              <button type="submit" className="btn">Add Student</button>
              <button type="button" onClick={handleClear} className="clear">Clear</button>
          </div>
        </form>
      </div>

      {rows.length===0 ?(
            <table>
              <tr>
                <td colSpan="4">No data yet</td>
              </tr>
            </table>
            ):(
              <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {
              rows.map((row)=>(
              <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.grade}</td>
              <td><button className="remove" onClick={()=>handleDelete(row.id)}>Remove</button></td>
              </tr>)
            )}
            
          </tbody>
        </table>

            )

      }

      


    </div>
  )
}

export default App
