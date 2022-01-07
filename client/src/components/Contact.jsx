import React from 'react';
import styles from './Contact.module.css'

import { TextField } from '@material-ui/core';

const Contact = (props) => {

    return (
        <div className={styles.faq_main}>
            <div className={styles.faq_content}>
                <h1 className={styles.faq_title}>FAQs</h1>
                <div className={styles.faqs}>
                    <input className={styles.checkbox} type="checkbox" id="faq_1" />
                    <h3><label className={styles.q} for="faq_1">What is Lively?</label></h3>
                    <div className={styles.p}>
                        <p>
                            Lively is an application designed to display the busyness of a public venue at the current hour as well as forecasts the busyness of a public venue at each hour of the current day.
                            Forecasts are based on visitor patterns gathered from prior weeks. The graph data uses forecast values, which are displayed as percentages, ranging from 0 to 100%.
                            The percentage indicates how busy a venue approximately is relative to its peak of the week.
                        </p>
                    </div>
                </div>

                <div className={styles.faqs}>
                    <input className={styles.checkbox} type="checkbox" id="faq_2" />
                    <h3><label className={styles.q} for="faq_2">How do you gather live data?</label></h3>
                    <div className={styles.p}>
                        <p>
                            Live data is based on anonymized smartphone GPS signals. Third-party mobile apps collect the data from users who chooses to opt-in. This is all gathered using BestTime's API.
                        </p>
                    </div>
                </div>

                <div className={styles.faqs}>
                    <input className={styles.checkbox} type="checkbox" id="faq_3" />
                    <h3><label className={styles.q} for="faq_3">Does it work on all venues?</label></h3>
                    <div className={styles.p}>
                        <p>
                            No. Venues need enough visitors in order to make accurate analysis and forecasts.
                        </p>
                    </div>
                </div>

            </div>

            <div className={styles.bottom_form}>
                <h4>Questions, comments, or concerns? Contact Us!</h4>
                <form className={styles.contact_form}>
                    <div className={styles.form_div}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" size="small" fullWidth />
                    </div>
                    <div className={styles.form_div}>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small" fullWidth />
                    </div>
                    <div className={styles.form_div}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" size="small" fullWidth />
                    </div>
                    <TextField
                        className={styles.form_div}
                        id="outlined-multiline-static"
                        label="Type your message here"
                        multiline
                        rows={7}
                        variant="outlined"
                    />
                    <button>Send Message</button>
                </form>
            </div>
        </div >
    )
}

export default Contact;