import * as React from 'react';

import './style.less';

interface Props {
  handleChangePage: () => void;
}

interface States {
  spinIcon: any;
}

class RotateChange extends React.Component<Props, States> {
  constructor(props: Props,public spinIcon:any) {
    super(props);
    this.state = {
      spinIcon: null
    };
  }

  public handleClick = (spin: any) => {
    let originAngle = spin.style.transform.replace(/[^0-9]/gi, '');
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    spin.style.transform = `rotate(${originAngle + 360}deg)`;
    this.props.handleChangePage();
  };

  public render() {
    return (
      <span onClick={this.handleClick.bind(this, this.spinIcon)} style={{ marginLeft: 50 }}>
        <i
          className="iconfont spin"
          ref={icon => {
            // this.setState({ spinIcon: icon });
            this.spinIcon = icon;
          }}
        >
          &#59473;
        </i>
        换一批
      </span>
    );
  }
}

export default RotateChange;
