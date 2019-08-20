import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.props.topic}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>{this.props.option1}</DropdownItem>
                    <DropdownItem>{this.props.option2}</DropdownItem>
                    <DropdownItem>{this.props.option3}</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}
