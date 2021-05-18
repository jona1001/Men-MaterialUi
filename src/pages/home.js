import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class home extends Component {


   render() {

      return (

         <React.Fragment>
            <CssBaseline />
            <Container fixed>
               <Typography component="div" style={{ height: '100%', width: '220px' }} >
                  <div>
                     <h1>Inicio</h1>
                     <p>pagina de Inicio</p>
                  </div>
               </Typography>
            </Container>
         </React.Fragment>

      )
   }
}
