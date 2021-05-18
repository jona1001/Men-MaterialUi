import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default class Documents extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Typography component="div" style={{ height: '100%', width: '220px' }} >
                        <div>
                            <h1>Documentos</h1>
                            <p>Lista de documentos</p>
                        </div>
                    </Typography>
                </Container>
            </React.Fragment>
        )
    }
}
