import { useState } from "react";



function Form(props) {
    const [formData, setFormData] = useState({
        searchterm: "",
    });

    const handleChange = function(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log('Form data updated:', formData); // Log form data changes
    };

    const handleSubmit = function(event) {
        event.preventDefault(); // Prevent page reload
        console.log('Form submitted with search term:', formData.searchterm);
        props.moviesearch(formData.searchterm); // Call the moviesearch function passed via props
        setFormData({ searchterm: "" }); // Clear the input after submission
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;