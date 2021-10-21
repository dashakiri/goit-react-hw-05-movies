import { Form, Input, Button } from "./searchForm.styled";

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
                Search
            </Button>
        </Form>
    )
}