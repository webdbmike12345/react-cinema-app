import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
  const { activeTab, label, onClick } = props;
  const [className, setClassName] = useState('tab-list-item');
  useEffect(() => {
    if (activeTab === label) {
      setClassName((prev) => (prev += ' tab-list-active'));
    } else {
      setClassName('tab-list-item');
    }
  }, [activeTab, label]);

  const onTabClick = () => {
    onClick(label);
  };
  return (
    <div className={className} onClick={onTabClick}>
      {label}
    </div>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Tab;
