import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Footer from '../landing/footer/Footer'
import './morocogod.scss'

function MoroccoGod({ active }) {


    return (
        <div>
            {/* <section className="main-navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="/">
                                <img src="/hash-max-assets/header/logo.svg" className="img-fluid logo_img logo_img2" alt="" />
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
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className={active ? 'top-cards-div pt-4 ml-5' : 'top-cards-div pt-4'}>
                <div className="container">
                    <p className='pts text-color'>KING DEFI CONTRACT ADDRESS : 0x5f806F283b29193cF96BBe88F8abDCAc4F52a9A3</p>
                    <div className="row px-sm-0 px-4">
                        <div className="col-md-6 col-12 mx-auto">
                            <a >
                                <button className='w-100 box'>
                                    <div className="innerCards">
                                        <div className='newheader'>
                                            <h4>KINGDEFI(DFK) Balance</h4>
                                        </div>
                                        <hr />
                                        <p className='mt-1'>0 DFK</p>
                                        <p className='mt-1'>$ 0</p>
                                    </div>
                                </button>
                            </a>
                        </div>
                        <div className="col-md-6 col-12 mx-auto">
                            <a >
                                <button className='w-100'>
                                    <div className="innerCards ">
                                        <div className='newheader'>
                                            <h4>Total Reward Paid</h4>
                                        </div>
                                        <hr />
                                        <p className='mt-1'>O DFk</p>
                                        <p className='mt-1'>$ 0</p>
                                    </div>
                                </button>
                            </a>
                        </div>
                        <div className="col-md-6 col-12 mt-4 mx-auto">
                            <a >
                                <button className='w-100'>
                                    <div className="innerCards ">
                                        <div className='newheader'>
                                            <h4>My Rewards</h4>
                                        </div>
                                        <hr />
                                        <p className='mt-1'>$ 0 DUSD</p>
                                        <p className='mt-1'>$ 0</p>
                                    </div>
                                </button>
                            </a>
                        </div>
                        <div className="col-md-6 col-12 mt-4 mx-auto">
                            <a>
                                <button className='w-100'>
                                    <div className="innerCards">
                                        <div className='newheader'>
                                            <h4>Set Or Update Reward Token</h4>
                                        </div>
                                        <hr />
                                        <div>
                                            <select className='form-control' value='' onChange=''>
                                                <option value="Ford">BUSD</option>
                                                <option value="Volvo">XRP</option>
                                                <option value="Fiat">ADA</option>
                                                <option value="Fiat">ETH</option>
                                            </select>
                                            <button className='btn btn-update' >Update Reward Token</button>

                                        </div>
                                    </div>
                                </button>
                            </a>
                        </div>
                        
                        <div className="col-md-6 col-12 mt-4 mx-auto">
                         <p className='address'>ADA: 0x5f806F283b29193cF96BBe88F8abDCAc4F52a9A3</p>
                         <p className='address'>ETH: 0x5f806F283b29193cF96BBe88F8abDCAc4F52a9A3</p>
                        </div>

                        <div className="col-md-6 col-12 mt-4 mx-auto">
                         <p className='address'>BUSD: 0x5f806F283b29193cF96BBe88F8abDCAc4F52a9A3</p>
                         <p className='address'>XRP: 0x5f806F283b29193cF96BBe88F8abDCAc4F52a9A3</p>
                        </div>

                        <div className="col-md-12 col-12 mt-4 mx-auto text-center">
                         <p className='address text-center'>*Add those addresses to their wallet so they can see the tokens in their wallet</p>
                        
                        </div>
                    </div>
                </div>

            </section>


            {/* <div className={active ? "ml-footer" : ""}>
                <Footer />
            </div> */}

        </div>
    )
}

export default MoroccoGod