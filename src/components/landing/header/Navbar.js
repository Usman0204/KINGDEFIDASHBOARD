import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';
import { useWeb3React } from '@web3-react/core'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import FreeRoulette from '../../FreeRoulette/FreeRoulette'
import Evanglism from '../../evangelism/Evanglism';
// import $ from "jquery";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
//  Create WalletConnect Provider
// const provider = new WalletConnectProvider({
//     infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
// });
const Navbar = ({ setNavActive, navActive }) => {

    const { account } = useWeb3React();
    const { login, logout } = useAuth();
    const [show, setShow] = useState(false)
    const [blueshow, setBlueShow] = useState(false)
    // const connectwallet = () => {
    //     window.$("#exampleModalLong").modal('show');
    // }
    const connectMetaMask = () => {
        console.log("here", account)
        localStorage.setItem("connectorId", "injected")
        if (account) {
            logout()
        } else {
            login("injected")
        }
    }
    // const trustWallet = async () => {
    //     localStorage.setItem("connectorId", "walletconnect")
    //     if (account) {
    //         logout()
    //     } else {
    //         login("walletconnect")
    //     }
    // }
    const toggleShow = () => {
        setShow(!show)
        setNavActive(!navActive);
        if (blueshow === true) { setBlueShow(false) }
        // setBlueShow(!blueshow)
        // localStorage.setItem("show", show)
    }
    return (
        <>
            <section className="main-navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand text-sm-right text-center " href="/">
                                    <HashLink to='/'><img src="/hash-max-assets/header/logo.svg" className="img-fluid d-sm-block d-block" alt="" /></HashLink>
                                    {/* <HashLink to='/'><img src="/hash-max-assets/header/logo.svg" className="img-fluid d-sm-none d-block logo_img" alt="" /></HashLink> */}
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <div class="style-bar"></div>
                                    <div class="style-bar"></div>
                                    <div class="style-bar"></div>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto">
                                    </ul>
                                    <form className="form-inline my-2 my-lg-0">
                                        {/* <button className='btn-common'>Connect Wallet</button> */}
                                        {/* <HashLink className="nav-link" to="#roadmap">
                                ROADMAP
                            </HashLink> */}
                                    </form>
                                    {account ?
                                        <button className='btn-common button_design' onClick={connectMetaMask}>Disconnect Wallet</button>
                                        :
                                        <button className='btn-common button_design' onClick={connectMetaMask}>Connect Wallet</button>
                                    }
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <button onClick={toggleShow} className='burger-button'>{show ? <img src="/hash-max-assets/sidebar/menu-icon.svg" alt="" className='pb-1' /> : <i class="fa-solid common fa-bars"></i>}<i class="fa-solid fa-bars-filter"></i></button>
            </section>


            <div className="sidebar-main">
                <div className="container-fluid p-0">
                    <div className="row">
                        {/* <ddiv className={show ? "col-md-2 col-0 p-0 hidoo" : "col-md-0 col-0 p-0 hidoo"}> */}
                        <div className={show ? "sidebar-components sidebar-components2 d-block" : "sidebar-components sidebar-components2"}>
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                {/* <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"> */}
                                <Link to="/">
                                    <div className='sidebar-compo-innerContent pt-4'>
                                        <ul className="list-inline d-flex align-items-center">
                                            <li className="list-inline-item">
                                                <img src="hash-max-assets/sidebar/dashboard-icon.svg" alt="" />
                                            </li>
                                            {show && <li className="list-inline-item pt-1">
                                                <h6>Dashboard</h6>
                                            </li>
                                            }
                                        </ul>
                                    </div>
                                </Link>
                                {/* </a> */}
                                <a class="nav-link" href='https://pancakeswap.finance/swap?outputCurrency=0x8956692426786F16CF96922181553ef2d308de5C' target="_blank">
                                    <div className='sidebar-compo-innerContent'>
                                        <ul onClick={() => { setBlueShow(!blueshow); setShow(true) }} className="list-inline d-flex align-items-center">
                                            <li className="list-inline-item">
                                                <img src="hash-max-assets/sidebar/swap-icon.svg" alt="" />
                                            </li>
                                            {show && <>
                                                <li className="list-inline-item pt-1">
                                                    <h6>Swap</h6>
                                                </li>

                                            </>}
                                        </ul>

                                    </div>

                                </a>
                                <a class="nav-link" href="/staking">
                                    <div className='sidebar-compo-innerContent'>
                                        <ul className="list-inline d-flex align-items-center">
                                            <li className="list-inline-item">
                                                <img src="hash-max-assets/sidebar/staking-icon.svg" alt="" />
                                            </li>
                                            {show && <li className="list-inline-item pt-1">
                                                <h6>Staking</h6>
                                            </li>
                                            }
                                        </ul>
                                    </div>
                                </a>





                            </div>
                            {show &&
                                <div className='sidebar-compo-footer '>

                                    <div className="footer-logos d-flex justify-content-between pt-3 flex-wrap">
                                        <a target='_blank' href="https://t.me/officialdefikingscrypto">  <img src="hash-max-assets/sidebar/sidebar-footer/telegram-icon.svg" alt="" /></a>
                                        <a target='_blank' href="https://twitter.com/defikingscrypto">   <img src="hash-max-assets/sidebar/sidebar-footer/twitter-icon.svg" alt="" /></a>
                                        <a target='_blank' href="https://github.com/Usman0204/KINGDEFIDASHBOARD">   <img src="hash-max-assets/sidebar/sidebar-footer/github-icon.svg" alt="" /></a>
                                        <a target='_blank' href="https://www.facebook.com/DefiKingsCrypto">   <img src="hash-max-assets/sidebar/sidebar-footer/facebook-icon.svg" alt="" /></a>
                                        <a target='_blank' href="https://www.reddit.com/r/DefiKingsCrypto/">  <img src="hash-max-assets/sidebar/sidebar-footer/discord-icon.svg" alt="" /></a>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
