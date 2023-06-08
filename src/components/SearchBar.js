import {useState} from 'react';
import './SearchBar.css';

function SearchBar ({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onSubmit(term); 
    };

    const handleChange = (event) => {
        setTerm(event.target.value);         //setTerm(event.target.value.replace(/[a-z]/, '')) replace is to restrict the users from tryping the alphabets

    }
    
    return <div className = "search_bar" >
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
            <input value = {term} onChange = {handleChange}/>
        </form>
       
    </div>;
}

export default SearchBar;