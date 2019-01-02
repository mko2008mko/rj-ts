import * as React from 'react';
import { connect } from 'react-redux';
import { getRWriterData, rwriter } from '../store/rwriter.redux';
import { updateRedirect } from '../../login/store/login.redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface RecommendWriterListProps extends RouteComponentProps {
  list: Array<rwriter>;
  page: number;
  isLogin: boolean;
  getRWriterData: (page: number) => void;
  updateRedirect: (path: string) => void;
}

// @withRouter
class RecommendWriterList extends React.Component<RecommendWriterListProps> {
  componentDidMount() {
    this.props.getRWriterData(this.props.page);
  }

  lodMore = () => {
    this.props.getRWriterData(this.props.page);
  };

  handleFallow = () => {
    if (!this.props.isLogin) {
      const pathname = this.props.location.pathname;
      this.props.updateRedirect(pathname);
      this.props.history.push('/login');
    }
  };

  render() {
    const { list } = this.props;
    // console.log(list);
    return (
      <div>
        <div className="rw-grid clear">
          {list.length
            ? list.map((item, index) => <GridItem item={item} key={index} follow={this.handleFallow} />)
            : null}
        </div>
        <RWLoadMore onClick={this.lodMore} />
      </div>
    );
  }
}

const mapStateToProp = (state: any) => {
  return {
    list: state.rwriterReducer.rwriterList,
    page: state.rwriterReducer.page,
    isLogin: state.loginReducer.isLogin
  };
};

const mapDispathToProps = { getRWriterData, updateRedirect };

export default connect(
  mapStateToProp,
  mapDispathToProps
)(withRouter(RecommendWriterList));

interface RWLoadMoreProps {
  onClick: () => void;
}
const RWLoadMore = (props: RWLoadMoreProps) => {
  return (
    <div className="rw-load-more-btn" onClick={props.onClick}>
      加载更多
    </div>
  );
};

interface GridItemProps {
  item: rwriter;
  follow: () => void;
}
const GridItem = (props: GridItemProps) => {
  const item = props.item;
  const news = item.new;

  return (
    <div className="rw-grid-item">
      <div className="item-wrapper">
        <img alt="" src={item.imgUrl} />
        <h4>宇文欢</h4>
        <p className="item-desc">{item.desc}</p>
        <div className="item-guanzhu" onClick={props.follow}>
          +关注
        </div>
        <hr />
        <span>最近更新</span>
        <div className="recent-update">
          {news.length ? news.map((item, index) => <p key={index}>{item}</p>) : null}

          {/* <p>一次被骗的经理</p>
                        <p>丝绸之路密码与Tina上的神秘经理啊啊啊</p> */}
        </div>
      </div>
    </div>
  );
};
