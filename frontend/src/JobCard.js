import './JobCard.css';
import { Button } from 'reactstrap';

const JobCard = ({ job }) => {
  return (
    <div className="JobCard">
      <h5>{job.title}</h5>
      <div className="JobCard-content">
        <div className="JobCard-content-left">
          <div>Salary: {job.salary}</div>
          <div>Equity: {job.equity}</div>
        </div>
        <div className="JobCard-content-right">
          <Button color="danger">APPLY</Button>
        </div>
      </div>
    </div>
  )
}

export default JobCard;