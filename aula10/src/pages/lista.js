import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyBavbar from "../components/MyNavbar.js";
import MyRow from "../components/MyRow.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const ListaPessoa = () => {
    const [pessoas, setPessoas] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(lista => setPessoas(lista))
    }, [])

    return (

        <Container>
            <Row>
                <MyBavbar />
            </Row>
            <div>"Lista Pessoas"</div>
            <Table striped bordered hover>
                <tbody>
                    {
                        pessoas.map((pessoa) => {
                            return (<tr><MyRow name={pessoa.name} /></tr>)
                        })
                    }
                </tbody>
            </Table>
        </Container>)
}

export { ListaPessoa }