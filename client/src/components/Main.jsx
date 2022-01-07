import React, { useState } from 'react';
import styles from './Main.module.css';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import dateFormat from 'dateformat';

const now = new Date();

const Main = (props) => {
    const [venueName, setVenueName] = useState("");
    const [venueAddress, setVenueAddress] = useState("");
    const [venueAnalysis, setVenueAnalysis] = useState("");
    const [venueInfo, setVenueInfo] = useState({});
    const [surgeHours, setSurgeHours] = useState("");
    const [quietHours, setQuietHours] = useState([]);
    const [busyHours, setBusyHours] = useState([]);
    const [rawData, setRawData] = useState([]);

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [error, setError] = useState("");

    let d = new Date();

    const submitHandler = (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        // var d = new Date();
        const today = d.getDay();
        const now = d.getHours();

        const params = new URLSearchParams({
            'api_key_private': 'pri_82018102bb1e44c28cc23f37bfc81d76',
            // 'api_key_private': `${process.env.REACT_APP_BESTTIME_API_KEY}`,
            'venue_name': venueName,
            'venue_address': venueAddress
        });

        fetch(`https://besttime.app/api/v1/forecasts/live?${params}`, {
            method: 'POST'
        }).then(data => {
            if (data.ok) {
                setError("");
                return data.json();
            } else {
                throw new Error("Some fields are missing. Please re-enter the required information.")
            }
        }).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
            setError(err);
        })


        fetch(`https://besttime.app/api/v1/forecasts?${params}`, {
            method: 'POST'
        }).then(data => {
            if (data.ok) {
                setError("");
                return data.json()
            } else {
                throw new Error("Something went wrong")
            }
        }).then(data => {
            console.log(data);
            setVenueInfo(data.venue_info);
            // console.log(data.venue_info);
            setVenueAnalysis(data.analysis);
            console.log(data.analysis[today]);
            setRawData(data.analysis[today]["day_raw"]);
            setSurgeHours(data.analysis[today]["surge_hours"]);
            setQuietHours(data.analysis[today]["quiet_hours"]);
            setBusyHours(data.analysis[today]["busy_hours"]);
            setDate(today);
            setTime(now);
        }).catch(err => {
            console.log(err);
            setError(err)
        })
    }

    // Chartjs --------------------------------------------------------------------------------
    const data = {
        labels: ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM",
            "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12AM", "1AM", "2AM", "3AM", "4AM", "5AM"],
        datasets: [
            {
                label: "Forecasted Busyness (%)",
                data: rawData,
                fill: true,
                backgroundColor: "rgba(204,153,255,0.2)",
                borderColor: "rgba(204,153,255,0.6)"
            }
        ]
    };

    const legend = {
        display: true,
        position: "bottom",
        labels: {
            fontColor: "#CC99FF",
            fontSize: 14
        }
    };

    const options = {
        title: {
            display: true,
            text: "Chart Title"
        },
        scales: {
            y: {
                max: 100,
                min: 0
            }
        }
    };

    return (
        <div>
            {/********************** Form **********************/}
            <h1 className={styles.main_h1}>Where are we going today?</h1>
            {
                error &&
                <p className={styles.err_msg}>Please check the name and location. Else, there may not be enough traffic data at this particular location.</p>
            }
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.input}>
                    <label for="name">Venue Name: </label>
                    <input type="text" id="name" onChange={(e) => setVenueName(e.target.value)} value={venueName} />
                </div>
                <div className={styles.input}>
                    <label for="address">Near: </label>
                    <input type="text" id="address" onChange={(e) => setVenueAddress(e.target.value)} value={venueAddress} />
                </div>
                <button className={styles.search_btn}>Search</button>
            </form>

            {/********************** Body content **********************/}
            <div>
                {hasSubmitted && !error ?
                    <div className={styles.results}>
                        <div className={styles.main_analysis_box}>
                            <p className={styles.date}>{dateFormat(d, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                            <h2>You searched for: </h2>

                            {Object.keys(venueInfo).length > 0 &&
                                <div className={styles.results_info}>
                                    <p>{venueInfo.venue_name}</p>
                                    <p>{venueInfo.venue_address}</p>
                                    <p>Timezone: {venueInfo.venue_timezone}</p>
                                    <p>Type: {venueInfo.venue_type.replaceAll('_', ' ')}</p>
                                    {/* <p>
                                        Today's Hours: &nbsp;
                                        {venueAnalysis[date]["day_info"]["venue_open"]} AM - {venueAnalysis[date]["day_info"]["venue_closed"] % 12} PM 
                                    </p> */}
                                </div>
                            }
                        </div>

                        {/*********** Boxes ***********/}
                        <div className={styles.analysis_container}>
                            <div className={styles.analysis_box}>
                                Surge Hours:<br />
                                Hour that most people visit: {surgeHours.most_people_come} AM <br />
                                Hour that most people leave: {surgeHours.most_people_leave % 12} PM
                            </div>
                            <div className={styles.analysis_box}>
                                Quiet Hours: &nbsp;
                                {busyHours.length > 0 ? quietHours.map(idx => {
                                if (idx > 12) {
                                    return <p>{idx % 12} PM</p>;
                                } else if (idx === 12) {
                                    return <p>{idx} PM</p>;
                                } else {
                                    return <p>{idx} AM</p>
                                }
                            }) : "None to display"}
                            </div>
                            <div className={styles.analysis_box}>
                                Busy Hours: &nbsp;
                                {busyHours.length > 0 ? busyHours.map(idx => {
                                if (idx > 12) {
                                    return <p>{idx % 12} PM</p>;
                                } else if (idx === 12) {
                                    return <p>{idx} PM</p>;
                                } else {
                                    return <p>{idx} AM</p>
                                }
                            }) : "None to display"}
                            </div>
                        </div>
                    </div> : <h4 className={styles.main_h4}>Enter a location to get started</h4>
                }

                {/********************** Categories **********************/}
                {Object.keys(venueInfo).length > 0 &&
                    <div className={styles.categories_tags}>
                        {venueInfo.venue_types.map(idx => {
                            return <p>{idx.replaceAll('_', ' ')}</p>
                        })}
                    </div>
                }

                {/********************** Graph data **********************/}
                <div className={styles.chart_container}>
                    <h4 className={styles.chart_title}>Busyness Chart</h4>
                    <Line className={styles.chart} data={data} legend={legend} options={options} />
                    <p className={styles.chart_info}>
                        The chart above lists raw busyness data for each hour of the day.
                        The graph contains percentages ranging from 0 to 100, indicating the busyness percentage.
                        Percentages are based on historical visits for the given hour, relative to the biggest peak of the week for this venue.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;