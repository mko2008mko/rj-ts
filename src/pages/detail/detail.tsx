import * as React from 'react';
import './style.less';
import { connect } from 'react-redux';
import { getDetailData } from './store/detail.redux';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

interface DetailProps extends RouteComponentProps {
  getDetailData: (id: string) => void;
  //   match: any;
  title: string;
  content: string;
}

class Detail extends React.Component<DetailProps> {
  componentDidMount() {
    const params: any = this.props.match.params;
    // console.log("111")
    this.props.getDetailData(params.id);
  }

  render() {
    return (
      <div className="detail-wrapper">
        <div className="detail-header">{this.props.title}</div>
        <div className="detail-content" dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}

const mapStateToProp = (state: any) => {
  return {
    title: state.detailReducer.title,
    content: state.detailReducer.content
  };
};

const mapDispathToProps = {
  getDetailData
};

export function mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
  return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect(
  mapStateToProp,
  mapDispathToProps
)(withRouter(Detail));
