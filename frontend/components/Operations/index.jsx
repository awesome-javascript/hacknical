import React from 'react';
import PropTypes from 'prop-types';
import OperationItem from './OperationItem';
import cx from 'classnames';
import { OutsideClickHandler } from 'light-ui';
import styles from './operations.css';

class Operations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOperations: props.showOperations || false
    };
    this.showOperationMenu = this.showOperationMenu.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  showOperationMenu() {
    this.changeOperationStatus(true);
  }

  changeOperationStatus(status) {
    if (status === this.state.showOperations) return;
    this.setState({
      showOperations: status
    });
    const { onFocusChange } = this.props;
    onFocusChange && onFocusChange(status);
  }

  handleOutsideClick() {
    this.changeOperationStatus(false);
  }

  renderMenus() {
    const { items } = this.props;
    return items.map((item, index) => (
      <OperationItem
        key={index}
        item={item}
      />
    ));
  }

  render() {
    const { showOperations } = this.state;
    const { className } = this.props;

    const containerClass = cx(
      styles.container,
      className
    );
    const moreIconClass = cx(
      styles.more,
      showOperations && styles.active
    );
    const menuClass = cx(
      styles.menu,
      showOperations && styles.menuActive
    );
    return (
      <OutsideClickHandler
        onOutsideClick={this.handleOutsideClick}>
        <div className={containerClass}>
          <div
            className={moreIconClass}
            onClick={this.showOperationMenu}>
            <i
              className="fa fa-ellipsis-h"
              aria-hidden="true"
            />
          </div>
          <div
            className={menuClass}
            ref={ref => (this.operationMenu = ref)}>
            {this.renderMenus()}
          </div>
        </div>
      </OutsideClickHandler>
    );
  }
}

Operations.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
  onFocusChange: PropTypes.func
};

Operations.defaultProps = {
  items: [],
  className: '',
  onFocusChange: Function.prototype
};

export default Operations;
