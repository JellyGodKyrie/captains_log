const React = require('react')

function Show(props) {
    return (
        <div>
            <h1>{props.log.title}</h1>
            <a href='/logs'>Go Back To Index</a>
            <p>
                Title : {props.log.title} <br />
                Entry : {props.log.entry} <br />
                Is The Ship Broken? : {props.log.shipIsBroken? 'The ship is broken': "The ship is not broken"}
            </p>
        </div>
    )
}

module.exports = Show