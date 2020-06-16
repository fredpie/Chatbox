import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }



    render () {

        if(this.state.goToChat) {
            return <Redirect to={}></Redirect>
        }



        return (
            <div className='connexionBox'>
                <form className='connexion'>
                    <input 
                        value={this.state.pseudo} 
                        type='text' 
                        placeholder='Pseudo' 
                        onChange={this.handleChange} 
                        required />
                    <button>GO!</button>
                </form>       
            </div>
        )
    }
}

export default Connexion