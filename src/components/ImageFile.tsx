import React, { Component } from 'react';
import { ControlErrors } from '../routes/Form';

class ImageFile extends Component<{ errors: ControlErrors }> {
  render() {
    const { errors } = this.props;
    return (
      <div className="control">
        <div>
          <label htmlFor="imageFile">Load Thumbnail:</label>
          <input id="imageFile" type="file" name="imageFile"></input>
        </div>
        {this.props.errors['imageFile'] && <span className="error-msg">{errors['imageFile']}</span>}
      </div>
    );
  }
}

export default ImageFile;
