import React, { Component } from "react";

import Lists from "./pages/Lists/Lists";

class AppContainer extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <>
                <Lists />
            </>
        );
    }
}
 
export default AppContainer;