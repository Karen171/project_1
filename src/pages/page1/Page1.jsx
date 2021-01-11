import React from 'react';
import Button from '../../components/button'
import Input from '../../components/input'

const Page1 = (props) => {
    return (
        <div className="page1">
            <h1>Answer the questions</h1>
            <h2>questions</h2>
            <div>
                <p><Input type="radio" name="1" placeholder="test"/> test1</p>
                <p><Input type="radio" name="1" placeholder="test"/> test2</p>
                <p><Input type="radio" name="1" placeholder="test"/> test3</p>
            </div>
            <Button>next</Button> 
        </div>
    )
}

export default Page1