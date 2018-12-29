import * as React from 'react';
import { connect } from 'react-redux';
import { getMoreList } from '../store/home.redux';
import { Link } from 'react-router-dom';
import { Article } from '../model';

interface ListProps {
  articleList: Array<Article>;
  page: number;
  getMoreList: (page: number) => void;
}

class List extends React.Component<ListProps> {
  loadMoreClick = () => {
    const page = this.props.page;
    this.props.getMoreList(page);
  };

  render() {
    const { articleList } = this.props;
    return (
      <div>
        {articleList.map((item, index) => (
          <div className="list-item" key={index}>
            <Link to={`/detail/${item.id}`}>
              <img src={item.imgUrl} alt="" />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Link>
          </div>
        ))}
        <div className="load-more" onClick={this.loadMoreClick}>
          更多文章
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): any => {
  return {
    page: state.homeReducer.page,
    articleList:state.homeReducer.articleList
  };
};

const mapDispathToProps = {
  getMoreList
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
  return { ...ownProps, ...stateProps, ...dispatchProps };
};

export default connect(
  mapStateToProps,
  mapDispathToProps,
  mergeProps
)(List);
