import {useState} from 'react';

function SearchBar ({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onSubmit(term); 
    };

    const handleChange = (event) => {
        setTerm(event.target.value);         //setTerm(event.target.value.replace(/[a-z]/, '')) replace is to restrict the users from tryping the alphabets

    }
    
    return <div>
        <form onSubmit={handleFormSubmit}>
            <input value = {term} onChange = {handleChange}/>
        </form>
       
    </div>;
}

export default SearchBar;