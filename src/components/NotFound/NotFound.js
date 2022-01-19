import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import ImageSun from '../../images/sun404.svg'
function NotFound() {
  return (
        <section className="notFoundContainerAll">
            <img className='imageSunNotFound' src={ImageSun} alt="Sun 404" />
                    <main>
                        <div className='notFoundContainer'>
                            <div className='notFoundContent'>
                                <span className='span404'>404</span>
                                <h1 className='titleNotFound'>Page Not <span>Found</span></h1>
                                <hr className='lineNotFound'/>
                                <p className='parraNotFound'>Requested resource is not available right now. Please try again later.</p>
                                <Link to="/">
                                    <button className='btn-datosFormNotFound' type="submit">Go To DashBoard</button>
                                </Link>
                            </div>
                        </div>
                        <div className='imagenFondoNotFound'>
                        </div>
                    </main>
         </section>
  );
}

export default NotFound;