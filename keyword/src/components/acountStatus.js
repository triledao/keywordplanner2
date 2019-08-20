import React from 'react';
import avatar from "../logo/img-avatar.jpg";


class Account extends React.Component {
    render() {
        return (
            <div className="acc-status">
                <div className="dropdown split-v">
                    <div data-toggle="dropdown" className="acc-text"><span className="code">Nguyen Luong Nghia</span>
                    </div>
                </div>
                <div className="btn-wrap">
                    <button type="button" className="btn mr-5 "><i className="icon-setting" /></button>
                </div>

                <div className="btn-wrap">
                    <button type="button" className="btn mr-5"><i className="icon-bell" /></button>
                </div>

                <div className="avatar"><img src={avatar} alt="avatar" /> </div>
            </div>
        );
    }
}
export default Account;