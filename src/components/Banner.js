import '../styles/Banner.css'

function Banner() {
    return (
        <div className='ssu-banner'>
            <div className='ssu-buttons-container'>
                <img src={require('../assets/logo.png')} alt='Logo' className='ssu-logo' />
                <button className='ssu-button'>SafeSportUnity</button>
                <button className='ssu-button'>Activities</button>
                <button className='ssu-button'>They made it !</button>
                <button className='ssu-button'>My profile</button>
                <button className='ssu-button'>Sign In</button>
            </div>
        </div>
    )
}

export default Banner