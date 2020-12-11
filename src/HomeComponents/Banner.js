import React, { Component } from 'react';
import Shake from 'react-reveal/Shake';
import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import Axios from 'axios';
import { ThemeProvider } from 'react-bootstrap';
SwiperCore.use([Autoplay]);
class Banner extends Component {
    constructor(props) {
        super(props);
        const apiUrl = 'https://mycoursework.uk/api/?sendType=sys';
        const apiUrl2 = 'https://mycoursework.uk/api/?sendType=client';
        this.state = {
            Shake: true,
            btnSubmitType: 'submit',
            btnSubmit: 'Avail',
            notification: 'Limited Time Offer!',
            notificationClass: '',
            iconNotify: null,
            infinite: 0,
            error: false,
            alertClass: null,
            doInf: 'cont',
            name: null,
            subject: 'null',
            number: null,
            email: null,
            endDate: 'null',
            numberOfPage: 'null',
            CountryCode: '+47'
        }
        const infiniteY = () => {
            setInterval(() => {
                this.setState({ infinite: this.state.infinite + 1 });
            }, 3000)
        }
        this.state.doInf === 'cont' ?
            infiniteY()
            :
            console.log(null)
        this.handleInput = e => {
            if (e.target.name == 'CountryCode') {
                let allCont = e.target.options;
                for (let i = 0; i < allCont.length; i++) {
                    e.target.options[i].innerHTML = e.target.options[i].getAttribute('data-countrycode')
                }
                e.target.selectedOptions[0].innerHTML = e.target.value;
                // let splited = e.target.selectedOptions[0].innerHTML;
                // let sliced = splited.split('(');
                // let finalSlap = `(${sliced[1]}`
                // e.target.selectedOptions[0].innerHTML = finalSlap;
                // console.log(finalSlap);
            }
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        const config = {
            onUploadProgress: progressEvent => {
                this.setState({
                    error: 'Please Wait ...',
                    alertClass: 'alert-success-blast'
                })
            }
        }
        this.handleForm = e => {
            e.preventDefault();
            if (!(this.state.CountryCode == 'countryCode' || this.state.CountryCode == null)) {
                this.setState({
                    error: null,
                    alertClass: '',
                })
                const mainComponent = this;
                let dataToPass = {
                    name: this.state.name,
                    CountryCode: this.state.CountryCode,
                    subject: this.state.subject,
                    number: this.state.number,
                    CountryCode: this.state.CountryCode,
                    email: this.state.email,
                    limited: true,
                    endDate: this.state.endDate,
                    numberOfPage: this.state.numberOfPage
                }
                Axios.post(apiUrl2, dataToPass).then(res => {

                }).catch(err => {
                    console.log(err)
                })
                Axios.post(apiUrl, dataToPass, config).then(res => {
                    console.log(res, this.state);
                    if (res.data.status === 'success') {
                        mainComponent.setState({
                            notification: `Offer Subscribed`,
                            notificationClass: 'Subscibed',
                            iconNotify: 'fas fa-check-circle',
                            doInf: 'dis',
                            error: false,
                            alertClass: null,
                            name: '',
                            email: '',
                            number: '',
                            Shake: false,
                            btnSubmitType: 'button',
                            btnSubmit: 'Availed !'
                        })
                    } else {
                        this.setState({
                            error: 'Subscription Failed Please refill the form',
                            alertClass: 'alert-blast',
                        })
                    }
                }).catch(err => {
                    this.setState({
                        error: 'Failed! Please Refill The form',
                        alertClass: 'alert-blast',
                    })
                    console.log(err)
                })
            } else {
                this.setState({
                    error: 'Please Select Valid Country Code',
                    alertClass: 'alert-blast',
                })
            }

        }
    }
    render() {
        const options = {
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false
        };
        return (
            <>
                <div className="main-content">
                    {/* Section: home */}
                    <Fade>
                        <section id="home" className="divider bg-img">
                            <div className="container-fluid p-tb-custom p-custom-boss">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="col-md-2 w-customized-2" />
                                        <Fade left>
                                            <div className="col-md-5 mt-11">
                                                {/* <img src="images/about/dc1.png" alt=""> */}
                                                <div className="col-md-12 mt-6r">
                                                    <h2 className=" fs-decrease">Known For - Research Help By Native PhD - Masters Level Writers</h2>
                                                    <h4 className="mt-20  fs-decrease-bottom fs-lg-big">
                                                        Serving -Since 1990
                                                    </h4>
                                                    <div className="col-md-12 p-0">
                                                        <div className="col-md-5 pl-0">
                                                            <button className="popChat btn btn-primary btn-block focus-theme leftSetMob">CHAT NOW</button>
                                                        </div>
                                                        <div className="col-md-5 mt-inc-pl-md-0">
                                                            <button className="popChat btn btn-primary btn-block focus-theme leftSetMob btn-utilizie">Get Started <i class="fas fa-paper-plane"></i> </button>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        {/* <div className="col-md-12 mt-10 mb-10 p-0">
                                                            <ul className=" d-flex-lg-align-center imageReset d-none-md">
                                                                <li><img src="https://drcooperconsultancy.co.uk/assets/images/clutch.png" alt="University" /></li>
                                                                <li><img src="https://drcooperconsultancy.co.uk/assets/images/good-firm.png" alt="University" /></li>
                                                                <li><img src="https://drcooperconsultancy.co.uk/assets/images/top-design-firm.png" alt="University" /></li>
                                                                <li><img src="https://drcooperconsultancy.co.uk/assets/images/top-digital-agency.png" alt="University" /></li>
                                                            </ul>
                                                        </div> */}
                                                        <div className="col-md-12 mt-10 mb-10">
                                                            <h4 className="mt-20  fs-decrease-bottom fs-lg-big d-flexy">
                                                                Quality Is Priority
                                                                <div className="fs-lg-big fs-lg-big-O">
                                                                    <img src={require('../images/badges/satisfation.webp')} />
                                                                    <img src={require('../images/badges/moneyBack.webp')} />
                                                                    <img src={require('../images/badges/secure.webp')} />
                                                                </div>
                                                            </h4>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <ul className="mt-10  fs-decrease-bottom">
                                                                <li><i className="fa fa-check"></i> Time Flexibility</li>
                                                                <li><i className="fa fa-check"></i> Very Low Pricing</li>
                                                                <li><i className="fa fa-check"></i> Fastest Turnaround Time</li>
                                                                <li><i className="fa fa-check"></i> Professional Proofreaders</li>
                                                            </ul>

                                                        </div>
                                                        <div className="col-md-6">
                                                            <ul className="mt-10  fs-decrease-bottom">
                                                                <li><i className="fa fa-check"></i> Satisfaction Guaranteed</li>
                                                                <li><i className="fa fa-check"></i> Experienced Teachers</li>
                                                                <li><i className="fa fa-check"></i> Very Low Pricing</li>
                                                                <li><i className="fa fa-check"></i> Professional Proofreaders</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Fade>
                                        <Fade right>
                                            <div className="col-md-5 w-custom mt-9r text-justify">
                                                {/* <div className="p-30 mt-0 bg-theme-colored border-speacial bg-foreGround p-absolute card-behind bg-foreGround r-md-0 text-justify">
                                                </div> */}
                                                <div className="pt-18 p-30 mt-0 border-speacial bg-foreGround text-justify">
                                                    <Shake spy={this.state.infinite} when={this.state.Shake}>
                                                        <h3 className="title-pattern mt-0 p-relative"><span className={`f-inc-md ${this.state.notificationClass}`}> <i className={this.state.iconNotify}></i> {this.state.notification}</span></h3>
                                                    </Shake>
                                                    <h3 className="mt-0 p-relative fs-13"><span className="text-white">UpTo 50% FLAT DISCOUNT | ORDER NOW</span></h3>
                                                    <p className=" p-relative d-none-md text-dark">We work with you until you are 100% satisfied with the quality of your paper!</p>
                                                    {/* Appilication Form Start*/}
                                                    <form className="reservation-form mt-20" method="post" onSubmit={this.handleForm} >
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="form-group mb-md-20">
                                                                    <input className="form-control" type="text" onChange={this.handleInput} id="name" name="name" value={this.state.name} placeholder="Name" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group mb-md-20 d-flex">
                                                                    <select className="form-control countryCode-top" onChange={this.handleInput} id="CountryCode" name="CountryCode">
                                                                        <option data-countrycode="Norway (+47)" value={'+47'}>+47</option>
                                                                        <option data-countrycode="UK (+44)" value={'+44'}>UK (+44)</option>
                                                                        <option data-countrycode="Algeria (+213)" value={'+213'}>Algeria (+213)</option>
                                                                        <option data-countrycode="Andorra (+376)" value={'+376'}>Andorra (+376)</option>
                                                                        <option data-countrycode="Angola (+244)" value={'+244'}>Angola (+244)</option>
                                                                        <option data-countrycode="Anguilla (+1264)" value={'+1264'}>Anguilla (+1264)</option>
                                                                        <option data-countrycode="Antigua &amp; Barbuda (+1268)" value={'+1268'}>Antigua &amp; Barbuda (+1268)</option>
                                                                        <option data-countrycode="Argentina (+54)" value={'+54'}>Argentina (+54)</option>
                                                                        <option data-countrycode="Armenia (+374)" value={'+374'}>Armenia (+374)</option>
                                                                        <option data-countrycode="Aruba (+297)" value={'+297'}>Aruba (+297)</option>
                                                                        <option data-countrycode="Australia (+61)" value={'+61'}>Australia (+61)</option>
                                                                        <option data-countrycode="Austria (+43)" value={'+43'}>Austria (+43)</option>
                                                                        <option data-countrycode="Azerbaijan (+994)" value={'+994'}>Azerbaijan (+994)</option>
                                                                        <option data-countrycode="Bahamas (+1242)" value={'+1242'}>Bahamas (+1242)</option>
                                                                        <option data-countrycode="Bahrain (+973)" value={'+973'}>Bahrain (+973)</option>
                                                                        <option data-countrycode="Bangladesh (+880)" value={'+880'}>Bangladesh (+880)</option>
                                                                        <option data-countrycode="Barbados (+1246)" value={'+1246'}>Barbados (+1246)</option>
                                                                        <option data-countrycode="Belarus (+375)" value={'+375'}>Belarus (+375)</option>
                                                                        <option data-countrycode="Belgium (+32)" value={'+32'}>Belgium (+32)</option>
                                                                        <option data-countrycode="Belize (+501)" value={'+501'}>Belize (+501)</option>
                                                                        <option data-countrycode="Benin (+229)" value={'+229'}>Benin (+229)</option>
                                                                        <option data-countrycode="Bermuda (+1441)" value={'+1441'}>Bermuda (+1441)</option>
                                                                        <option data-countrycode="Bhutan (+975)" value={'+975'}>Bhutan (+975)</option>
                                                                        <option data-countrycode="Bolivia (+591)" value={'+591'}>Bolivia (+591)</option>
                                                                        <option data-countrycode="Bosnia Herzegovina (+387)" value={'+387'}>Bosnia Herzegovina (+387)</option>
                                                                        <option data-countrycode="Botswana (+267)" value={'+267'}>Botswana (+267)</option>
                                                                        <option data-countrycode="Brazil (+55)" value={'+55'}>Brazil (+55)</option>
                                                                        <option data-countrycode="Brunei (+673)" value={'+673'}>Brunei (+673)</option>
                                                                        <option data-countrycode="Bulgaria (+359)" value={'+359'}>Bulgaria (+359)</option>
                                                                        <option data-countrycode="Burkina Faso (+226)" value={'+226'}>Burkina Faso (+226)</option>
                                                                        <option data-countrycode="Burundi (+257)" value={'+257'}>Burundi (+257)</option>
                                                                        <option data-countrycode="Cambodia (+855)" value={'+855'}>Cambodia (+855)</option>
                                                                        <option data-countrycode="Cameroon (+237)" value={'+237'}>Cameroon (+237)</option>
                                                                        <option data-countrycode="Canada (+1)" value={'+1'}>Canada (+1)</option>
                                                                        <option data-countrycode="Cape Verde Islands (+238)" value={'+238'}>Cape Verde Islands (+238)</option>
                                                                        <option data-countrycode="Cayman Islands (+1345)" value={'+1345'}>Cayman Islands (+1345)</option>
                                                                        <option data-countrycode="Central African Republic (+236)" value={'+236'}>Central African Republic (+236)</option>
                                                                        <option data-countrycode="Chile (+56)" value={'+56'}>Chile (+56)</option>
                                                                        <option data-countrycode="China (+86)" value={'+86'}>China (+86)</option>
                                                                        <option data-countrycode="Colombia (+57)" value={'+57'}>Colombia (+57)</option>
                                                                        <option data-countrycode="Comoros (+269)" value={'+269'}>Comoros (+269)</option>
                                                                        <option data-countrycode="Congo (+242)" value={'+242'}>Congo (+242)</option>
                                                                        <option data-countrycode="Cook Islands (+682)" value={'+682'}>Cook Islands (+682)</option>
                                                                        <option data-countrycode="Costa Rica (+506)" value={'+506'}>Costa Rica (+506)</option>
                                                                        <option data-countrycode="Croatia (+385)" value={'+385'}>Croatia (+385)</option>
                                                                        <option data-countrycode="Cuba (+53)" value={'+53'}>Cuba (+53)</option>
                                                                        <option data-countrycode="Cyprus North (+90392)" value={'+90392'}>Cyprus North (+90392)</option>
                                                                        <option data-countrycode="Cyprus South (+357)" value={'+357'}>Cyprus South (+357)</option>
                                                                        <option data-countrycode="Czech Republic (+42)" value={'+42'}>Czech Republic (+42)</option>
                                                                        <option data-countrycode="Denmark (+45)" value={'+45'}>Denmark (+45)</option>
                                                                        <option data-countrycode="Djibouti (+253)" value={'+253'}>Djibouti (+253)</option>
                                                                        <option data-countrycode="Dominica (+1809)" value={'+1809'}>Dominica (+1809)</option>
                                                                        <option data-countrycode="Dominican Republic (+1809)" value={'+1809'}>Dominican Republic (+1809)</option>
                                                                        <option data-countrycode="Ecuador (+593)" value={'+593'}>Ecuador (+593)</option>
                                                                        <option data-countrycode="Egypt (+20)" value={'+20'}>Egypt (+20)</option>
                                                                        <option data-countrycode="El Salvador (+503)" value={'+503'}>El Salvador (+503)</option>
                                                                        <option data-countrycode="Equatorial Guinea (+240)" value={'+240'}>Equatorial Guinea (+240)</option>
                                                                        <option data-countrycode="Eritrea (+291)" value={'+291'}>Eritrea (+291)</option>
                                                                        <option data-countrycode="Estonia (+372)" value={'+372'}>Estonia (+372)</option>
                                                                        <option data-countrycode="Ethiopia (+251)" value={'+251'}>Ethiopia (+251)</option>
                                                                        <option data-countrycode="Falkland Islands (+500)" value={'+500'}>Falkland Islands (+500)</option>
                                                                        <option data-countrycode="Faroe Islands (+298)" value={'+298'}>Faroe Islands (+298)</option>
                                                                        <option data-countrycode="Fiji (+679)" value={'+679'}>Fiji (+679)</option>
                                                                        <option data-countrycode="Finland (+358)" value={'+358'}>Finland (+358)</option>
                                                                        <option data-countrycode="France (+33)" value={'+33'}>France (+33)</option>
                                                                        <option data-countrycode="French Guiana (+594)" value={'+594'}>French Guiana (+594)</option>
                                                                        <option data-countrycode="French Polynesia (+689)" value={'+689'}>French Polynesia (+689)</option>
                                                                        <option data-countrycode="Gabon (+241)" value={'+241'}>Gabon (+241)</option>
                                                                        <option data-countrycode="Gambia (+220)" value={'+220'}>Gambia (+220)</option>
                                                                        <option data-countrycode="Georgia (+7880)" value={'+7880'}>Georgia (+7880)</option>
                                                                        <option data-countrycode="Germany (+49)" value={'+49'}>Germany (+49)</option>
                                                                        <option data-countrycode="Ghana (+233)" value={'+233'}>Ghana (+233)</option>
                                                                        <option data-countrycode="Gibraltar (+350)" value={'+350'}>Gibraltar (+350)</option>
                                                                        <option data-countrycode="Greece (+30)" value={'+30'}>Greece (+30)</option>
                                                                        <option data-countrycode="Greenland (+299)" value={'+299'}>Greenland (+299)</option>
                                                                        <option data-countrycode="Grenada (+1473)" value={'+1473'}>Grenada (+1473)</option>
                                                                        <option data-countrycode="Guadeloupe (+590)" value={'+590'}>Guadeloupe (+590)</option>
                                                                        <option data-countrycode="Guam (+671)" value={'+671'}>Guam (+671)</option>
                                                                        <option data-countrycode="Guatemala (+502)" value={'+502'}>Guatemala (+502)</option>
                                                                        <option data-countrycode="Guinea (+224)" value={'+224'}>Guinea (+224)</option>
                                                                        <option data-countrycode="Guinea - Bissau (+245)" value={'+245'}>Guinea - Bissau (+245)</option>
                                                                        <option data-countrycode="Guyana (+592)" value={'+592'}>Guyana (+592)</option>
                                                                        <option data-countrycode="Haiti (+509)" value={'+509'}>Haiti (+509)</option>
                                                                        <option data-countrycode="Honduras (+504)" value={'+504'}>Honduras (+504)</option>
                                                                        <option data-countrycode="Hong Kong (+852)" value={'+852'}>Hong Kong (+852)</option>
                                                                        <option data-countrycode="Hungary (+36)" value={'+36'}>Hungary (+36)</option>
                                                                        <option data-countrycode="Iceland (+354)" value={'+354'}>Iceland (+354)</option>
                                                                        <option data-countrycode="Pakistan (+92)" value={'+92'}>Pakistan (+92)</option>
                                                                        <option data-countrycode="India (+91)" value={'+91'}>India (+91)</option>
                                                                        <option data-countrycode="Indonesia (+62)" value={'+62'}>Indonesia (+62)</option>
                                                                        <option data-countrycode="Iran (+98)" value={'+98'}>Iran (+98)</option>
                                                                        <option data-countrycode="Iraq (+964)" value={'+964'}>Iraq (+964)</option>
                                                                        <option data-countrycode="Ireland (+353)" value={'+353'}>Ireland (+353)</option>
                                                                        <option data-countrycode="Israel (+972)" value={'+972'}>Israel (+972)</option>
                                                                        <option data-countrycode="Italy (+39)" value={'+39'}>Italy (+39)</option>
                                                                        <option data-countrycode="Jamaica (+1876)" value={'+1876'}>Jamaica (+1876)</option>
                                                                        <option data-countrycode="Japan (+81)" value={'+81'}>Japan (+81)</option>
                                                                        <option data-countrycode="Jordan (+962)" value={'+962'}>Jordan (+962)</option>
                                                                        <option data-countrycode="Kazakhstan (+7)" value={'+7'}>Kazakhstan (+7)</option>
                                                                        <option data-countrycode="Kenya (+254)" value={'+254'}>Kenya (+254)</option>
                                                                        <option data-countrycode="Kiribati (+686)" value={'+686'}>Kiribati (+686)</option>
                                                                        <option data-countrycode="Korea North (+850)" value={'+850'}>Korea North (+850)</option>
                                                                        <option data-countrycode="Korea South (+82)" value={'+82'}>Korea South (+82)</option>
                                                                        <option data-countrycode="Kuwait (+965)" value={'+965'}>Kuwait (+965)</option>
                                                                        <option data-countrycode="Kyrgyzstan (+996)" value={'+996'}>Kyrgyzstan (+996)</option>
                                                                        <option data-countrycode="Laos (+856)" value={'+856'}>Laos (+856)</option>
                                                                        <option data-countrycode="Latvia (+371)" value={'+371'}>Latvia (+371)</option>
                                                                        <option data-countrycode="Lebanon (+961)" value={'+961'}>Lebanon (+961)</option>
                                                                        <option data-countrycode="Lesotho (+266)" value={'+266'}>Lesotho (+266)</option>
                                                                        <option data-countrycode="Liberia (+231)" value={'+231'}>Liberia (+231)</option>
                                                                        <option data-countrycode="Libya (+218)" value={'+218'}>Libya (+218)</option>
                                                                        <option data-countrycode="Liechtenstein (+417)" value={'+417'}>Liechtenstein (+417)</option>
                                                                        <option data-countrycode="Lithuania (+370)" value={'+370'}>Lithuania (+370)</option>
                                                                        <option data-countrycode="Luxembourg (+352)" value={'+352'}>Luxembourg (+352)</option>
                                                                        <option data-countrycode="Macao (+853)" value={'+853'}>Macao (+853)</option>
                                                                        <option data-countrycode="Macedonia (+389)" value={'+389'}>Macedonia (+389)</option>
                                                                        <option data-countrycode="Madagascar (+261)" value={'+261'}>Madagascar (+261)</option>
                                                                        <option data-countrycode="Malawi (+265)" value={'+265'}>Malawi (+265)</option>
                                                                        <option data-countrycode="Malaysia (+60)" value={'+60'}>Malaysia (+60)</option>
                                                                        <option data-countrycode="Maldives (+960)" value={'+960'}>Maldives (+960)</option>
                                                                        <option data-countrycode="Mali (+223)" value={'+223'}>Mali (+223)</option>
                                                                        <option data-countrycode="Malta (+356)" value={'+356'}>Malta (+356)</option>
                                                                        <option data-countrycode="Marshall Islands (+692)" value={'+692'}>Marshall Islands (+692)</option>
                                                                        <option data-countrycode="Martinique (+596)" value={'+596'}>Martinique (+596)</option>
                                                                        <option data-countrycode="Mauritania (+222)" value={'+222'}>Mauritania (+222)</option>
                                                                        <option data-countrycode="Mayotte (+269)" value={'+269'}>Mayotte (+269)</option>
                                                                        <option data-countrycode="Mexico (+52)" value={'+52'}>Mexico (+52)</option>
                                                                        <option data-countrycode="Micronesia (+691)" value={'+691'}>Micronesia (+691)</option>
                                                                        <option data-countrycode="Moldova (+373)" value={'+373'}>Moldova (+373)</option>
                                                                        <option data-countrycode="Monaco (+377)" value={'+377'}>Monaco (+377)</option>
                                                                        <option data-countrycode="Mongolia (+976)" value={'+976'}>Mongolia (+976)</option>
                                                                        <option data-countrycode="Montserrat (+1664)" value={'+1664'}>Montserrat (+1664)</option>
                                                                        <option data-countrycode="Morocco (+212)" value={'+212'}>Morocco (+212)</option>
                                                                        <option data-countrycode="Mozambique (+258)" value={'+258'}>Mozambique (+258)</option>
                                                                        <option data-countrycode="Myanmar (+95)" value={'+95'}>Myanmar (+95)</option>
                                                                        <option data-countrycode="Namibia (+264)" value={'+264'}>Namibia (+264)</option>
                                                                        <option data-countrycode="Nauru (+674)" value={'+674'}>Nauru (+674)</option>
                                                                        <option data-countrycode="Nepal (+977)" value={'+977'}>Nepal (+977)</option>
                                                                        <option data-countrycode="Netherlands (+31)" value={'+31'}>Netherlands (+31)</option>
                                                                        <option data-countrycode="New Caledonia (+687)" value={'+687'}>New Caledonia (+687)</option>
                                                                        <option data-countrycode="New Zealand (+64)" value={'+64'}>New Zealand (+64)</option>
                                                                        <option data-countrycode="Nicaragua (+505)" value={'+505'}>Nicaragua (+505)</option>
                                                                        <option data-countrycode="Niger (+227)" value={'+227'}>Niger (+227)</option>
                                                                        <option data-countrycode="Nigeria (+234)" value={'+234'}>Nigeria (+234)</option>
                                                                        <option data-countrycode="Niue (+683)" value={'+683'}>Niue (+683)</option>
                                                                        <option data-countrycode="Norfolk Islands (+672)" value={'+672'}>Norfolk Islands (+672)</option>
                                                                        <option data-countrycode="Northern Marianas (+670)" value={'+670'}>Northern Marianas (+670)</option>
                                                                        <option data-countrycode="Norway (+47)" value={'+47'}>Norway (+47)</option>
                                                                        <option data-countrycode="Oman (+968)" value={'+968'}>Oman (+968)</option>
                                                                        <option data-countrycode="Palau (+680)" value={'+680'}>Palau (+680)</option>
                                                                        <option data-countrycode="Panama (+507)" value={'+507'}>Panama (+507)</option>
                                                                        <option data-countrycode="Papua New Guinea (+675)" value={'+675'}>Papua New Guinea (+675)</option>
                                                                        <option data-countrycode="Paraguay (+595)" value={'+595'}>Paraguay (+595)</option>
                                                                        <option data-countrycode="Peru (+51)" value={'+51'}>Peru (+51)</option>
                                                                        <option data-countrycode="Philippines (+63)" value={'+63'}>Philippines (+63)</option>
                                                                        <option data-countrycode="Poland (+48)" value={'+48'}>Poland (+48)</option>
                                                                        <option data-countrycode="Portugal (+351)" value={'+351'}>Portugal (+351)</option>
                                                                        <option data-countrycode="Puerto Rico (+1787)" value={'+1787'}>Puerto Rico (+1787)</option>
                                                                        <option data-countrycode="Qatar (+974)" value={'+974'}>Qatar (+974)</option>
                                                                        <option data-countrycode="Reunion (+262)" value={'+262'}>Reunion (+262)</option>
                                                                        <option data-countrycode="Romania (+40)" value={'+40'}>Romania (+40)</option>
                                                                        <option data-countrycode="Russia (+7)" value={'+7'}>Russia (+7)</option>
                                                                        <option data-countrycode="Rwanda (+250)" value={'+250'}>Rwanda (+250)</option>
                                                                        <option data-countrycode="San Marino (+378)" value={'+378'}>San Marino (+378)</option>
                                                                        <option data-countrycode="Sao Tome &amp; Principe (+239)" value={'+239'}>Sao Tome &amp; Principe (+239)</option>
                                                                        <option data-countrycode="Saudi Arabia (+966)" value={'+966'}>Saudi Arabia (+966)</option>
                                                                        <option data-countrycode="Senegal (+221)" value={'+221'}>Senegal (+221)</option>
                                                                        <option data-countrycode="Serbia (+381)" value={'+381'}>Serbia (+381)</option>
                                                                        <option data-countrycode="Seychelles (+248)" value={'+248'}>Seychelles (+248)</option>
                                                                        <option data-countrycode="Sierra Leone (+232)" value={'+232'}>Sierra Leone (+232)</option>
                                                                        <option data-countrycode="Singapore (+65)" value={'+65'}>Singapore (+65)</option>
                                                                        <option data-countrycode="Slovak Republic (+421)" value={'+421'}>Slovak Republic (+421)</option>
                                                                        <option data-countrycode="Slovenia (+386)" value={'+386'}>Slovenia (+386)</option>
                                                                        <option data-countrycode="Solomon Islands (+677)" value={'+677'}>Solomon Islands (+677)</option>
                                                                        <option data-countrycode="Somalia (+252)" value={'+252'}>Somalia (+252)</option>
                                                                        <option data-countrycode="South Africa (+27)" value={'+27'}>South Africa (+27)</option>
                                                                        <option data-countrycode="Spain (+34)" value={'+34'}>Spain (+34)</option>
                                                                        <option data-countrycode="Sri Lanka (+94)" value={'+94'}>Sri Lanka (+94)</option>
                                                                        <option data-countrycode="St. Helena (+290)" value={'+290'}>St. Helena (+290)</option>
                                                                        <option data-countrycode="St. Kitts (+1869)" value={'+1869'}>St. Kitts (+1869)</option>
                                                                        <option data-countrycode="St. Lucia (+1758)" value={'+1758'}>St. Lucia (+1758)</option>
                                                                        <option data-countrycode="Sudan (+249)" value={'+249'}>Sudan (+249)</option>
                                                                        <option data-countrycode="Suriname (+597)" value={'+597'}>Suriname (+597)</option>
                                                                        <option data-countrycode="Swaziland (+268)" value={'+268'}>Swaziland (+268)</option>
                                                                        <option data-countrycode="Sweden (+46)" value={'+46'}>Sweden (+46)</option>
                                                                        <option data-countrycode="Switzerland (+41)" value={'+41'}>Switzerland (+41)</option>
                                                                        <option data-countrycode="Syria (+963)" value={'+963'}>Syria (+963)</option>
                                                                        <option data-countrycode="Taiwan (+886)" value={'+886'}>Taiwan (+886)</option>
                                                                        <option data-countrycode="Tajikstan (+7)" value={'+7'}>Tajikstan (+7)</option>
                                                                        <option data-countrycode="Thailand (+66)" value={'+66'}>Thailand (+66)</option>
                                                                        <option data-countrycode="Togo (+228)" value={'+228'}>Togo (+228)</option>
                                                                        <option data-countrycode="Tonga (+676)" value={'+676'}>Tonga (+676)</option>
                                                                        <option data-countrycode="Trinidad &amp; Tobago (+1868)" value={'+1868'}>Trinidad &amp; Tobago (+1868)</option>
                                                                        <option data-countrycode="Tunisia (+216)" value={'+216'}>Tunisia (+216)</option>
                                                                        <option data-countrycode="Turkey (+90)" value={'+90'}>Turkey (+90)</option>
                                                                        <option data-countrycode="Turkmenistan (+7)" value={'+7'}>Turkmenistan (+7)</option>
                                                                        <option data-countrycode="Turkmenistan (+993)" value={'+993'}>Turkmenistan (+993)</option>
                                                                        <option data-countrycode="Turks &amp; Caicos Islands (+1649)" value={'+1649'}>Turks &amp; Caicos Islands (+1649)</option>
                                                                        <option data-countrycode="Tuvalu (+688)" value={'+688'}>Tuvalu (+688)</option>
                                                                        <option data-countrycode="Uganda (+256)" value={'+256'}>Uganda (+256)</option>
                                                                        <option data-countrycode="Ukraine (+380)" value={'+380'}>Ukraine (+380)</option>
                                                                        <option data-countrycode="United Arab Emirates (+971)" value={'+971'}>United Arab Emirates (+971)</option>
                                                                        <option data-countrycode="Uruguay (+598)" value={'+598'}>Uruguay (+598)</option>
                                                                        <option data-countrycode="Uzbekistan (+7)" value={'+7'}>Uzbekistan (+7)</option>
                                                                        <option data-countrycode="Vanuatu (+678)" value={'+678'}>Vanuatu (+678)</option>
                                                                        <option data-countrycode="Vatican City (+379)" value={'+379'}>Vatican City (+379)</option>
                                                                        <option data-countrycode="Venezuela (+58)" value={'+58'}>Venezuela (+58)</option>
                                                                        <option data-countrycode="Vietnam (+84)" value={'+84'}>Vietnam (+84)</option>
                                                                        <option data-countrycode="Virgin Islands - British (+1284)" value={'+84'}>Virgin Islands - British (+1284)</option>
                                                                        <option data-countrycode="Virgin Islands - US (+1340)" value={'+84'}>Virgin Islands - US (+1340)</option>
                                                                        <option data-countrycode="Wallis &amp; Futuna (+681)" value={'+681'}>Wallis &amp; Futuna (+681)</option>
                                                                        <option data-countrycode="Yemen (North)(+969)" value={'+969'}>Yemen (North)(+969)</option>
                                                                        <option data-countrycode="Yemen (South)(+967)" value={'+967'}>Yemen (South)(+967)</option>
                                                                        <option data-countrycode="Zambia (+260)" value={'+260'}>Zambia (+260)</option>
                                                                        <option data-countrycode="Zimbabwe (+263)" value={'+263'}>Zimbabwe (+263)</option>
                                                                    </select>
                                                                    <input className="form-control" type="text" onChange={this.handleInput} id="number" name="number" type="number" value={this.state.number} placeholder="Phone Number" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group mb-md-20">
                                                                    <input className="form-control" type="text" value={this.state.email} onChange={this.handleInput} id="email" name="email" placeholder="Email" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group mb-0 mt-10">
                                                                    <input name="form_botcheck" className="form-control" type="hidden" defaultValue />
                                                                    <button type={this.state.btnSubmitType} className="btn text-white btn-lg btn-banner-unload btn-block btn-fore">{this.state.btnSubmit}</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    {/* Application Form End*/}
                                                </div>
                                            </div>
                                        </Fade>
                                        <div className="col-md-2 w-customized-2" />
                                    </div>
                                    <div className="col-md-12 b-topSet-lefty">
                                        <div className="col-md-2"></div>
                                    </div>
                                    <div className="col-md-12 b-topSet-centery">
                                        <div className="col-md-3"></div>
                                        <div className="col-md-2"></div>
                                    </div>
                                    <div className="col-md-12 b-topSet-righty">
                                        <div className="col-md-10"></div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Fade>
                    <Fade>
                        <section className="clients bg-theme-colored2 height-minimized d-none-md">
                            <div className="container-fluid container-slider pt-10 pb-0">
                                <div className="row">
                                    <div className="col-md-12 slider-adjust">
                                        <Swiper
                                            spaceBetween={2}
                                            slidesPerView={6}
                                            loop={true}
                                            autoplay={{
                                                delay: 1500,
                                                disableOnInteraction: false
                                            }}
                                        >
                                            <SwiperSlide><a href="javascript:;" className="img-rectify"><img src={require('../images/unis/u (11).webp')} alt="picture" /></a></SwiperSlide>
                                            <SwiperSlide><a href="javascript:;" className="img-rectify"><img src={require('../images/unis/u (2).webp')} alt="picture" /></a></SwiperSlide>
                                            <SwiperSlide><a href="javascript:;" className="img-rectify"><img src={require('../images/unis/u (3).webp')} alt="picture" /></a></SwiperSlide>
                                            <SwiperSlide><a href="javascript:;" className="img-rectify"><img src={require('../images/unis/u (4).webp')} alt="picture" /></a></SwiperSlide>
                                            <SwiperSlide><a href="javascript:;" className="img-rectify"><img src={require('../images/unis/u (12).webp')} alt="picture" /></a></SwiperSlide>
                                            <SwiperSlide><a href="javascript:;" className="img-rectify"><img src={require('../images/unis/u (6).webp')} alt="picture" /></a></SwiperSlide>
                                            <SwiperSlide><a href="javascript:;" className="img-rectify"><img src={require('../images/unis/u (11).webp')} alt="picture" /></a></SwiperSlide>
                                            <SwiperSlide><a href="javascript:;" className="img-rectify"><img src={require('../images/unis/u (8).webp')} alt="picture" /></a></SwiperSlide>
                                            <SwiperSlide><a href="javascript:;" className="img-rectify"><img src={require('../images/unis/u (4).webp')} alt="picture" /></a></SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Fade>
                </div>
                {
                    this.state.error
                        ?
                        <div className={`col-md-12 ${this.state.alertClass} p-adjust-right`}>
                            <i className="fa fa-exclamation-triangle"></i> {this.state.error}
                        </div>
                        :
                        null
                }
            </>
        );
    }
}

export default Banner;
