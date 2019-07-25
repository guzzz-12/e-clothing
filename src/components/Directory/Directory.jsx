import React from 'react';
import "./directory.scss";
import MenuItem from '../MenuItem/MenuItem';
import {connect} from "react-redux";

const Directory = (props) => {
  return (
    <div className="directory-menu">
      {props.sections.map(section => {
        return <MenuItem key={section.id} title={section.title} image={section.imageUrl} size={section.size} linkUrl={section.linkUrl}/>
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sections: state.directory.sections
  }
}

export default connect(mapStateToProps)(Directory);
