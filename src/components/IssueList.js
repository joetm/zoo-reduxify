import { Component, PropTypes } from 'react';


export default class IssueList extends Component {
  constructor(props) {
    super(props);
    this.renderClassroomList = this.renderClassroomList.bind(this);
  }

  renderClassroomList(data) {
    const list = (data.length > 0) ? data : [];
    return (
      <div className="list-group">
        { list.map((item, i) =>
          <div key={i} className="list-group-item">
            <h1><a href={item.html_url} target="_blank">{item.title}</a></h1>
            <p>{item.body}</p>
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div>
      { this.renderClassroomList(this.props.issues.data) }
      </div>
    )
  }
}

IssueList.defaultProps = {
  issues: {
    data: [],
    error: false,
    loading: false,
  },
};
