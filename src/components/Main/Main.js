import Faqs from './Faq/Faqs'
import Track from './Track/Track'
import Features from './Features/Features'
import Permissions from './Permissions/Permissions'
import Information from './Information/Information'
import Amount from './Amount/Amount'
import Billable from './Billable/Billable'

const Main = () => {
    return (
        <div className='main-content global-container'>
            <Billable />
            <Amount />
            <Information />
            <Permissions />
            <Features />
            <Faqs />
            <Track />
        </div>
    )
}

export default Main;