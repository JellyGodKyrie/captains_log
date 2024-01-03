const React = require('react')

function New (props) {
    return(
        <div>
            <h1>New Log Page</h1>
            <form action="/logs" method="POST">
                Title: <input type="text" name="title" /><br/>
                Entry: <input type="text" name="entry" /><br/>
                Is Ship Broken: <input type="checkbox" name="shipIsBroken" /><br/>
                <input type="submit" value="Create Log Entry" />
            </form>
        </div>
    )
}

module.exports = New