import map from "../imgs/New_York_Counties.svg";
// import ny from "../imgs/newyorkoverview.jpeg";
import "../index.css";

function Home() {
    return (
        <div className="background-img">
            <section id="header-box" className="box text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div>
                            <h1>Explore Open Data from <span className="text-info"> New York City </span></h1>
                            <p className="lead my-4">
                                This dataset is hosted by the City of New York.
                                Explore everyone's worst nightmare-parking violations-from New York.
                                Learn about the most common types of violations,
                                most common violatons by car brands, violations
                                by time of date, and more. Click the button below to start searching!
                                {/* The city has an open data platform found here and
                            the information is updated when new data is brought in.
                            Explore New York City using Kaggle and
                            all of the data sources available
                            through the City of New York organization page! */}
                            </p>
                            <a href="/search">
                                <button
                                    className="btn btn-primary btn-lg"
                                    data-bs-toggle="modal"
                                >
                                    Start Searching
                                </button>
                            </a>
                        </div>
                        <img
                            className="img-fluid w-50 d-none d-sm-block"
                            src={map}
                            alt="map of ny counties"
                        />
                    </div>
                </div>
            </section>
            {/* <section>
                <div>
                    <img className="img-fluid w-100" src={ny} alt="newyorkview" />
                </div>
            </section> */}
        </div>
    );
};

export default Home;