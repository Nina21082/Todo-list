import {PureComponent} from 'react'
export class CompButton extends PureComponent {
  render () {
    return (
          <button
            onClick={this.props.onClick}
          >
          Add
          </button>
        );
  }
}