import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";
import { Button } from "react-bootstrap";
function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div>
        <Button
          variant="secondary"
          onClick={() => deleteFeedback(item.id)}
          className="close"
        >
          Delete
        </Button>
      </div>
      <div>
        <Button
          variant="primary"
          style={{ marginRight: "13%", top: '50%', left: '83.5%' }}
          onClick={() => editFeedback(item)}
          className="edit"
        >
          Edit
        </Button>
      </div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
