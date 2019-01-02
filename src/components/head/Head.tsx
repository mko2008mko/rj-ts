import * as React from 'react';
import logoImg from '../../statics/logo.png';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { searchFocus, searchBlur, getList, mouseInChange, mouseOutChange, changPage } from './store/head.redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../pages/login/store/login.redux';
import RotateChange from '../rotatechange';

import './style.less';

export interface Props {
  focused: boolean;
  list: string[];
  page: number;
  totalPage: number;
  mouseIn: boolean;
  searchFocus: () => void;
  changPage: () => void;
  getList: () => void;
  mouseInChange: () => void;
  mouseOutChange: () => void;
  searchBlur: () => void;
  isLogin: boolean;
  logOut: () => void;
}

class Header extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  public handleChangePage() {
    this.props.changPage();
  }

  public handleFocus(list: string[]) {
    if (!list.length) {
      this.props.getList();
    }
    // list.size === 0 && this.props.getList();
    this.props.searchFocus();
  }

  public getArea = () => {
    //    console.log(this.props.focused)
    const { focused, list, page, mouseIn } = this.props;
    const pageList = [];
    // console.log(list,page)
    if (list.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <li key={list[i]}>
            <span>{list[i]}</span>
          </li>
        );
      }
    }

    if (focused || mouseIn) {
      // console.log(focused, mouseIn);
      return (
        <div className="navbar-search-tips">
          <div className="search-trending clear">
            <div className="search-trending-header">
              <span>热门搜索</span>
              <RotateChange handleChangePage={this.handleChangePage} />
            </div>
            <ul>{pageList}</ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  public render() {
    // console.log(this.props.list)
    const { focused, mouseInChange, mouseOutChange, list, isLogin, logOut } = this.props;
    return (
      <header>
        <a className="logo" href="/">
          <img src={logoImg} alt="" />
        </a>
        <div className="container clear">
          <ul>
            <li className="one">
              <a href="/">
                <span>首页</span>
              </a>
            </li>
            <li className="two">
              <a href="/">
                <span>下载App</span>
              </a>
            </li>
            <li className="three">
              <div className="wrapper-search">
                <CSSTransition in={focused} timeout={200} classNames="slide">
                  <input
                    placeholder="搜索"
                    className={focused ? 'focused' : ''}
                    onFocus={this.handleFocus.bind(this, list)}
                    onBlur={this.props.searchBlur}
                  />
                </CSSTransition>
                <i className={focused ? 'iconfont zoom ifocused' : 'iconfont zoom'}>&#xe614;</i>
                <div className="navbar-search-tips" onMouseEnter={mouseInChange} onMouseLeave={mouseOutChange}>
                  {/* <div className="search-trending clear">
                                    <div className="search-trending-header"><span>热门搜索</span><span>换一批</span></div>
                                    <ul>
                                        <li><span>教育</span></li>
                                        <li><span>教育</span></li>
                                        <li><span>教育</span></li>
                                        <li><span>教育啊</span></li>
                                        <li><span>教育啊</span></li>
                                        <li><span>教育啊</span></li>
                                        <li><span>教育啊</span></li>
                                    </ul>
                                </div> */}
                  {this.getArea()}
                  {/* {this.props.focused ? this.getArea() : null} */}
                </div>
              </div>
            </li>
          </ul>

          <div className="right">
            <div>
              <i className="iconfont">&#xe636;</i>
            </div>
            {isLogin ? (
              <div onClick={logOut}>退出</div>
            ) : (
              <Link to={`/login`}>
                <div>登录</div>
              </Link>
            )}
          </div>
        </div>
        <div className="addition">
          {/* <Link to={`/writer`}> */}
          <div className="rb writting">
            <i className="iconfont">&#xe615;</i>写文章
          </div>
          {/* </Link> */}
          <div className="rb reg">注册</div>
        </div>
      </header>
    );
    // }
  }
}

const mapStateToProps = (state: any): any => {
  // console.log(state.getIn(['headersReducer', 'list']));
  return {
    // focused: state.headersReducer.focused
    // focused: state.get('headersReducer').get('focused')
    // focused: state.getIn(['headersReducer', 'focused']),
    // list: state.getIn(['headersReducer', 'list']),
    // page: state.getIn(['headersReducer', 'page']),
    // mouseIn: state.getIn(['headersReducer', 'mouseIn']),
    // isLogin: state.getIn(['loginReducer', 'isLogin'])
    focused: state.headerReducer.focused,
    list: state.headerReducer.list,
    page: state.headerReducer.page,
    mouseIn: state.headerReducer.mouseIn,
    isLogin: state.loginReducer.isLogin
  };
};

const mapDispathToProps = (dispatch: any): any => {
  return {
    changPage() {
      dispatch(changPage());
    },
    searchFocus() {
      dispatch(searchFocus());
    },
    searchBlur() {
      dispatch(searchBlur());
    },
    getList() {
      dispatch(getList());
    },
    mouseInChange() {
      dispatch(mouseInChange());
    },
    mouseOutChange() {
      dispatch(mouseOutChange());
    },
    logOut(){
      dispatch(logOut());
    }
  };
  // searchFocus,
  // searchBlur,
  // getList,
  // mouseInChange,
  // mouseOutChange,
  // changPage
};

export function mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
  return { ...ownProps, ...stateProps, ...dispatchProps };
}

export default connect(
  mapStateToProps,
  mapDispathToProps,
  mergeProps
)(Header);
