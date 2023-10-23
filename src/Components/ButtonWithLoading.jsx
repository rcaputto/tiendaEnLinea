import {Button, Spinner} from 'react-bootstrap';

export default function ButtonWithLoading({
    variant = 'primary', 
    type = 'submit', 
    loading, 
    children}){

    return (
        <Button type = {type} variant = {variant} disable = {loading}>
            {loading && <Spinner animation = 'border' size = 'sm'/>}
            {children}
        </Button>
    )
}