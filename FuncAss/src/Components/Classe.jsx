import React, { useState} from 'react'

const Classe = () => {
  const [fullName, setFullName] = useState('Aya Yehia');
  const [bio, setBio] = useState('React Js');
  const [imgSrc, setImgSrc] = useState('Img');
  const [profession, setProfession] = useState('Student');
  //this state is the responsible for the updating condition used
  const [show, setShow] = useState(false);

 //function to update the show state
  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div>
      <button onClick={toggleShow} >Toggle</button>
     
      {show && (
        <div>
          <p>Full Name: {fullName}</p>
          <p>Bio: {bio}</p>
          <p>Image Source: {imgSrc}</p>
          <p>Profession: {profession}</p>
        </div>
      )}




    </div>
  )
}

export default Classe
