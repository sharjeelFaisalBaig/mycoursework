import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Title from '../SharedComponents/title'
import MediaCard from '../SharedComponents/MediaCard';
class OrderFields extends Component {
    render() {
        return (
            <>
                <Fade>
                    <div className="main-content">
                        <section className="divider">
                            <div className="container-fluid p-0">
                                <Title
                                    titleMargin="mt-50"
                                    titleBefore="Order"
                                    titleAfter=" Now"
                                    titleDescription="Place Your Order And Go Stress Free !"
                                />
                                <div className="row overFlow-auto-md thumb-none">
                                    <div className="row m-auto">
                                        <div className="col-md-9">
                                            <form className="reservation-form mt-20 w-95P" method="post" action="">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="form-group mb-md-20">
                                                            <div className="col-sm-12 text-left back">TASK DETAILS</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 mt-23">
                                                        <div className="col-sm-6">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">Select Type Of Paper *</strong>
                                                                <select className="form-control mt-adjustMobile">
                                                                    <option value="Essay writing" selected="selected">Essay writing</option>
                                                                    <option value="Assignment Writing">Assignment Writing</option>
                                                                    <option value="Research Paper writing">Research Paper writing</option>
                                                                    <option value="Course Work">Course Work</option>
                                                                    <option value="case study">case study</option>
                                                                    <option value="Term Paper">Term Paper</option>
                                                                    <option value="Online Exam Quizzes">Online Exam Quizzes</option>
                                                                    <option value="Homework">Homework</option>
                                                                    <option value="Editing">Editing</option>
                                                                    <option value="Formatting">Formatting</option>
                                                                    <option value="Proofreading">Proofreading</option>
                                                                    <option value="Annotated Bibliography">Annotated Bibliography</option>
                                                                    <option value="Speech/Presentation">Speech/Presentation</option>
                                                                    <option value="PowerPoint Presentation">PowerPoint Presentation</option>
                                                                    <option value="Thesis">Thesis</option>
                                                                    <option value="Thesis Proposal">Thesis Proposal</option>
                                                                    <option value="Dissertation">Dissertation</option>
                                                                    <option value="Dissertation Chapter- Abstract">Dissertation Chapter- Abstract</option>
                                                                    <option value="Dissertation Chapter- Introduction Chapter">Dissertation Chapter- Introduction Chapter</option>
                                                                    <option value="Dissertation Chapter- Literature Review">Dissertation Chapter- Literature Review</option>
                                                                    <option value="Dissertation Chapter- Methodology">Dissertation Chapter- Methodology</option>
                                                                    <option value="Dissertation Chapter- Result">Dissertation Chapter- Result</option>
                                                                    <option value="Dissertation Chapter- Discussion">Dissertation Chapter- Discussion</option>
                                                                    <option value="Book Report">Book Report</option>
                                                                    <option value="Book Review">Book Review</option>
                                                                    <option value="Movie Review">Movie Review</option>
                                                                    <option value="Research Proposal">Research Proposal</option>
                                                                    <option value="Case Study">Case Study</option>
                                                                    <option value="Article">Article</option>
                                                                    <option value="Article Critique">Article Critique</option>
                                                                    <option value="Admission Essays">Admission Essays</option>
                                                                    <option value="Admission Sevices - Editing">Admission Sevices - Editing</option>
                                                                    <option value="Psychology">Psychology</option>
                                                                    <option value="Religious studies">Religious studies</option>
                                                                    <option value="Shakespeare">Shakespeare</option>
                                                                    <option value="Sociology">Sociology</option>
                                                                    <option value="Statistics">Statistics</option>
                                                                    <option value="Technology">Technology</option>
                                                                    <option value="Web, High tech">Web, High tech</option>
                                                                    <option value="Women's &amp; gender studies">Women's &amp; gender studies</option>
                                                                    <option value="World Affairs">World Affairs</option>
                                                                    <option value="World Literature">World Literature</option>
                                                                    <option value="Zoology">Zoology</option>
                                                                    <option value=""></option>
                                                                    <option value="Thesis Writing">Thesis Writing</option>
                                                                    <option value="Custom essay writing">Custom essay writing</option>
                                                                    <option value="College Essay writing">College Essay writing</option>
                                                                    <option value="Write my Paper">Write my Paper</option>
                                                                    <option value="College Paper">College Paper</option>
                                                                    <option value="Online Exam Quizzes">Online Exam Quizzes</option>
                                                                    <option value="Resume writing">Resume writing</option>
                                                                    <option value="Business letter writing">Business letter writing</option>
                                                                    <option value="SEO Optimized Articles">SEO Optimized Articles</option>
                                                                    <option value="Blog Writing">Blog Writing</option>
                                                                    <option value="Web Content Writing">Web Content Writing</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">Select Subject *</strong>
                                                                <select className="form-control mt-adjustMobile">
                                                                    <option value="Accounting">Accounting</option>
                                                                    <option value="Business" selected="selected">Business</option>
                                                                    <option value="Nursing">Nursing</option>
                                                                    <option value="HRM">HRM</option>
                                                                    <option value="Medical">Medical</option>
                                                                    <option value="Accounting">Accounting</option>
                                                                    <option value="Anthropology">Anthropology</option>
                                                                    <option value="Application Letters">Application Letters</option>
                                                                    <option value="Art &amp; Architecture">Art &amp; Architecture</option>
                                                                    <option value="Biology">Biology</option>
                                                                    <option value="Chemistry">Chemistry</option>
                                                                    <option value="Classics English literature">Classics English literature</option>
                                                                    <option value="Communications">Communications</option>
                                                                    <option value="Computer science">Computer science</option>
                                                                    <option value="Economics">Economics</option>
                                                                    <option value="Education">Education</option>
                                                                    <option value="Family and consumer science">Family and consumer science</option>
                                                                    <option value="Film &amp; Theater studies">Film &amp; Theater studies</option>
                                                                    <option value="Finance">Finance</option>
                                                                    <option value="History">History</option>
                                                                    <option value="Law">Law</option>
                                                                    <option value="Management">Management</option>
                                                                    <option value="Marketing">Marketing</option>
                                                                    <option value="Mathematics">Mathematics</option>
                                                                    <option value="Medicine">Medicine</option>
                                                                    <option value="Music">Music</option>
                                                                    <option value="Nursing">Nursing</option>
                                                                    <option value="Philosophy">Philosophy</option>
                                                                    <option value="Physics">Physics</option>
                                                                    <option value="Political science">Political science</option>
                                                                    <option value="Psychology">Psychology</option>
                                                                    <option value="Religious studies">Religious studies</option>
                                                                    <option value="Shakespeare">Shakespeare</option>
                                                                    <option value="Sociology">Sociology</option>
                                                                    <option value="Statistics">Statistics</option>
                                                                    <option value="Technology">Technology</option>
                                                                    <option value="Web, High tech">Web, High tech</option>
                                                                    <option value="Women's &amp; gender studies">Women's &amp; gender studies</option>
                                                                    <option value="World Affairs">World Affairs</option>
                                                                    <option value="World Literature">World Literature</option>
                                                                    <option value="Zoology">Zoology</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12  mt-23">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">TASK/ACADEMIC LEVEL *</strong>
                                                                <div className="d-flex-lg">
                                                                    <label className="mrC-2 fw-700"> <input type="radio" /> High School</label>
                                                                    <label className="mrC-2 fw-700"> <input type="radio" /> Undergraduate</label>
                                                                    <label className="mrC-2 fw-700"> <input type="radio" /> Master's</label>
                                                                    <label className="mrC-2 fw-700"> <input type="radio" /> Doctoral</label>
                                                                    <label className="mrC-2 fw-700"> <input type="radio" /> Other</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6  mt-23">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">TOPIC *</strong>
                                                                <input type="text" className="form-control mt-adjustMobile" placeholder="What is the Topic or Title of your paper?" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6  mt-23">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">PAPER INSTRUCTIONS</strong>
                                                                <textarea type="text" className="form-control mt-adjustMobile" placeholder="What is the Topic or Title of your paper?" rows={2} ></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6  mt-23">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">REFERENCING STYLE *</strong>
                                                                <select className="form-control mt-adjustMobile">
                                                                    <option selected>Please select your task citation style</option>
                                                                    <option value="APA Referencing" selected="selected">APA Referencing</option>
                                                                    <option value="Harvard Referencing">Harvard Referencing</option>
                                                                    <option value="Chicago Referencing">Chicago Referencing</option>
                                                                    <option value="MLA Referencing">MLA Referencing</option>
                                                                    <option value="Oxford Referencing">Oxford Referencing</option>
                                                                    <option value="Turabian Referencing">Turabian Referencing</option>
                                                                    <option value="Vancouver Referencing">Vancouver Referencing</option>
                                                                    <option value="CBE Referencing">CBE Referencing</option>
                                                                    <option value="Not applicable">Not applicable</option>
                                                                    <option value="Other">Other</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6  mt-23">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">PAPER INSTRUCTIONS</strong>
                                                                <select className="form-control mt-adjustMobile">
                                                                    <option selected>Select Number Of Source </option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                    <option value="13">13</option>
                                                                    <option value="14">14</option>
                                                                    <option value="15">15</option>
                                                                    <option value="16">16</option>
                                                                    <option value="17">17</option>
                                                                    <option value="18">18</option>
                                                                    <option value="19">19</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12  mt-23">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">ADDITIONAL MATERIAL OR FILE</strong>
                                                                <input type="file" className="form-control mt-adjustMobile" placeholder="attach, If you have any file related to the task"></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 mt-25">
                                                        <div className="form-group mb-md-20">
                                                            <div className="col-sm-12 text-left back">Pricing</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 mt-23">
                                                        <div className="col-sm-6">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">PAPER STANDARD* </strong>
                                                                <div className="d-flex-lg">
                                                                    <label className="mrC-2 fw-700"> <input type="radio" /> Standard Quality</label>
                                                                    <label className="mrC-2 fw-700"> <input type="radio" /> Premium Quality</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">NUMBER OF PAGES* </strong>
                                                                <select className="form-control mt-adjustMobile">
                                                                    <option value="1" selected="selected">1 Page / 250 Words</option>
                                                                    <option value="2">2 Pages / 500 Words</option>
                                                                    <option value="3">3 Pages / 750 Words</option>
                                                                    <option value="4">4 Pages / 1000 Words</option>
                                                                    <option value="5">5 Pages / 1250 Words</option>
                                                                    <option value="6">6 Pages / 1500 Words</option>
                                                                    <option value="7">7 Pages / 1750 Words</option>
                                                                    <option value="8">8 Pages / 2000 Words</option>
                                                                    <option value="9">9 Pages / 2250 Words</option>
                                                                    <option value="10">10 Pages 2500 Words</option>
                                                                    <option value="11">11 Pages / 2750 Words</option>
                                                                    <option value="12">12 Pages / 3000 Words</option>
                                                                    <option value="13">13 Pages / 3250 Words</option>
                                                                    <option value="14">14 Pages / 3500 Words</option>
                                                                    <option value="15">15 Pages / 3750 Words</option>
                                                                    <option value="16">16 Pages / 4000 Words</option>
                                                                    <option value="17">17 Pages / 4250 Words</option>
                                                                    <option value="18">18 Pages / 4500 Words</option>
                                                                    <option value="19">19 Pages / 4750 Words</option>
                                                                    <option value="20">20 Pages / 5000 Words</option>
                                                                    <option value="21">21 Pages / 5250 Words</option>
                                                                    <option value="22">22 Pages / 5500 Words</option>
                                                                    <option value="23">23 Pages / 5750 Words</option>
                                                                    <option value="24">24 Pages / 6000 Words</option>
                                                                    <option value="25">25 Pages / 6250 Words</option>
                                                                    <option value="26">26 Pages / 6500 Words</option>
                                                                    <option value="27">27 Pages / 6750 Words</option>
                                                                    <option value="28">28 Pages / 7000 Words</option>
                                                                    <option value="29">29 Pages / 7250 Words</option>
                                                                    <option value="30">30 Pages / 7500 Words</option>
                                                                    <option value="31">31 Pages / 7750 Words</option>
                                                                    <option value="32">32 Pages / 8000 Words</option>
                                                                    <option value="33">33 Pages / 8250 Words</option>
                                                                    <option value="34">34 Pages / 8500 Words</option>
                                                                    <option value="35">35 Pages / 8750 Words</option>
                                                                    <option value="36">36 Pages / 9000 Words</option>
                                                                    <option value="37">37 Pages / 9250 Words</option>
                                                                    <option value="38">38 Pages / 9500 Words</option>
                                                                    <option value="39">39 Pages / 9750 Words</option>
                                                                    <option value="40">40 Pages / 10000 Words</option>
                                                                    <option value="41">41 Pages / 10250 Words</option>
                                                                    <option value="42">42 Pages / 10500 Words</option>
                                                                    <option value="43">43 Pages / 10750 Words</option>
                                                                    <option value="44">44 Pages / 11000 Words</option>
                                                                    <option value="45">45 Pages / 11250 Words</option>
                                                                    <option value="46">46 Pages / 11500 Words</option>
                                                                    <option value="47">47 Pages / 11750 Words</option>
                                                                    <option value="48">48 Pages / 12000 Words</option>
                                                                    <option value="49">49 Pages / 12250 Words</option>
                                                                    <option value="50">50 Pages / 12500 Words</option>
                                                                    <option value="51">51 Pages / 12750 Words</option>
                                                                    <option value="52">52 Pages / 13000 Words</option>
                                                                    <option value="53">53 Pages / 13250 Words</option>
                                                                    <option value="54">54 Pages / 13500 Words</option>
                                                                    <option value="55">55 Pages / 13750 Words</option>
                                                                    <option value="56">56 Pages / 14000 Words</option>
                                                                    <option value="57">57 Pages / 14250 Words</option>
                                                                    <option value="58">58 Pages / 14500 Words</option>
                                                                    <option value="59">59 Pages / 14750 Words</option>
                                                                    <option value="60">60 Pages / 15000 Words</option>
                                                                    <option value="61">61 Pages / 15250 Words</option>
                                                                    <option value="62">62 Pages / 15500 Words</option>
                                                                    <option value="63">63 Pages / 15750 Words</option>
                                                                    <option value="64">64 Pages / 16000 Words</option>
                                                                    <option value="65">65 Pages / 16250 Words</option>
                                                                    <option value="66">66 Pages / 16500 Words</option>
                                                                    <option value="67">67 Pages / 16750 Words</option>
                                                                    <option value="68">68 Pages / 17000 Words</option>
                                                                    <option value="69">69 Pages / 17250 Words</option>
                                                                    <option value="70">70 Pages / 17500 Words</option>
                                                                    <option value="71">71 Pages / 17750 Words</option>
                                                                    <option value="72">72 Pages / 18000 Words</option>
                                                                    <option value="73">73 Pages / 18250 Words</option>
                                                                    <option value="74">74 Pages / 18500 Words</option>
                                                                    <option value="75">75 Pages / 18750 Words</option>
                                                                    <option value="76">76 Pages / 19000 Words</option>
                                                                    <option value="77">77 Pages / 19250 Words</option>
                                                                    <option value="78">78 Pages / 19500 Words</option>
                                                                    <option value="79">79 Pages / 19750 Words</option>
                                                                    <option value="80">80 Pages / 20000 Words</option>
                                                                    <option value="81">81 Pages / 20250 Words</option>
                                                                    <option value="82">82 Pages / 20500 Words</option>
                                                                    <option value="83">83 Pages / 20750 Words</option>
                                                                    <option value="84">84 Pages / 21000 Words</option>
                                                                    <option value="85">85 Pages / 21250 Words</option>
                                                                    <option value="86">86 Pages / 21500 Words</option>
                                                                    <option value="87">87 Pages / 21750 Words</option>
                                                                    <option value="88">88 Pages / 22000 Words</option>
                                                                    <option value="89">89 Pages / 22250 Words</option>
                                                                    <option value="90">90 Pages / 22500 Words</option>
                                                                    <option value="91">91 Pages / 22750 Words</option>
                                                                    <option value="92">92 Pages / 23000 Words</option>
                                                                    <option value="93">93 Pages / 23250 Words</option>
                                                                    <option value="94">94 Pages / 23500 Words</option>
                                                                    <option value="95">95 Pages / 23750 Words</option>
                                                                    <option value="96">96 Pages / 24000 Words</option>
                                                                    <option value="97">97 Pages / 24250 Words</option>
                                                                    <option value="98">98 Pages / 24500 Words</option>
                                                                    <option value="99">99 Pages / 24750 Words</option>
                                                                    <option value="100">100 Pages / 25000 Words</option>
                                                                    <option value="101">101 Pages / 25250 Words</option>
                                                                    <option value="102">102 Pages / 25500 Words</option>
                                                                    <option value="103">103 Pages / 25750 Words</option>
                                                                    <option value="104">104 Pages / 26000 Words</option>
                                                                    <option value="105">105 Pages / 26250 Words</option>
                                                                    <option value="106">106 Pages / 26500 Words</option>
                                                                    <option value="107">107 Pages / 26750 Words</option>
                                                                    <option value="108">108 Pages / 27000 Words</option>
                                                                    <option value="109">109 Pages / 27250 Words</option>
                                                                    <option value="110">110 Pages / 27500 Words</option>
                                                                    <option value="111">111 Pages / 27750 Words</option>
                                                                    <option value="112">112 Pages / 28000 Words</option>
                                                                    <option value="113">113 Pages / 28250 Words</option>
                                                                    <option value="114">114 Pages / 28500 Words</option>
                                                                    <option value="115">115 Pages / 28750 Words</option>
                                                                    <option value="116">116 Pages / 29000 Words</option>
                                                                    <option value="117">117 Pages / 29250 Words</option>
                                                                    <option value="118">118 Pages / 29500 Words</option>
                                                                    <option value="119">119 Pages / 29750 Words</option>
                                                                    <option value="120">120 Pages / 30000 Words</option>
                                                                    <option value="121">121 Pages / 30250 Words</option>
                                                                    <option value="122">122 Pages / 30500 Words</option>
                                                                    <option value="123">123 Pages / 30750 Words</option>
                                                                    <option value="124">124 Pages / 31000 Words</option>
                                                                    <option value="125">125 Pages / 31250 Words</option>
                                                                    <option value="126">126 Pages / 31500 Words</option>
                                                                    <option value="127">127 Pages / 31750 Words</option>
                                                                    <option value="128">128 Pages / 32000 Words</option>
                                                                    <option value="129">129 Pages / 32250 Words</option>
                                                                    <option value="130">130 Pages / 32500 Words</option>
                                                                    <option value="131">131 Pages / 32750 Words</option>
                                                                    <option value="132">132 Pages / 33000 Words</option>
                                                                    <option value="133">133 Pages / 33250 Words</option>
                                                                    <option value="134">134 Pages / 33500 Words</option>
                                                                    <option value="135">135 Pages / 33750 Words</option>
                                                                    <option value="136">136 Pages / 34000 Words</option>
                                                                    <option value="137">137 Pages / 34250 Words</option>
                                                                    <option value="138">138 Pages / 34500 Words</option>
                                                                    <option value="139">139 Pages / 34750 Words</option>
                                                                    <option value="140">140 Pages / 35000 Words</option>
                                                                    <option value="141">141 Pages / 35250 Words</option>
                                                                    <option value="142">142 Pages / 35500 Words</option>
                                                                    <option value="143">143 Pages / 35750 Words</option>
                                                                    <option value="144">144 Pages / 36000 Words</option>
                                                                    <option value="145">145 Pages / 36250 Words</option>
                                                                    <option value="146">146 Pages / 36500 Words</option>
                                                                    <option value="147">147 Pages / 36750 Words</option>
                                                                    <option value="148">148 Pages / 37000 Words</option>
                                                                    <option value="149">149 Pages / 37250 Words</option>
                                                                    <option value="150">150 Pages / 37500 Words</option>
                                                                    <option value="151">151 Pages / 37750 Words</option>
                                                                    <option value="152">152 Pages / 38000 Words</option>
                                                                    <option value="153">153 Pages / 38250 Words</option>
                                                                    <option value="154">154 Pages / 38500 Words</option>
                                                                    <option value="155">155 Pages / 38750 Words</option>
                                                                    <option value="156">156 Pages / 39000 Words</option>
                                                                    <option value="157">157 Pages / 39250 Words</option>
                                                                    <option value="158">158 Pages / 39500 Words</option>
                                                                    <option value="159">159 Pages / 39750 Words</option>
                                                                    <option value="160">160 Pages / 40000 Words</option>
                                                                    <option value="161">161 Pages / 40250 Words</option>
                                                                    <option value="162">162 Pages / 40500 Words</option>
                                                                    <option value="163">163 Pages / 40750 Words</option>
                                                                    <option value="164">164 Pages / 41000 Words</option>
                                                                    <option value="165">165 Pages / 41250 Words</option>
                                                                    <option value="166">166 Pages / 41500 Words</option>
                                                                    <option value="167">167 Pages / 41750 Words</option>
                                                                    <option value="168">168 Pages / 42000 Words</option>
                                                                    <option value="169">169 Pages / 42250 Words</option>
                                                                    <option value="170">170 Pages / 42500 Words</option>
                                                                    <option value="171">171 Pages / 42750 Words</option>
                                                                    <option value="172">172 Pages / 43000 Words</option>
                                                                    <option value="173">173 Pages / 43250 Words</option>
                                                                    <option value="174">174 Pages / 43500 Words</option>
                                                                    <option value="175">175 Pages / 43750 Words</option>
                                                                    <option value="176">176 Pages / 44000 Words</option>
                                                                    <option value="177">177 Pages / 44250 Words</option>
                                                                    <option value="178">178 Pages / 44500 Words</option>
                                                                    <option value="179">179 Pages / 44750 Words</option>
                                                                    <option value="180">180 Pages / 45000 Words</option>
                                                                    <option value="181">181 Pages / 45250 Words</option>
                                                                    <option value="182">182 Pages / 45500 Words</option>
                                                                    <option value="183">183 Pages / 45750 Words</option>
                                                                    <option value="184">184 Pages / 46000 Words</option>
                                                                    <option value="185">185 Pages / 46250 Words</option>
                                                                    <option value="186">186 Pages / 46500 Words</option>
                                                                    <option value="187">187 Pages / 46750 Words</option>
                                                                    <option value="188">188 Pages / 47000 Words</option>
                                                                    <option value="189">189 Pages / 47250 Words</option>
                                                                    <option value="190">190 Pages / 47500 Words</option>
                                                                    <option value="191">191 Pages / 47750 Words</option>
                                                                    <option value="192">192 Pages / 48000 Words</option>
                                                                    <option value="193">193 Pages / 48250 Words</option>
                                                                    <option value="194">194 Pages / 48500 Words</option>
                                                                    <option value="195">195 Pages / 48750 Words</option>
                                                                    <option value="196">196 Pages / 49000 Words</option>
                                                                    <option value="197">197 Pages / 49250 Words</option>
                                                                    <option value="198">198 Pages / 49500 Words</option>
                                                                    <option value="199">199 Pages / 49750 Words</option>
                                                                    <option value="200">200 Pages / 50000 Words</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 mt-23">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">PREFERRED LANGUAGE STYLE </strong>
                                                                <div className="d-flex-lg">
                                                                    <label className="mrC-2 fw-700"> <input type="radio" /> English (U.S.)</label>
                                                                    <label className="mrC-2 fw-700"> <input type="radio" /> English (U.K.)</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 mt-23">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">PREFERRED LANGUAGE STYLE </strong>
                                                                <select className="form-control mt-adjustMobile">
                                                                    <option value="Double Spaced|0" selected="selected">Double Spaced</option>
                                                                    <option value="Single Spaced|9.99">Single Spaced</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 mt-23">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">SELECT DEADLINE* </strong>
                                                                <select className="form-control mt-adjustMobile">
                                                                    <option value="4 Hours|25">4 Hours</option>
                                                                    <option value="8 Hours|20">8 Hours</option>
                                                                    <option value="12 Hours|15">12 Hours</option>
                                                                    <option value="1 Day|11" selected="selected">1 Day</option>
                                                                    <option value="2 Days|9">2 Days</option>
                                                                    <option value="3 Days|6">3 Days</option>
                                                                    <option value="4 Days|6">4 Days</option>
                                                                    <option value="5 Days|6">5 Days</option>
                                                                    <option value="6 Days|3">6 Days</option>
                                                                    <option value="7 Days|3">7 Days</option>
                                                                    <option value="8 Days|3">8 Days</option>
                                                                    <option value="9 Days|3">9 Days</option>
                                                                    <option value="10 Days|0">10 Days</option>
                                                                    <option value="11 Days|0">11 Days</option>
                                                                    <option value="12 Days|0">12 Days</option>
                                                                    <option value="13 Days|0">13 Days</option>
                                                                    <option value="14 Days|0">14 Days</option>
                                                                    <option value="15 Days|0">15 Days</option>
                                                                    <option value="16 Days|0">16 Days</option>
                                                                    <option value="17 Days|0">17 Days</option>
                                                                    <option value="18 Days|0">18 Days</option>
                                                                    <option value="19 Days|0">19 Days</option>
                                                                    <option value="20 Days|0">20 Days</option>
                                                                    <option value="21 Days|0">21 Days</option>
                                                                    <option value="22 Days|0">22 Days</option>
                                                                    <option value="23 Days|0">23 Days</option>
                                                                    <option value="24 Days|0">24 Days</option>
                                                                    <option value="25 Days|0">25 Days</option>
                                                                    <option value="26 Days|0">26 Days</option>
                                                                    <option value="27 Days|0">27 Days</option>
                                                                    <option value="28 Days|0">28 Days</option>
                                                                    <option value="29 Days|0">29 Days</option>
                                                                    <option value="30 Days|0">30 Days</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 mt-23 m-invert-9">
                                                            <h4 style={{ fontWeight: '100' }}>PRICE PER PAGE ($) : <strong>$12 USD</strong></h4>
                                                        </div>
                                                        <div className="col-sm-6 mt-23 text-md-right m-invert-9">
                                                            <h4 style={{ fontWeight: '100' }}>TOTAL BILL : <strong className="text-success">$40 USD</strong></h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 mt-25">
                                                        <div className="form-group mb-md-20">
                                                            <div className="col-sm-12 text-left back">Contact Information</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 mt-23">
                                                        <div className="col-sm-12">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">NAME *</strong>
                                                                <input type="text" className="form-control mt-adjustMobile" placeholder="Type Your Full Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 mt-23">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">EMAIL *</strong>
                                                                <input type="email" className="form-control mt-adjustMobile" placeholder="Type Your Email Here" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 mt-23">
                                                            <div className="form-group mb-md-20">
                                                                <strong className="mb-3 labelStrong">PHONE *</strong>
                                                                <input type="number" className="form-control mt-adjustMobile" placeholder="Type Your Phone Number Here" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 mt-23">
                                                            <div className="form-group">
                                                                <strong className="mb-3 labelStrong">LOCATION *</strong>
                                                            </div>
                                                            <div className="form-group mb-md-20 mt-4 col-md-6">
                                                                <p>City</p>
                                                                <input type="text" className="form-control mt-adjustMobile" placeholder="Type Your City Here" />
                                                            </div>
                                                            <div className="form-group mb-md-20 mt-4 col-md-6">
                                                                <p>State</p>
                                                                <input type="text" className="form-control mt-adjustMobile" placeholder="Type Your State Here" />
                                                            </div>
                                                            <div className="form-group mb-md-20 mt-4 col-md-12">
                                                                <p>Country</p>
                                                                <select className="form-control mt-adjustMobile">
                                                                    <option selected>Select Your Country Here</option>
                                                                    <option value="">Type your country</option>
                                                                    <option value="Afghanistan">Afghanistan</option>
                                                                    <option value="Albania">Albania</option>
                                                                    <option value="Algeria">Algeria</option>
                                                                    <option value="American Samoa">American Samoa</option>
                                                                    <option value="Andorra">Andorra</option>
                                                                    <option value="Angola">Angola</option>
                                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                    <option value="Argentina">Argentina</option>
                                                                    <option value="Armenia">Armenia</option>
                                                                    <option value="Australia">Australia</option>
                                                                    <option value="Austria">Austria</option>
                                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                                    <option value="Bahamas">Bahamas</option>
                                                                    <option value="Bahrain">Bahrain</option>
                                                                    <option value="Bangladesh">Bangladesh</option>
                                                                    <option value="Barbados">Barbados</option>
                                                                    <option value="Belarus">Belarus</option>
                                                                    <option value="Belgium">Belgium</option>
                                                                    <option value="Belize">Belize</option>
                                                                    <option value="Benin">Benin</option>
                                                                    <option value="Bermuda">Bermuda</option>
                                                                    <option value="Bhutan">Bhutan</option>
                                                                    <option value="Bolivia">Bolivia</option>
                                                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                    <option value="Botswana">Botswana</option>
                                                                    <option value="Brazil">Brazil</option>
                                                                    <option value="Brunei">Brunei</option>
                                                                    <option value="Bulgaria">Bulgaria</option>
                                                                    <option value="Burkina Faso">Burkina Faso</option>
                                                                    <option value="Burundi">Burundi</option>
                                                                    <option value="Cambodia">Cambodia</option>
                                                                    <option value="Cameroon">Cameroon</option>
                                                                    <option value="Canada">Canada</option>
                                                                    <option value="Cape Verde">Cape Verde</option>
                                                                    <option value="Cayman Islands">Cayman Islands</option>
                                                                    <option value="Central African Republic">Central African Republic</option>
                                                                    <option value="Chad">Chad</option>
                                                                    <option value="Chile">Chile</option>
                                                                    <option value="China">China</option>
                                                                    <option value="Colombia">Colombia</option>
                                                                    <option value="Comoros">Comoros</option>
                                                                    <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                                                                    <option value="Congo, Republic of the">Congo, Republic of the</option>
                                                                    <option value="Costa Rica">Costa Rica</option>
                                                                    <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                                                                    <option value="Croatia">Croatia</option>
                                                                    <option value="Cuba">Cuba</option>
                                                                    <option value="Curaçao">Curaçao</option>
                                                                    <option value="Cyprus">Cyprus</option>
                                                                    <option value="Czech Republic">Czech Republic</option>
                                                                    <option value="Denmark">Denmark</option>
                                                                    <option value="Djibouti">Djibouti</option>
                                                                    <option value="Dominica">Dominica</option>
                                                                    <option value="Dominican Republic">Dominican Republic</option>
                                                                    <option value="East Timor">East Timor</option>
                                                                    <option value="Ecuador">Ecuador</option>
                                                                    <option value="Egypt">Egypt</option>
                                                                    <option value="El Salvador">El Salvador</option>
                                                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                                    <option value="Eritrea">Eritrea</option>
                                                                    <option value="Estonia">Estonia</option>
                                                                    <option value="Ethiopia">Ethiopia</option>
                                                                    <option value="Faroe Islands">Faroe Islands</option>
                                                                    <option value="Fiji">Fiji</option>
                                                                    <option value="Finland">Finland</option>
                                                                    <option value="France">France</option>
                                                                    <option value="French Polynesia">French Polynesia</option>
                                                                    <option value="Gabon">Gabon</option>
                                                                    <option value="Gambia">Gambia</option>
                                                                    <option value="Georgia">Georgia</option>
                                                                    <option value="Germany">Germany</option>
                                                                    <option value="Ghana">Ghana</option>
                                                                    <option value="Greece">Greece</option>
                                                                    <option value="Greenland">Greenland</option>
                                                                    <option value="Grenada">Grenada</option>
                                                                    <option value="Guam">Guam</option>
                                                                    <option value="Guatemala">Guatemala</option>
                                                                    <option value="Guinea">Guinea</option>
                                                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                                    <option value="Guyana">Guyana</option>
                                                                    <option value="Haiti">Haiti</option>
                                                                    <option value="Honduras">Honduras</option>
                                                                    <option value="Hong Kong">Hong Kong</option>
                                                                    <option value="Hungary">Hungary</option>
                                                                    <option value="Iceland">Iceland</option>
                                                                    <option value="India">India</option>
                                                                    <option value="Indonesia">Indonesia</option>
                                                                    <option value="Iran">Iran</option>
                                                                    <option value="Iraq">Iraq</option>
                                                                    <option value="Ireland">Ireland</option>
                                                                    <option value="Israel">Israel</option>
                                                                    <option value="Italy">Italy</option>
                                                                    <option value="Jamaica">Jamaica</option>
                                                                    <option value="Japan">Japan</option>
                                                                    <option value="Jordan">Jordan</option>
                                                                    <option value="Kazakhstan">Kazakhstan</option>
                                                                    <option value="Kenya">Kenya</option>
                                                                    <option value="Kiribati">Kiribati</option>
                                                                    <option value="North Korea">North Korea</option>
                                                                    <option value="South Korea">South Korea</option>
                                                                    <option value="Kosovo">Kosovo</option>
                                                                    <option value="Kuwait">Kuwait</option>
                                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                    <option value="Laos">Laos</option>
                                                                    <option value="Latvia">Latvia</option>
                                                                    <option value="Lebanon">Lebanon</option>
                                                                    <option value="Lesotho">Lesotho</option>
                                                                    <option value="Liberia">Liberia</option>
                                                                    <option value="Libya">Libya</option>
                                                                    <option value="Liechtenstein">Liechtenstein</option>
                                                                    <option value="Lithuania">Lithuania</option>
                                                                    <option value="Luxembourg">Luxembourg</option>
                                                                    <option value="Macedonia">Macedonia</option>
                                                                    <option value="Madagascar">Madagascar</option>
                                                                    <option value="Malawi">Malawi</option>
                                                                    <option value="Malaysia">Malaysia</option>
                                                                    <option value="Maldives">Maldives</option>
                                                                    <option value="Mali">Mali</option>
                                                                    <option value="Malta">Malta</option>
                                                                    <option value="Marshall Islands">Marshall Islands</option>
                                                                    <option value="Mauritania">Mauritania</option>
                                                                    <option value="Mauritius">Mauritius</option>
                                                                    <option value="Mexico">Mexico</option>
                                                                    <option value="Micronesia">Micronesia</option>
                                                                    <option value="Moldova">Moldova</option>
                                                                    <option value="Monaco">Monaco</option>
                                                                    <option value="Mongolia">Mongolia</option>
                                                                    <option value="Montenegro">Montenegro</option>
                                                                    <option value="Morocco">Morocco</option>
                                                                    <option value="Mozambique">Mozambique</option>
                                                                    <option value="Myanmar">Myanmar</option>
                                                                    <option value="Namibia">Namibia</option>
                                                                    <option value="Nauru">Nauru</option>
                                                                    <option value="Nepal">Nepal</option>
                                                                    <option value="Netherlands">Netherlands</option>
                                                                    <option value="New Zealand">New Zealand</option>
                                                                    <option value="Nicaragua">Nicaragua</option>
                                                                    <option value="Niger">Niger</option>
                                                                    <option value="Nigeria">Nigeria</option>
                                                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                                    <option value="Norway">Norway</option>
                                                                    <option value="Oman">Oman</option>
                                                                    <option value="Pakistan">Pakistan</option>
                                                                    <option value="Palau">Palau</option>
                                                                    <option value="Palestine, State of">Palestine, State of</option>
                                                                    <option value="Panama">Panama</option>
                                                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                                                    <option value="Paraguay">Paraguay</option>
                                                                    <option value="Peru">Peru</option>
                                                                    <option value="Philippines">Philippines</option>
                                                                    <option value="Poland">Poland</option>
                                                                    <option value="Portugal">Portugal</option>
                                                                    <option value="Puerto Rico">Puerto Rico</option>
                                                                    <option value="Qatar">Qatar</option>
                                                                    <option value="Romania">Romania</option>
                                                                    <option value="Russia">Russia</option>
                                                                    <option value="Rwanda">Rwanda</option>
                                                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                                    <option value="Saint Lucia">Saint Lucia</option>
                                                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                                                    <option value="Samoa">Samoa</option>
                                                                    <option value="San Marino">San Marino</option>
                                                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                                                    <option value="Senegal">Senegal</option>
                                                                    <option value="Serbia">Serbia</option>
                                                                    <option value="Seychelles">Seychelles</option>
                                                                    <option value="Sierra Leone">Sierra Leone</option>
                                                                    <option value="Singapore">Singapore</option>
                                                                    <option value="Sint Maarten">Sint Maarten</option>
                                                                    <option value="Slovakia">Slovakia</option>
                                                                    <option value="Slovenia">Slovenia</option>
                                                                    <option value="Solomon Islands">Solomon Islands</option>
                                                                    <option value="Somalia">Somalia</option>
                                                                    <option value="South Africa">South Africa</option>
                                                                    <option value="Spain">Spain</option>
                                                                    <option value="Sri Lanka">Sri Lanka</option>
                                                                    <option value="Sudan">Sudan</option>
                                                                    <option value="Sudan, South">Sudan, South</option>
                                                                    <option value="Suriname">Suriname</option>
                                                                    <option value="Swaziland">Swaziland</option>
                                                                    <option value="Sweden">Sweden</option>
                                                                    <option value="Switzerland">Switzerland</option>
                                                                    <option value="Syria">Syria</option>
                                                                    <option value="Taiwan">Taiwan</option>
                                                                    <option value="Tajikistan">Tajikistan</option>
                                                                    <option value="Tanzania">Tanzania</option>
                                                                    <option value="Thailand">Thailand</option>
                                                                    <option value="Togo">Togo</option>
                                                                    <option value="Tonga">Tonga</option>
                                                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                                    <option value="Tunisia">Tunisia</option>
                                                                    <option value="Turkey">Turkey</option>
                                                                    <option value="Turkmenistan">Turkmenistan</option>
                                                                    <option value="Tuvalu">Tuvalu</option>
                                                                    <option value="Uganda">Uganda</option>
                                                                    <option value="Ukraine">Ukraine</option>
                                                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                                                    <option value="United Kingdom">United Kingdom</option>
                                                                    <option value="United States" selected="selected">United States</option>
                                                                    <option value="Uruguay">Uruguay</option>
                                                                    <option value="Uzbekistan">Uzbekistan</option>
                                                                    <option value="Vanuatu">Vanuatu</option>
                                                                    <option value="Vatican City">Vatican City</option>
                                                                    <option value="Venezuela">Venezuela</option>
                                                                    <option value="Vietnam">Vietnam</option>
                                                                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                                                                    <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                                    <option value="Yemen">Yemen</option>
                                                                    <option value="Zambia">Zambia</option>
                                                                    <option value="Zimbabwe">Zimbabwe</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group mb-md-20 mt-4 row text-center">
                                                                <div className="col-md-6 m-auto">
                                                                    <button class="btn btn-primary btn-block focus-theme">Order Now</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-3">
                                            <Fade>
                                                <div className="row border-left-theme-md">
                                                    <div className="col-md-12 p-10">
                                                        <MediaCard
                                                            MediaCardColumn="col-md-12"
                                                            MediaCardIconDirection="left"
                                                            MediaCardRedirect="javascript:;"
                                                            MediaCardIconName="fas fa-clock fa-2x"
                                                            withoutBorder={true}
                                                            MediaCardHeading="On Time Delivery"
                                                            MediaCardDescription="There is no deadline that can stop our writers from delivering quality assignments to the students."
                                                        />
                                                        <MediaCard
                                                            MediaCardColumn="col-md-12 mt-30"
                                                            MediaCardIconDirection="left"
                                                            MediaCardRedirect="javascript:;"
                                                            MediaCardIconName="fas fa-file-alt fa-2x"
                                                            withoutBorder={true}
                                                            MediaCardHeading="Plagiarism Free Work"
                                                            MediaCardDescription="Get authentic and unique assignments by using our 100% plagiarism-free services"
                                                        />
                                                        <MediaCard
                                                            MediaCardColumn="col-md-12 mt-30"
                                                            MediaCardIconDirection="left"
                                                            MediaCardRedirect="javascript:;"
                                                            MediaCardIconName="fas fa-stopwatch fa-2x"
                                                            withoutBorder={true}
                                                            MediaCardHeading="24 X 7 Live Help"
                                                            MediaCardDescription="The experienced team of Live web tutors has got your back at all times of the day. Get connected with our customer support executives to receive instant and live solutions for your assignment problems."
                                                        />
                                                        <MediaCard
                                                            MediaCardColumn="col-md-12 mt-30"
                                                            MediaCardIconDirection="left"
                                                            MediaCardRedirect="javascript:;"
                                                            MediaCardIconName="fas fa-book fa-2x"
                                                            withoutBorder={true}
                                                            MediaCardHeading="Services For All Subjects"
                                                            MediaCardDescription="We can build quality assignments in the subjects you're passionate about. Be it Engineering and Literature or Law and Marketing we have an expert writer for all."
                                                        />
                                                        <MediaCard
                                                            MediaCardColumn="col-md-12 mt-30"
                                                            MediaCardIconDirection="left"
                                                            MediaCardRedirect="javascript:;"
                                                            MediaCardIconName="fas fa-thumbs-up fa-2x"
                                                            withoutBorder={true}
                                                            MediaCardHeading="Best Price Guarantee"
                                                            MediaCardDescription="Get premium service at a pocket-friendly rate. At livewebtutors, we understand the tight budget of students and thus offer our services at highly affordable prices."
                                                        />
                                                        <MediaCard
                                                            MediaCardColumn="col-md-12 mt-30"
                                                            MediaCardIconDirection="left"
                                                            MediaCardRedirect="javascript:;"
                                                            MediaCardIconName="fas fa-dollar-sign fa-2x"
                                                            withoutBorder={true}
                                                            MediaCardHeading="100% Money Back Gurantee"
                                                            MediaCardDescription="No Need To Worry About Refund Policy When With Us."
                                                        />
                                                        <MediaCard
                                                            MediaCardColumn="col-md-12 mt-30"
                                                            MediaCardIconDirection="left"
                                                            MediaCardRedirect="javascript:;"
                                                            MediaCardIconName="fas fa-smile fa-2x"
                                                            withoutBorder={true}
                                                            MediaCardHeading="100% Satisfaction Guarantee"
                                                            MediaCardDescription="Your Satisfaction Is Our Priority"
                                                        />
                                                    </div>
                                                </div>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Fade>
            </>
        )
    }
}

export default OrderFields
