import './index.scss'

const TitleComp = ({Title, size}) =>{
    return (
        <p className='TitleComp' style={{fontSize:size}}>
            <strong>
                {Title}
            </strong>
        </p>
    )
}

export default TitleComp