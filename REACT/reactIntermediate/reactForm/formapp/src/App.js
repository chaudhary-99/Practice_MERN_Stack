import { useState } from "react";
function App() {
  // const[firstName,setFirstName]=useState("");
  // const[lastName,setLastName]=useState("");
  // function changeFirstNameHandler(event){
  //  // console.log(event.target);
  //   //event.target se uss particular element console hoga
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   setLastName(event.target.value);
  // }
  //aise hum har input ki value ko handle krna ke liye change handler nhi bana skte islia previous state ka concept use krenge
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: "" });
  //console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData(prevFormData => {
      // console.log(prevFormData);
      return {
         ...prevFormData,
        [name]: type === "checked" ? checked : value
      }
    })
  }
  function submitHandler(event){
       event.preventDefault();
       //print
       console.log("Finally submitting the form");
       console.log(formData);    
  }
  return (
    <div>
     
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="first name" onChange={changeHandler} name="firstName" value={formData.firstName} />
        <br />
        <br />

        <input type="text" placeholder="last name" onChange={changeHandler} name="lastName" value={formData.lastName} />
        <br />
        <br />
        {/* input box mein value set krne ke liye value field use hoti hai and name field is used to give name to input box
         which can be used for etracting value of input bo*/}
        <input type="email" placeholder="enter your email" onChange={changeHandler} name="email" value={formData.email} />
        <br />
        <br />

        <textarea placeholder="enter your comments here" onChange={changeHandler} name="comments" value={formData.comments} />
        <br />
        <br />

        <input type="checkbox" onChange={changeHandler} name="isVisible" id="isVisible" checked={formData.isVisible} />
        <label htmlFor='isVisible'>Am I visible?</label>

        {/* in checkbox input box checked field is used for extracting the flag that wheather is field is checked or not */}

        <br />
        <br />
        {/* for grouping the elements fieldset tag is used  ans inside it for caption legend tag is used. */}

        <fieldset>
          <legend>Mode:</legend>
          <input type="radio" onChange={changeHandler} name="mode" value="Online-Mode" id="Online-Mdde" checked={formData.mode === "Online"} />
          <label htmlFor='Online-Mode'>Online Mode</label>
          {/* jab hum do radio button banate hai aur chahte hai ki at a time ek par hii click ho paye then we can write same name of it */}

          <br />
          <br />
          <input type="radio" onChange={changeHandler} name="mode" value="Offline-Mode" id="Offline-Mdde" checked={formData.mode === "Offline"} />
          <label htmlFor='Offline-Mode'>Offline Mode</label>
        </fieldset>

        <br/>
        <br/>
        {/* For creating drop down Menu  select Tag is used*/}
        <label htmlFor='favCar'>Tell me your Favourite Car?</label>
        <select  onChange={changeHandler} name="favCar" id="favCar" value={formData.favCar} >
           <option value="scarpio">Scorpio</option>
           <option value="fortuner">Fortuner</option>
           <option value="Thar">Thar</option>
           <option value="legender">legender</option>
           <option value="defender">defender</option>

        </select>
        <br/>
        <br/>
        {/* <input type="submit" value=" Submit"/> */}
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
