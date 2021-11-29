import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./profile.css";
import Spinner from "react-bootstrap/Spinner";
import { getCurrentCompanyJobList } from "../../redux/actions";

function Profile() {
  const params = useParams();
  const { jobs, isLoading } = useSelector((state) => state.companyJobList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentCompanyJobList(params.company));
  }, []);

  return (
    <div className="container con101">
      <div className="container mt-5">
        {isLoading ? (
          <div className="d-flex justify-content-center mt-5">
            <div className="mx-3">
              <Spinner animation="border" variant="danger" />
            </div>
            <h3>Loading...</h3>
          </div>
        ) : (
          jobs.data &&
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
          ))
        )}
      </div>
    </div>
  );
}

export default Profile;
