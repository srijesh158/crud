import React, { useState } from 'react'

const Dashboard = () => {
  const[username , setUsername]=useState('');
  const[mail ,setMail]=useState('');
  const[password , setPassword] =useState('');
  const[gender , setGender] =useState('');
  const[address , setAddress] =useState('');
  const[country , setCountry] =useState('');
  const[file , setFile] =useState('');

  // ! gender selection
  let handleGenderInput=e=>{
    // console.log(e.target.value);
    setGender(e.target.value);
  }
  // ! form submission
  let handleSubmit=e=>{
    e.preventDefault();
    console.log({username ,mail ,password , gender , address ,country , file});
  }
  return (
    <div style={{margin:"100px 200px"}}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        /><br/>
        <input type="email" placeholder='email' 
        value={mail}
        onChange={(e)=>setMail(e.target.value)}
        /><br/>
        <input type="password" placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        /><br/>
        <input type="radio" name='gender' value='male'
        onChange={handleGenderInput}
        checked={gender == 'male'}
        /><label htmlFor="">Male</label>
        <input type="radio" name='gender' value='female'
        onChange={handleGenderInput}
        checked={gender == 'female'}
        /><label htmlFor="">Female</label>
        <input type="radio" name='gender' value='others'
        onChange={handleGenderInput}
        checked={gender == 'others'}
        /><label htmlFor="">Others</label>
        <br />
        <textarea name="" id="address" cols='40' rows='5'
        value={address}
        onChange={e=>setAddress(e.target.value)}
        ></textarea>

        <br />
        <select name="" id="country"
        value={country}
        onChange={e=>setCountry(e.target.value)}
        >
          <option value="">---select country---</option>
          <option value="india">India</option>
          <option value="canada">Canada</option>
          <option value="Russia">Russia</option>
          <option value="china">China</option>
          <option value="Japan">Japan</option>

        </select>
        <br />
        <input type="file" value={file} onChange={e=>setFile(e.target.value)}/>
        <br />
        <input type="submit"  value="SignUp"/>
      </form>
    </div>
  )
}

export default Dashboard