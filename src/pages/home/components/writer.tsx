import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changePage } from '../store/home.redux';
import RotateChange from '../../../components/rotatechange';
import { RecommendWriter } from '../model';

interface WriterProps {
  recommendWriter: Array<RecommendWriter>;
  rwPage: number;
  changePage: () => void;
}

class Writer extends React.Component<WriterProps> {
  handleChangePage = () => {
    this.props.changePage();
  };

  render() {
    const { recommendWriter, rwPage } = this.props;
    // console.log(recommendWriter)
    const rwList = recommendWriter;
    const pageList = [];
    // console.log(rwList);
    if (rwList.length) {
      for (let i = (rwPage - 1) * 5; i < rwPage * 5; i++) {
        pageList.push(
          <li key={rwList[i].id}>
            <img src={rwList[i].imgUrl} alt="" />
            <div>
              <h4>{rwList[i].name}</h4>
              <p>{rwList[i].desc}</p>
            </div>
            <span>+关注</span>
          </li>
        );
      }
    }

    return (
      <div className="write-wrapper">
        <div className="r-write-title clear">
          <p>推荐作者</p>
          <RotateChange handleChangePage={this.handleChangePage} />
        </div>
        <ul>
          {/* {recommendWriter.size ? recommendWriter.map(item => (
                        <li key={item.get('id')}>
                            <img src={item.get('imgUrl')} alt="" />
                            <div>
                                <h4>{item.get('name')}</h4>
                                <p>{item.get('desc')}</p>
                            </div>
                            <span>+关注</span>
                        </li>
                    ))
                        : null
                    } */}
          {pageList}
        </ul>
        <Link to={'/rwriter'}>
          <div className="r-w-findall">查看全部 ></div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    recommendWriter: state.homeReducer.recommendWriter,
    rwPage: state.homeReducer.rwPage
    // rwTotalPage: state.homeReducer.rwTotalPage
  };
};

const mapDispatchToProps = {
  changePage
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
  return { ...ownProps, ...stateProps, ...dispatchProps };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Writer);
