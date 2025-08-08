

function WelcomeMessage({onGetPost}) {
  return (
    <center>
        <h1>
            Welcome User! there are no posts.
        </h1>
        <button type="button" 
        onClick={onGetPost} className="btn btn-primary">Get post from server</button>
    </center>
  )
}

export default WelcomeMessage
