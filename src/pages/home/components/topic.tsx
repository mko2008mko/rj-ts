import * as React from 'react';
import { connect } from 'react-redux';
import { Topic } from '../model';

interface TopicProps {
  topicList: Array<Topic>;
}

// @connect(
//     (state:any) => ({
//         topicList: state.homeReducer.topicList
//     }),
// )
class TopicComp extends React.Component<TopicProps> {
  render() {
    const { topicList } = this.props;
    // console.log(topicList);
    return (
      <div className="topicwrapper">
        {topicList.map(item => (
          <div className="topic-item" key={item.id}>
            <img className="topic-pic" src={item.imgUrl} alt="img" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: any): any => {
  return {
    topicList: state.homeReducer.topicList
  };
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
  return { ...ownProps, ...stateProps, ...dispatchProps };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(TopicComp);
