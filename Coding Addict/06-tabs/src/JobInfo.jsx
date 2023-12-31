import Duties from "./Duties.jsx";

const JobInfo = ({ jobs, tab }) => {
  const { title, duties, company, dates } = jobs[tab];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
