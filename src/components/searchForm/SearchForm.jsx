import { Form, Input, Button } from "./searchForm.styled";
import {BiSearchAlt2} from 'react-icons/bi';

export default function SearchForm({handleSubmit}) {
    
    const handleInputChange = (e) => {
        e.preventDefault();
        handleSubmit(e.currentTarget.elements.query.value);
        e.currentTarget.elements.query.value = "";
      };

    return (
        <Form onSubmit={handleInputChange}>
           <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movies by title"
          />

            <Button type="submit">
            <BiSearchAlt2/>
            </Button>
        </Form>
    )
}