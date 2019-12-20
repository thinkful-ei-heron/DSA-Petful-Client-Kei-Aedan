import React from 'react';
import { withRouter } from 'react-router-dom';

class Info extends React.Component {
    render() {
        return (
            <div className='info-screen'>
                <section className='process'>
                    <h2>The adoption process</h2>
                    <p>When waiting in line to adopt these pets you will be able to see current pets availiable.</p>
                    <p>Every 30 seconds the person in the front of the line change so make sure to pay attention.</p>
                    <p>When it is your turn the option to adopt either a dog, a cat or both pets will present itself. You still will be on the timer so make it count.</p>
                    <p>Once you submit you'll be removed from the front of the line and the pets will be shipped to you.</p>
                </section>
                <section className='getting-in-line'>
                    <h2>Getting in line</h2>
                    <p>If you would like a chance to adopt a pet please enter your name below.</p>
                    <form className='name-form' onSubmit={(e) => {
                        e.preventDefault();
                        this.props.setName(e.target.name.value, this.props.history);
                    }}>
                        <label htmlFor='name'>Your name:</label>
                        <input type='text' name='name'></input>
                        <button type='submit'>Submit</button>
                    </form>
                    <p>Otherwise if you would like to join just to watch the pets being adopted please press the button below.</p>
                    <button onClick={() => {
                        this.props.history.push('/adopt')
                    }}>Enter without getting in line</button>
                </section>


            </div>

        )
    }
}

export default withRouter(Info);