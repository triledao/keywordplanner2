import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/jquery-ui.min.css';
import './css/jquery.scrollbar.min.css';
import Container from "./components/container";
import Account from "./components/acountStatus";
import Example from "./components/dropdown";
import data from "./components/data.json";


class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="header">

                <Container/>
                <Account/>

                </header>

                    <main>
                        <div className="outer-content pl-0">
                            <div className="container-fluid">
                                <div className="heading-page">
                                    <div className="block-title no-breadcrumb">
                                        <h1 className="title">Keyword Planner</h1>
                                    </div>
                                </div>

                                <div className="block-inner-content">
                                    <div className="inner-content">
                                        <div className="wrap-chart box-info filter">
                                            <div className="wrap-chart-left">
                                                <div className="filter-bar">

                                                    <div className="join-text">Location</div>
                                                        <Example topic="Choose a Location" option1="Vietnam" option2="Singapore" option3="Malaysia"/>
                                                    <div className="join-text">Language</div>
                                                        <Example topic="Choose a language" option1="Vietnamese" option2="English" option3="French" />
                                                    <div className="join-text">Search Network</div>
                                                   <Example topic="Network" option1="Google" option2="Tiki" option3="Lazada"/>
                                                    <Example topic="Last 7 days: March 2, 2018 - March 8, 2018" option1="Last 14 days: February 24, 2018 - March 8, 2018" option3="Last month: February 8, 2018 - March 8, 2018"/>

                                                </div>
                                                <div className="button">
                                                    <button type="submit" className="btn btn-green float-right">Get Result</button>
                                                    <div className="campaign-filter-v2">
                                                        <div className="select-container">
                                                            <input type="search" placeholder="Search.." className="select-search"/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="dropdown float-right mr-0">
                                                    <button type="button" className="btn btn-default"><i className="icon-cloud-down"></i></button>
                                                </div>
                                                <div className="dropdown dropdown-columns float-right">
                                                    <button type="button" className="btn btn-default dropdown-toggle">Columns</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wrap-table">
                                            <div className="table-responsive">
                                                <table className="table table-bordered">
                                                    <thead className="sticky-table">
                                                    <tr>
                                                        <th className="text-left"><span
                                                            className="">Keyword (by Relevance)</span></th>
                                                        <th className="text-left"><span
                                                            className="">Avg. Monthly Searches</span></th>
                                                        <th className="text-left"><span className="">Competition</span></th>
                                                        <th className="text-left"><span className="">Ad Impression Share</span>
                                                        </th>
                                                        <th className="text-left"><span
                                                            className="">Top of Page Bid (low range)</span></th>
                                                        <th className="text-left"><span className="">Top of Page Bid (high range)</span>
                                                        </th>
                                                        <th className="text-left"><span className="">Account Status</span></th>
                                                    </tr>
                                                    </thead>

                                                    <tbody>
                                                    <tr>
                                                        <td className="text-left">an</td>
                                                        <td className="text-right">10k-100k</td>
                                                        <td className="text-left">Low</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">$0.02</td>
                                                        <td className="text-right">$1.11</td>
                                                        <td className="text-left"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">abc online</td>
                                                        <td className="text-right">1k-10k</td>
                                                        <td className="text-left">Low</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">$0.07</td>
                                                        <td className="text-right">$0.57</td>
                                                        <td className="text-left"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">the abc</td>
                                                        <td className="text-right">10-100</td>
                                                        <td className="text-left">High</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-left"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">the an</td>
                                                        <td className="text-right">10-100</td>
                                                        <td className="text-left">Medium</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-left"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-left">an in</td>
                                                        <td className="text-right">10-100</td>
                                                        <td className="text-left">Low</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-left"></td>
                                                    </tr>
                                                    </tbody>

                                                    <tfoot className="sticky-table">
                                                    <tr className="total-grid">
                                                        <td className=""></td>
                                                        <td className=""></td>
                                                        <td className=""></td>
                                                        <td className=""></td>
                                                        <td className=""></td>
                                                        <td className=""></td>
                                                        <td className=""></td>
                                                    </tr>
                                                    <tr className="last-tfoot">
                                                        <td colSpan="101">
                                                            <div className="wrap-table-footer clearfix">
                                                                <div className="record-table d-flex">
                                                                    <span className="record-name">Show</span>
                                                                    <div className="dropdown d-inline-block">
                                                                        <button
                                                                            className="btn btn-default btn-full dropdown-toggle"
                                                                            type="button" data-toggle="dropdown"
                                                                            style={{width: '60px'}}>50
                                                                        </button>
                                                                        <span className="record-name">rows.</span>
                                                                        <div className="dropdown-menu" style={{minWidth: '60px'}}>
                                                                            <a className="dropdown-item" href="">10</a>
                                                                            <a className="dropdown-item" href="">20</a>
                                                                            <a className="dropdown-item" href="">30</a>
                                                                            <a className="dropdown-item" href="">50</a>
                                                                            <a className="dropdown-item" href="">100</a>
                                                                            <a className="dropdown-item" href="">200</a>
                                                                        </div>
                                                                    </div>
                                                                    <span className="record-num">201-217 of 217</span>
                                                                    <div className="d-inline-block">
                                                                        <ul className="pagination">
                                                                            <li className="page-item first disabled"><a
                                                                                className="page-link" href="">first</a></li>
                                                                            <li className="page-item prev"><a
                                                                                className="page-link" href="">prev</a></li>
                                                                            <li className="page-item next"><a
                                                                                className="page-link" href="">next</a></li>
                                                                            <li className="page-item last"><a
                                                                                className="page-link" href="">last</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </main>
            </div>
        );
    }
}

export default App;