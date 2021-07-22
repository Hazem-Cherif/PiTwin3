import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function Certification() {
    const classes = useStyles();

    return (
        <>
            {/* -----------------------------------------------Header---------------------------------------------------------*/}

            <div className="page-title layout-1">
                <div className="main-top parallax" style={{ backgroundImage: 'url(../wp-content/uploads/sites/5/certification.jpg)' }}>
                    <span className="overlay-top-header" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />
                    <div className="content container">
                        <div className="row">
                            <div className="text-title col-md-6">
                                <h1>Certifications</h1> </div>
                            <div className="text-description col-md-6">
                                <div className="banner-description"><p><strong className="br">The best demo education </strong> Be successful with Course Builder theme.</p></div> </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-content breadcrumb-plus">
                    <div className="breadcrumbs-wrapper container">
                        <ul itemProp="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList" id="breadcrumbs" className="breadcrumbs">
                            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><a itemProp="item" href="/" title="Home">
                                <span itemProp="name">Home</span></a><meta itemProp="position" content={1} /><span className="breadcrum-icon">
                                    <i className="fa fa-angle-right" aria-hidden="true" /></span></li>
                            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                <span itemProp="name" title="All courses">Certifications</span><meta itemProp="position" content={2} /></li></ul> </div>
                </div>
            </div>


            <div id="top-sidebar-courses">
                <div >

                    <div className="vc_row wpb_row vc_row-fluid overflow top-courses-overflow vc_custom_1502273625937 vc_row-has-fill vc_row-no-padding"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="thim-sc-heading text-center layout-1 ">
                        <div className="heading-content">
                            <h3 className="primary-heading">Our International Certificates and universities , training schools and colleges  <br />  <br />
                            </h3> </div>

                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* -----------------------------------------------EndHeader---------------------------------------------------------*/}
            <div className="row mt-1">
                {/* -----------------------------------------------Left---------------------------------------------------------*/}

                <div className="col-md-6" style={{ padding: '10px 20px 10px 30px' }}>
                    <h3 style={{ padding: '10px 20px 10px 30px', fontSize: '25px', color: '#2C6975' }}><strong>The international instituations and colleges we offer it to you</strong></h3>

                    <div className={classes.root}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Toronto International Career University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Specialized in the certification of experience equivalence system such as:
                                    <br />1-Professional Bachelor.
                                    <br />2-Professional Masters.
                                    <br />3-Professional PhD.
                                    <br />They are equivalent certificates and cannot be equivalent from higher education and are documented by the US State Department and US embassy.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Commandos Coaching University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                The first coaching university registered in the US government operating in Arabic and English and specialized in coaching accreditation.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>CHICAGO BUSINESS SCHOOL</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Specialized training of business administration and enterprenurship.

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>LOS ANGELES ACADEMY FOR CREATIVITY & ART</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Academy specialized in the field of the arts and creativity .
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>The Lion Academy for Management&Leadership</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Special Academy for managers and leader to succeed in life.

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>THE HUMAN ACADEMY FOR PSYCHOLOGICAL & FAMILY & SPECIAL NEEDS</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Interested in the numbers of pioneers in the field of mental health services with special mental and physiological needs.

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        


                    </div>

                </div>


                {/* -----------------------------------------------Right---------------------------------------------------------*/}

                <div className="col-md-6" style={{ padding: '10px 20px 10px 30px' }}>
                <h3 style={{ padding: '10px 20px 10px 30px', fontSize: '25px', color: '#2C6975' }}><strong>The international instituations and colleges we offer it to you</strong></h3>

                    <div className={classes.root}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Workshop - Seminar Certificates</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                We offer a range of certificates that do not need to take tests at the end of the training program such as :
                                <br/> -Certificate of attending a training workshop.
                                <br/> -Attendance certificate of seminar
                                <br/> -Certificate of attendence.
                                <br/> -Non-printed e-certificate from most e-learning programs.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Attendance Certificates</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Attendance certificate of training program.
                                <br/>-A certificate issued when attending a full training program without passing a final exam just issued for participate.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Professional Training Program Certificate</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Professional training certificate is a certificate to be awarded for the training programs that require the granting of a test score at the end of the training program.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Professional Training Diploma</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Certificate of vocational training Diploma.
                                <br/>-Certificate awarded for specialized and in-depth training programs in a specific field and has an appropriate number of hours.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>International License</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                A certificate given when the trainee has a program to master the basic skills of a particular profession.
                               </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Certified Specialist</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                A certificate gives the trainee a test that qualifies him to be a competent specialist in a particular specialty.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Certified Manager</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                A certificate gives the trainee a qualification to be a competent manager in a particular discipline .
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>American Business and Technology University</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    American academic accredited by the American higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Certification
