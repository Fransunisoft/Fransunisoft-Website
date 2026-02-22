import Header from "./components/Header"  
import ApplicationProcess from "./components/ApplicationProcess"
import ChooseTrack from "./components/ChooseTrack"
import Footer from "./components/Footer"
import GotQuestions from "./components/GotQuestions"
import Modal from "./components/Modal"
import Participant from "./components/Participant"
import RealSolutions from "./components/RealSolutions"
import WhoCanApply from "./components/WhoCanApply"
import WhyRoot from "./components/WhyRoot"
import WorkOn from "./components/WorkOn"

import styles from "./root-builders.module.css"


export default  function RootBuilders() {
    return(
        <div className={styles.rootBuilderContainer}>
            <Header />
            <Modal />
            <WhyRoot />
            <WhoCanApply />
            <ApplicationProcess />
            <ChooseTrack />
            {/* <Participant /> */}
            <WorkOn />
            <GotQuestions />
            <RealSolutions />
            <Footer />


        </div>
    )
}