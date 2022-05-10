import React,{ useState, useEffect }  from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Footer from '../landing/footer/Footer'
import { StandardToken } from '../../hooks/Morocofetcher';
import './morocogod.scss'
import {
    Spinner,
    UserInfo,MyReward,UserReward
} from '../../hooks/Morocofetcher';
function MoroccoGod({ active }) {
    const [pancakeToken, setpancakeToken] = useState('0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')
    const history = UserInfo();
    const myreward= MyReward();
    const userreward= UserReward();
    const { deployStandardToken } = StandardToken();
    const updatetoken= async()=>{
        let approve = await deployStandardToken(pancakeToken);
        console.log("approveee", approve)
    }

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
                    <p className='pts text-color'>KING DEFI CONTRACT ADDRESS : 0x8956692426786F16CF96922181553ef2d308de5C</p>
                    <div className="row px-sm-0 px-4">
                        <div className="col-md-6 col-12 mx-auto">
                            <a >
                                <button className='w-100 box'>
                                    <div className="innerCards">
                                        <div className='newheader'>
                                            <h4>KINGDEFI(DFK) Balance</h4>
                                        </div>
                                        <hr />
                                        <p className='mt-1'>{history} DFK</p>
                                        {/* <p className='mt-1'>$ 0</p> */}
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
                                        <p className='mt-1'>{userreward} DFk</p>
                                        {/* <p className='mt-1'>$ 0</p> */}
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
                                        <p className='mt-1'>{myreward} </p>
                                        {/* <p className='mt-1'>$ 0</p> */}
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
                                            <select className='form-control' onChange={(e) => setpancakeToken(e.target.value)}>
                                                <option value="0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE">BUSD</option>
                                                <option value="0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE">XRP</option>
                                                <option value="0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47">ADA</option>
                                                <option value="0x2170Ed0880ac9A755fd29B2688956BD959F933F8">ETH</option>
                                            </select>
                                            <button className='btn btn-update' onClick={updatetoken} >Update Reward Token</button>

                                        </div>
                                    </div>
                                </button>
                            </a>
                        </div>
                        
                        <div className="col-md-6 col-12 mt-4 mx-auto">
                         <p className='address'>ADA: 0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47</p>
                         <p className='address'>ETH: 0x2170Ed0880ac9A755fd29B2688956BD959F933F8</p>
                        </div>

                        <div className="col-md-6 col-12 mt-4 mx-auto">
                         <p className='address'>BUSD: 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56</p>
                         <p className='address'>XRP: 0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE</p>
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