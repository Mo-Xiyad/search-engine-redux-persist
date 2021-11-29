import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./profile.css";

function Profile() {
  const params = useParams();
  const [jobs, setJobs] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getCurrentCompany = async () => {
    const response = await fetch(
      `https://strive-jobs-api.herokuapp.com/jobs?company=${params.company}`
    );
    if (response.ok) {
      const data = await response.json();
      setJobs(data);
      setRefresh(true);
    }
  };
  // console.log(params);

  useEffect(() => {
    getCurrentCompany();
  }, [refresh]);
  return (
    <div className="container con101">
      <div className="container mt-5">
        {jobs.data &&
          jobs.data.map((result, i) => (
            <div className="row" key={i}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="well search-result">
                  <div className="col-xs-6 col-sm-9 col-md-9 col-lg-10 title">
                    <h3>{result.title}</h3>
                    {/* <h3>{result._id}</h3> */}
                    <p>
                      Ut quis libero id orci semper porta ac vel ante. In nec
                      laoreet sapien. Nunc hendrerit ligula at massa sodales,
                      ullamcorper rutrum orci semper.
                    </p>
                  </div>
                  <div className="col-xs-6 col-sm-3 col-md-3 col-lg-2">
                    <div>
                      <small>
                        Company: <strong> {result.company_name}</strong>
                      </small>
                    </div>
                    <div>
                      <small>
                        Location:{" "}
                        <strong> {result.candidate_required_location}</strong>{" "}
                      </small>
                    </div>
                    <div>
                      <small>
                        Job Type: <strong> {result.job_type}</strong>{" "}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Profile;
