import { useState } from 'react';

/*ONE INPUT FIELD
function MyForm() {
  const [name, setName] = useState("");
  //event
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
*/

//MULTIPLE INPUT FIELDS
// function MyForm() {
//     const [inputs, setInputs] = useState({});
//     const [textarea, setTextarea] = useState(
//         "The content of a textarea goes in the value attribute"
//     );

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({ ...values, [name]: value }))
//         setTextarea(event.target.value);
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(inputs);
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Enter your name:
//                 <input
//                     type="text"
//                     name="username"
//                     value={inputs.username || ""}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label>Enter your age:
//                 <input
//                     type="number"
//                     name="age"
//                     value={inputs.age || ""}
//                     onChange={handleChange}
//                 />
//             </label>
//             <input type="submit" />
//         </form>
//     )
// }

//TEXT AREA(allows chane to text and size)
// function MyForm() {
//     const [textarea, setTextarea] = useState(
//         "The content of a textarea goes in the value attribute"
//     );

//     const handleChange = (event) => {
//         setTextarea(event.target.value)
//     }

//     return (
//         <form>
//             <textarea value={textarea} onChange={handleChange} />
//         </form>
//     )
// }

function MyForm() {
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}

export default MyForm;