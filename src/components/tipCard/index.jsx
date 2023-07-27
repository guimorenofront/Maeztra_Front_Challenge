import './index.scss'

const TipCard = ({ children, Title, subtitle }) => {

    return (
        <div className="TipCardBox">
            <div className='TipCard'>
                {children}
                <div>
                    <h1>{Title}</h1>
                    <h2>{subtitle}</h2>
                </div>
            </div>
        </div>
    )
}

export default TipCard