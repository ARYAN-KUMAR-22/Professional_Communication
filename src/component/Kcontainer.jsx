import '../App.css'

const kcontainer = (Props) => {
    return (
        <>
            <div className="kc">
                <div className='c1'>
                    <h3>{Props.Keyword}</h3>
                    <p> {Props.Meaning}</p>
                </div>
                <div className="c2">
                    <h5>Read More ...</h5>
                </div>
            </div>

        </>
    )
}

export default kcontainer;