import * as React from 'react';

import { Recommend } from '../model';
import { connect } from 'react-redux';

interface RecommendProps {
  list: Array<Recommend>;
}

class RecommendComp extends React.Component<RecommendProps> {
  render() {
    const { list } = this.props;
    return (
      <div className="recommend-wrapper">
        {list.map(item => (
          <img key={item.id} src={item.imgUrl} alt="" />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: any): any => {
  return {
    list: state.homeReducer.recommendList
  };
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
  return { ...ownProps, ...stateProps, ...dispatchProps };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(RecommendComp);
