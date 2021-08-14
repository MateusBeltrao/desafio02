import React, { Component } from 'react'
export class Radio extends Component{
    render(){
        return(
            <div>
                <section>
                    <input type="radio" value="Radio button1" name="1"/>Radio button1
                    <input type="radio" value="Radio button2" name="2"/>Radio button2
                    <input type="radio" value="Radio button3" name="3"/>Radio button3
                </section>
                <section>
                    <input type="number" placeholder="00/00/0000"></input>
                </section>

            </div>
        )
    }
}