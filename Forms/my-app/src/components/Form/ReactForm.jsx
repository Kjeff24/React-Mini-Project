import React, {useState} from 'react'

export const ReactForm = () => {

    const [formData, setFromData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Employment: "",
        isFriendly: false,
        FavLanguage:""
    })
    

    function handleChange(event) {
        const {name, type, value, checked} = event.target
        setFromData(prevForm => {
            return {
                ...prevForm,
                [name]: type === "checkbox" ? checked : value
            }
        })
        
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
    

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <label htmlFor="firstName">First name: </label>
                <input 
                    id="firstName"
                    type="text" 
                    placeholder='First Name'
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleChange}
                />
            </div>
            <div className="input-container">
                <label htmlFor="lastName">Last name: </label>
                <input 
                    id="lastName"
                    type="text" 
                    placeholder='last Name'
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleChange}
                />
            </div>
            <div className="input-container">
                <label htmlFor="email">Email: </label>
                <input 
                    id="email"
                    type="email" 
                    placeholder='@email.com'
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                />
            </div>
            <div className="check-box">
                <input 
                    id="isFriendly"
                    type="checkbox"
                    name="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                />
                <label htmlFor="isFriendly">Are you friendly? </label>
            </div>
            <fieldset>
                <legend>Current Employment Status</legend>
                <input 
                    id="unemployed" 
                    type="radio" 
                    name="Employment"
                    value="Unemployed"
                    checked={formData.Employment === "Unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input 
                    id="student" 
                    type="radio" 
                    name="Employment"
                    value="Student"
                    checked={formData.Employment === "Student"}
                    onChange={handleChange}
                />
                <label htmlFor="student">Student</label>
                <br />
                <input 
                    id="employed" 
                    type="radio" 
                    name="Employment"
                    value="Employed"
                    checked={formData.Employment === "Employed"}
                    onChange={handleChange}
                />
                <label htmlFor="employed">Employed</label>
                <br />
            </fieldset>
            <select name="FavLanguage" id="favsub" onChange={handleChange}>
                <option value="">-- Choose Language --</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="C Sharp">C Sharp</option>
                <option value="Python">Python</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
            </select>
            <button>Submit</button>
        </form>
    </div>
  )
}
