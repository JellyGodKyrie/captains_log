const React = require('react')

function Show(props) {
    return (
        <div>
            <h1>{props.log.title}</h1>
            <a href='/logs'>Go Back To Index Page</a>
            <p>
                Title : {props.log.title} <br />
                Entry : {props.log.entry} <br />
                Is The Ship Broken? : {props.log.shipIsBroken? 'The ship is broken': "The ship is not broken"}
            </p>
            <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete log: ${props.log.title}`} />
            </form>
            <div>
                <a href={`/logs/${props.log._id}/edit`}>
                    <button>
                        {`Edit log: ${props.log.title}`}
                    </button>
                </a>
            </div>
        </div>
    )
}

module.exports = Show