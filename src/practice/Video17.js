import React from 'react'

export default function Video17() {

    let date = new Date(2020, 5, 5, 10);
    date = 100;
    let css = {
    }

    let s = "";

    if (date < 12) {
        s = "Good Mornning"
        css.color = 'blue'
    }
    else if (date > 12 && date < 18) {
        s = "Good aftennon"
        css.color = 'orange'
    }
    else {
        s = "Good night"
        css.color = 'white'

    }
    let s2 = "vahab";

    return (
        <div >
            Hellow sir <span style={css}> {s2} {s}</span>
        </div>
    )
}
