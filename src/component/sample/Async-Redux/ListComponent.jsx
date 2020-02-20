import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchPosts} from "./postActions";
import {isEmpty} from "lodash";

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    const {items, fetchPosts} = this.props;
    return (
      <div>
        <input type="button" onClick={() => fetchPosts()} value="调用后台"></input>
        {!isEmpty(items) && (
          <ul>
            {items.map(item => {
              return <li key={item.userId}>{item.userName}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.post.items,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListElement);
