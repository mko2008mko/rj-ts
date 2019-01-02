import * as React from 'react';
import { connect } from 'react-redux';
import { getHomeDate, backTopIsShow } from './store/home.redux';
import List from './components/list';
import TopicComp from './components/topic';
import RecommendComp from './components/recommend';
import Writer from './components/writer';
import AppDownload from './components/appdownload';
import './style.less';

interface HomeProps {
  isShow: boolean;
  getHomeDate: () => void;
  backTopIsShow: (isshow: boolean) => void;
}
class Home extends React.Component<HomeProps> {
  constructor(props: HomeProps, public timerId: any) {
    super(props);
  }

  componentDidMount() {
    this.props.getHomeDate();
    window.addEventListener('scroll', this.handleBackTopIsShow);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    window.removeEventListener('scroll', this.handleBackTopIsShow);
  }

  handleBackTopIsShow = () => {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    this.timerId = setTimeout(() => {
      const backTopIsShow = this.props.backTopIsShow;
      document.documentElement.scrollTop > 100 ? backTopIsShow(true) : backTopIsShow(false);
    }, 20);
  };

  handleScroll = () => {
    window.scroll(0, 0);
  };
  public render() {
    return (
      <div>
        <div className="home-wrapper">
          <div className="home-left">
            <img
              className="banner-img"
              src="https://upload.jianshu.io/admin_banners/web_images/4591/30f6c3d080ff9d9610d745bd777b1c0ebba3e183.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt="s"
            />
            <TopicComp />
            <List />
          </div>
          <div className="home-right">
            <RecommendComp />
            <AppDownload/>
            <Writer/>
            {/* <Recommend />
            <AppDownload />
            <Writer /> */}
          </div>
          {this.props.isShow ? (
            <div className="back-top" onClick={this.handleScroll}>
              回到顶部
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): any => {
  return {
    isShow: state.homeReducer.isShow
  };
};

const mapDispathToProps = {
  getHomeDate,
  backTopIsShow
};

export function mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
  return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect(
  mapStateToProps,
  mapDispathToProps
  // mergeProps
)(Home);
