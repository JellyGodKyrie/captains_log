const React =  require('react')

function Index(props) {
    return (
        <div>
            <h1>Captain's Log Index</h1>
            <a href='/logs/New'>Create a New Log Entry</a>
            <ul>
                {
                    props.logs.map((log) => {
                        return (
                            <li key={log._id}>
                                <a href={`/logs/${log._id}`}>
                                    {log.title}
                                </a>
                                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value={`Delete`} />
                                </form>
                                <div>
                                    <a href={`/logs/${log._id}/edit`}>
                                        <button>
                                            {`Edit`}
                                        </button>
                                    </a>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index