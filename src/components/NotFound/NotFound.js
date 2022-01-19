import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import ImageSun from '../../images/sun404.svg'
function NotFound() {
  return (
            <section className="loginContainerAll">
                <img className='imageSunNotFound' src={ImageSun} alt="Sun 404" />
                    <div>
                        <main>
                            <div className='loginContainer'>
                                <div className='loginContent'>
                                    <span className='span404'>404</span>
                                    <h1 className='titleNotFound'>Page Not Found</h1>
                                    <hr className='lineNotFound'/>
                                    <p className='parraNotFound'>Requested resource is not available right now. Please try again later.</p>
                                    <Link to="/">
                                        <button className='btn-datosFormNotFound' type="submit">Go To DashBoard</button>
                                    </Link>
                                </div>
                                </div>
                        </main>
                    </div>
            </section>
  );
}

export default NotFound;